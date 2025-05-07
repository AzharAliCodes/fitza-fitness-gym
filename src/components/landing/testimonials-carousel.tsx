"use client"

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"

const testimonials = [
  {
    name: 'Sarah L.',
    image: 'https://picsum.photos/200/200?random=4',
    dataAiHint: 'happy woman',
    story: "I lost 30 pounds in 3 months! The trainers at Vitality Landing are amazing and kept me motivated. I've never felt better.",
  },
  {
    name: 'John B.',
    image: 'https://picsum.photos/200/200?random=5',
    dataAiHint: 'smiling man',
    story: "Joining this gym was the best decision I've made for my health. The personalized programs made all the difference. Highly recommend!",
  },
  {
    name: 'Emily K.',
    image: 'https://picsum.photos/200/200?random=6',
    dataAiHint: 'fit person',
    story: "The community here is so supportive. I've not only lost weight but also gained a lot of confidence. Thank you, Vitality Landing!",
  },
  {
    name: 'Mike P.',
    image: 'https://picsum.photos/200/200?random=7',
    dataAiHint: 'strong individual',
    story: "I struggled with weight for years. The trainers created a realistic plan that worked for my lifestyle. I'm down 50 pounds and counting!",
  },
];

export function TestimonialsCarousel() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Success Stories from Our Members
        </h2>
        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col shadow-lg overflow-hidden">
                    <CardContent className="flex flex-col items-center justify-center p-6 flex-grow">
                      <div className="mb-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          data-ai-hint={testimonial.dataAiHint}
                          width={120}
                          height={120}
                          className="rounded-full border-4 border-primary"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{testimonial.name}</h3>
                      <p className="text-muted-foreground text-center leading-relaxed">
                        "{testimonial.story}"
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-primary hover:text-primary/80 border-primary hover:bg-primary/10" />
          <CarouselNext className="text-primary hover:text-primary/80 border-primary hover:bg-primary/10" />
        </Carousel>
      </div>
    </section>
  );
}
