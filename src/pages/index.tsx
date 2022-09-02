import AboutMe from '@/components/layout/AboutMe';
import Experience from '@/components/layout/Experience';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/layout/Hero';
import Projects from '@/components/layout/Projects';
import Skills from '@/components/layout/Skills';
import MiniNav from '@/components/ui/Nav/MiniNav';
import Navbar from '@/components/ui/Nav/Navbar';
import ThemeToggler from '@/components/ui/ThemeToggler';

const Index = () => (
  <main>
    {/* weird spacing issue at the top is solved by p-[1px] */}
    <div className="bg-[url('/circuit.svg')] p-[1px]">
      <Navbar />
      <MiniNav />
      <Hero />
    </div>
    <AboutMe />
    <Experience />
    <Skills />
    <Projects />
    <Footer />
    <ThemeToggler />
  </main>
);

export default Index;
