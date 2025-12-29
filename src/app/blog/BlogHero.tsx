import { slugToName } from '@/cms/getCategories';
import { Post } from '@/cms/types/Post';
import { Button } from '@/components/Button';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

export const BlogHero = async ({ post }: { post: Post | null }) => {
  const t = await getTranslations();

  if (!post) {
    return null;
  }

  return (
    <div className="mb-32 mt-12">
      <h1 className="mb-8 text-4xl font-bold">Blog</h1>
      <div className="flex flex-col gap-6 md:flex-row md:gap-16">
        <Link className="w-1/2" href={`/blog/${post.category}/${post.id}`}>
          <Image className="w-full" src={post.imageUrl} alt={post.title} width={600} height={400} />
        </Link>
        <div className="flex flex-col justify-center gap-6">
          <div className="flex text-sm">
            <span className="mr-1 font-bold text-brand-gold">{slugToName(post.category)},</span>
            <span>
              {post.date}, {post.readingTime} {t('Lesezeit')}
            </span>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-lg">{post.excerpt}</p>
          </div>
          <Button asChild variant={'outline'} className="w-fit">
            <Link href={`/blog/${post.category}/${post.id}`}>{t('Weiterlesen')}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
