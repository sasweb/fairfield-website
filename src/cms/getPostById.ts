import { nameToSlug } from '@/cms/getCategories';
import { Post } from '@/cms/types/Post';
import { formatDate } from '@/shared';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export const getPostById = async (id: string): Promise<Post | null> => {
  try {
    const fullPath = path.join(postsDirectory, `${id}.md`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      id,
      title: data.title,
      category: nameToSlug(data.category),
      content,
      date:
        formatDate(data.date instanceof Date ? data.date.toISOString().split('T')[0] : data.date) ??
        '',
      readingTime: data.readingTime || '5 min',
      excerpt: data.excerpt,
      imageUrl: data.imageUrl || '/pattern.jpg',
    };
  } catch {
    return null;
  }
};
