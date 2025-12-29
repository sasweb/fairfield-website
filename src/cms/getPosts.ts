import { Category } from '@/cms/types/Category';
import { nameToSlug } from '@/cms/getCategories';
import { Post } from '@/cms/types/Post';
import { formatDate } from '@/shared';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export const getPosts = async ({
  categoryFilter,
}: {
  categoryFilter?: Category['slug'];
}): Promise<Array<Post>> => {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        id,
        title: data.title,
        category: nameToSlug(data.category),
        date: formatDate(
          data.date instanceof Date ? data.date.toISOString().split('T')[0] : data.date,
        ),
        readingTime: data.readingTime || '5 min',
        excerpt: data.excerpt,
        imageUrl: data.imageUrl || '/pattern.jpg',
      } as Post;
    });

  const filteredPosts = categoryFilter
    ? allPosts.filter((post) => post.category === categoryFilter)
    : allPosts;

  return filteredPosts.sort((a, b) => (a.date > b.date ? -1 : 1));
};
