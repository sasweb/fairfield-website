import { BlogHero } from '@/app/blog/BlogHero';
import { CategoryNav } from '@/app/blog/CategoryNav';
import { PostsGrid } from '@/app/blog/PostsGrid';
import { getLatestPosts } from '@/cms/getLatestPosts';

const BlogPage = async () => {
  const posts = await getLatestPosts({ count: 1 });

  return (
    <div className="container">
      <BlogHero post={posts?.[0] ?? null} />
      <CategoryNav />
      <PostsGrid />
    </div>
  );
};

export default BlogPage;
