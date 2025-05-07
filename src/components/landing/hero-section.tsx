import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-4rem)] min-h-[500px] md:min-h-[600px] flex items-center justify-center text-center text-white">
      <Image
        src="https://picsum.photos/1920/1080"
        alt="Fitness enthusiasts working out"
        data-ai-hint="fitness workout"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 brightness-50"
      />
      <div className="relative z-10 p-8 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight shadow-md animate-fade-in-up">
          Transform Your Body with Expert Trainers
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed animate-fade-in-up animation-delay-300">
          At Vitality Landing, we're dedicated to helping you achieve your weight loss goals through personalized training, cutting-edge programs, and a supportive community. Start your journey to a healthier, happier you today.
        </p>
        <Button 
          size="lg" 
          className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 animate-fade-in-up animation-delay-600"
          asChild
        >
          <Link href="#contact">Join Now</Link>
        </Button>
      </div>
      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
}
