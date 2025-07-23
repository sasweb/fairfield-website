import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const ContactLayout = ({ children }: { children: React.ReactNode }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default ContactLayout;
