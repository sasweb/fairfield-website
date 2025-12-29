import { Post } from '@/cms/types/Post';
import { formatDate } from '@/shared';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export const getLatestPosts = async ({
  count,
}: { count?: number } = {}): Promise<Array<Post> | null> => {
  if (!fs.existsSync(postsDirectory)) {
    return null;
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        id,
        title: data.title,
        category: data.category,
        content,
        date: formatDate(
          data.date instanceof Date ? data.date.toISOString().split('T')[0] : data.date,
        ),
        readingTime: data.readingTime || '5 min',
        excerpt: data.excerpt,
        imageUrl: data.imageUrl || '/pattern.jpg',
      } as Post;
    });

  const sortedPosts = allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));

  if (count) {
    return sortedPosts.slice(0, count);
  }

  return sortedPosts;
};
