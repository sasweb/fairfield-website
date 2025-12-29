import { Hero } from '@/app/blog/[category]/[id]/Hero';
import { RecommendedPosts } from '@/app/blog/[category]/[id]/RecommendedPosts';
import { getPostById } from '@/cms/getPostById';
import { ShareButton } from '@/components/ShareButton';
import Markdown from 'react-markdown';

const BlogPostPage = async ({ params }: { params: Promise<{ category: string; id: string }> }) => {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) {
    return <div className="container">Post not found</div>;
  }

  return (
    <div className="container lg:w-10/12">
      <div className="mb-16 ">
        <Hero post={post} />
        <article className="prose max-w-none">
          <Markdown>{post.content}</Markdown>
        </article>

        <hr className="mb-8 mt-16 border-black" />
        <div>
          <ShareButton title={post.title} />
        </div>
      </div>
      <RecommendedPosts />
    </div>
  );
};

export default BlogPostPage;
