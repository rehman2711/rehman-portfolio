import Container from '@/components/common/Container';
import About from '@/components/landing/About';
import Experience from '@/components/landing/Experience';
import Github from '@/components/landing/Github';
import Hero from '@/components/landing/Hero';
import Journey from '@/components/landing/Journey';
import Work from '@/components/landing/Projects';

export default function page() {
  return (
    <Container className="min-h-screen md:px-12 md:py-4">
      <Hero />
      <Experience />
      <Work />
      <About />
      <Github />
      <Journey />
    </Container>
  );
}
