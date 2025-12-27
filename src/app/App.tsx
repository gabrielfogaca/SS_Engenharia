import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Expertise } from './components/Expertise';
import { Partners } from './components/Partners';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Location } from './components/Location';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Expertise />
        <Partners />
        <Services />
        <Projects />
        <Contact />
        <Location />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}