import { getCategories, slugToName } from '@/cms/getCategories';
import { cn } from '@/shared';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export const CategoryNav = async ({ activeTab }: { activeTab?: string }) => {
  const categories = await getCategories();
  const t = await getTranslations();

  return (
    <div className="mb-16 flex gap-5 xl:mb-20">
      <Link
        className={cn('text-[1.25rem] px-2 text-center', {
          'border-b-2 border-brand-gold border-solid font-semibold': !activeTab,
        })}
        href="/blog"
      >
        {t('All')}
      </Link>
      {categories.map((category) => (
        <Link
          key={category.slug}
          className={cn('text-[1.25rem] px-2 text-center', {
            'border-b-2 border-brand-gold border-solid font-semibold': activeTab === category.slug,
          })}
          href={`/blog/${category.slug}`}
        >
          {slugToName(category.slug)}
        </Link>
      ))}
    </div>
  );
};
