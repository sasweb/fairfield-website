import { slugToName } from '@/cms/getCategories';
import { Post } from '@/cms/types/Post';
import { cn } from '@/shared/utils/tailwind';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

export const PostTeaser = async ({ className, post }: { className?: string; post: Post }) => {
  const t = await getTranslations();

  return (
    <Link
      href={`/blog/${post.category}/${post.id}`}
      key={post.id}
      className={cn(`group space-y-2`, className)}
    >
      <div className="overflow-hidden rounded-sm">
        <Image
          className="w-full transition-transform group-hover:scale-105"
          src={post.imageUrl}
          alt={post.title}
          width={200}
          height={150}
        />
      </div>
      <div className="flex flex-wrap text-xs md:text-sm">
        <span className="mr-1 font-bold text-brand-gold">{slugToName(post.category)},</span>
        <span>
          {post.date}, {post.readingTime} {t('Lesezeit')}
        </span>
      </div>
      <h2 className="text-lg font-semibold">{post.title}</h2>
    </Link>
  );
};
