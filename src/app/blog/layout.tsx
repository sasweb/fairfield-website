import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export const metadata = {
  title: 'Blog - Fairfield & Archer',
  robots: 'noindex,nofollow',
};

const BlogLayout = ({ children }: { children: React.ReactNode }) => (
  <div>
    <Header />
    {children}
    <Footer className="mt-0" />
  </div>
);

export default BlogLayout;
