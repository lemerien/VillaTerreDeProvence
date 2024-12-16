import { Hero } from '../components/home/Hero';
import { Features } from '../components/home/Features';
import { AboutSection } from '../components/home/AboutSection';
import { DescriptionSection } from '../components/home/DescriptionSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { SignFootMenu } from '../components/layout/SignFootMenu';

export function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Features />
      <DescriptionSection />
      <TestimonialsSection />
      <SignFootMenu />
    </>
  );
}