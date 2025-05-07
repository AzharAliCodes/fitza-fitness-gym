
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
import { ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah L.',
    beforeImage: 'https://picsum.photos/200/200?random=4',
    afterImage: 'https://picsum.photos/200/200?random=14',
    beforeDataAiHint: 'woman overweight',
    afterDataAiHint: 'woman fit',
    story: "I lost 30 pounds in 3 months! The trainers at Vitality Landing are amazing and kept me motivated. I've never felt better.",
  },
  {
    name: 'John B.',
    beforeImage: 'https://picsum.photos/200/200?random=5',
    afterImage: 'https://picsum.photos/200/200?random=15',
    beforeDataAiHint: 'man unhealthy',
    afterDataAiHint: 'man healthy',
    story: "Joining this gym was the best decision I've made for my health. The personalized programs made all the difference. Highly recommend!",
  },
  {
    name: 'Emily K.',
    beforeImage: 'https://picsum.photos/200/200?random=6',
    afterImage: 'https://picsum.photos/200/200?random=16',
    beforeDataAiHint: 'person before fitness',
    afterDataAiHint: 'person after fitness',
    story: "The community here is so supportive. I've not only lost weight but also gained a lot of confidence. Thank you, Vitality Landing!",
  },
  {
    name: 'Mike P.',
    beforeImage: 'https://picsum.photos/200/200?random=7',
    afterImage: 'https://picsum.photos/200/200?random=17',
    beforeDataAiHint: 'man before transformation',
    afterDataAiHint: 'man after transformation',
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
              delay: 7000, // Increased delay slightly for more complex content
              stopOnInteraction: true,
            }),
          ]}
          className="w-full max-w-5xl mx-auto" // Adjusted max-width for potentially wider cards
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2 xl:basis-1/3"> {/* Adjusted basis for wider cards */}
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col shadow-lg overflow-hidden">
                    <CardContent className="flex flex-col items-center p-6 flex-grow">
                      <div className="flex items-center justify-center space-x-3 mb-4 w-full">
                        <div className="flex flex-col items-center">
                          <Image
                            src={testimonial.beforeImage}
                            alt={`${testimonial.name} - Before`}
                            data-ai-hint={testimonial.beforeDataAiHint}
                            width={100}
                            height={100}
                            className="rounded-md border-2 border-muted object-cover aspect-square"
                          />
                          <p className="text-xs text-center text-muted-foreground mt-1">Before</p>
                        </div>
                        <ArrowRight className="h-6 w-6 text-primary shrink-0" />
                        <div className="flex flex-col items-center">
                          <Image
                            src={testimonial.afterImage}
                            alt={`${testimonial.name} - After`}
                            data-ai-hint={testimonial.afterDataAiHint}
                            width={100}
                            height={100}
                            className="rounded-md border-2 border-primary object-cover aspect-square"
                          />
                          <p className="text-xs text-center text-muted-foreground mt-1">After</p>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground text-center">{testimonial.name}</h3>
                      <p className="text-muted-foreground text-center leading-relaxed text-sm">
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
