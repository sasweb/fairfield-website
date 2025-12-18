import { Category } from '@/cms/types/Category';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export const slugToName = (slug: string): string =>
  slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export const getCategories = async (): Promise<Array<Category>> => {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const categorySlugs = new Set<string>();

  fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .forEach((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      if (data.category) {
        categorySlugs.add(data.category);
      }
    });

  return Array.from(categorySlugs).map((slug) => ({
    name: slugToName(slug),
    slug,
  }));
};
