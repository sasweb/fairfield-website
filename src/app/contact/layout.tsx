import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const ContactLayout = ({ children }: { children: React.ReactNode }) => (
  <div>
    <Header />
    {children}
    <Footer className="mt-0" />
  </div>
);

export default ContactLayout;
