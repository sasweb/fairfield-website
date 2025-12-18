import { PostTeaser } from '@/app/blog/PostTeaser';
import { getLatestPosts } from '@/cms/getLatestPosts';
import { cn } from '@/shared/utils/tailwind';
import { getTranslations } from 'next-intl/server';

export const RecommendedPosts = async () => {
  const posts = await getLatestPosts({ count: 2 });
  const t = await getTranslations();

  if (!posts) {
    return null;
  }

  return (
    <div className="mb-24 flex flex-col justify-between gap-8 lg:flex-row">
      <h2 className={cn('w-full lg:w-1/5 xl:w-1/3 text-xl font-bold')}>{t('Weitere Beiträge')}</h2>
      <div className="flex w-full gap-8 lg:w-4/5 xl:w-2/3">
        {posts.map((post) => (
          <PostTeaser className={cn('w-full lg:w-1/2 ')} key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
