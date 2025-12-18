import { slugToName } from '@/cms/getCategories';
import { Post } from '@/cms/types/Post';
import { ShareButton } from '@/components/ShareButton';
import Image from 'next/image';
import Link from 'next/link';

export const Hero = ({ post }: { post: Post }) => (
  <div className="mb-10 lg:mb-20 ">
    <div className="flex justify-between">
      <h1 className="my-8 text-2xl font-semibold leading-snug md:text-4xl">{post.title}</h1>
      <ShareButton title={post.title} />
    </div>
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="flex w-full gap-1 text-sm lg:w-1/5 lg:flex-col">
        <Link className="font-bold text-brand-gold" href={`/blog/${post.category}`}>
          {slugToName(post.category)}
        </Link>
        <p>{post.date}</p>
      </div>
      <Image
        className="w-full lg:w-4/5"
        src={post.imageUrl}
        alt={post.title}
        width={600}
        height={400}
      />
    </div>
  </div>
);
