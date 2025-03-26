import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { FAQ } from './FAQ';
import { Logos } from './Logos';
import { Service } from './Service';
import { Solution } from './Solution';
import { Stage } from './Stage';

const Home = () => (
  <div>
    <Header />
    <Stage />
    <Logos />
    <Solution />
    <Service />
    <FAQ />
    <Footer />
  </div>
);

export default Home;
