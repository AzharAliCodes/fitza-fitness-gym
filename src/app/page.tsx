import { SiteHeader } from '@/components/landing/site-header';
import { HeroSection } from '@/components/landing/hero-section';
import { TrainerHighlights } from '@/components/landing/trainer-highlights';
import { TestimonialsCarousel } from '@/components/landing/testimonials-carousel';
import { WeightLossPrograms } from '@/components/landing/weight-loss-programs';
import { BlogPreview } from '@/components/landing/blog-preview';
import { ContactSection } from '@/components/landing/contact-section';
import { SiteFooter } from '@/components/landing/site-footer';

export default function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <WeightLossPrograms />
        <TrainerHighlights />
        <TestimonialsCarousel />
        <BlogPreview />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
