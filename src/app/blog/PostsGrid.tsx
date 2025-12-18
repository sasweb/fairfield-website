import { PostTeaser } from '@/app/blog/PostTeaser';
import { getPosts } from '@/cms/getPosts';

export const PostsGrid = async ({ filteredCategory }: { filteredCategory?: string }) => {
  const posts = await getPosts({ categoryFilter: filteredCategory });

  return (
    <div className="mb-16 mt-12 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post) => (
        <PostTeaser key={post.id} post={post} />
      ))}
    </div>
  );
};
