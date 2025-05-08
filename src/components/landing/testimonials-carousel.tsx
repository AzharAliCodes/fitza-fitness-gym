
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
import { ArrowRight, ArrowDown } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah L.',
    beforeImage: 'https://picsum.photos/250/250?random=4',
    afterImage: 'https://picsum.photos/250/250?random=14',
    beforeDataAiHint: 'woman overweight',
    afterDataAiHint: 'woman fit',
    story: "I lost 30 pounds in 3 months! The trainers at Vitality Landing are amazing and kept me motivated. I've never felt better.",
  },
  {
    name: 'John B.',
    beforeImage: 'https://picsum.photos/250/250?random=5',
    afterImage: 'https://picsum.photos/250/250?random=15',
    beforeDataAiHint: 'man unhealthy',
    afterDataAiHint: 'man healthy',
    story: "Joining this gym was the best decision I've made for my health. The personalized programs made all the difference. Highly recommend!",
  },
  {
    name: 'Emily K.',
    beforeImage: 'https://picsum.photos/250/250?random=6',
    afterImage: 'https://picsum.photos/250/250?random=16',
    beforeDataAiHint: 'person before fitness',
    afterDataAiHint: 'person after fitness',
    story: "The community here is so supportive. I've not only lost weight but also gained a lot of confidence. Thank you, Vitality Landing!",
  },
  {
    name: 'Mike P.',
    beforeImage: 'https://picsum.photos/250/250?random=7',
    afterImage: 'https://picsum.photos/250/250?random=17',
    beforeDataAiHint: 'man before transformation',
    afterDataAiHint: 'man after transformation',
    story: "I struggled with weight for years. The trainers created a realistic plan that worked for my lifestyle. I'm down 50 pounds and counting!",
  },
];

export function TestimonialsCarousel() {
  return (
    <section id="feedback" className="py-16 lg:py-24 bg-background">
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
              delay: 7000, 
              stopOnInteraction: true,
            }),
          ]}
          className="w-full max-w-3xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 basis-full">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col shadow-lg overflow-hidden">
                    <CardContent className="flex flex-col items-center p-6 flex-grow">
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 w-full">
                        <div className="flex flex-col items-center">
                          <Image
                            src={testimonial.beforeImage}
                            alt={`${testimonial.name} - Before`}
                            data-ai-hint={testimonial.beforeDataAiHint}
                            width={250} 
                            height={250}
                            className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-[250px] lg:h-[250px] rounded-lg border-2 border-muted object-cover aspect-square shadow-md"
                          />
                          <p className="text-sm text-center text-muted-foreground mt-2">Before</p>
                        </div>
                        
                        <ArrowDown className="h-8 w-8 text-primary sm:hidden shrink-0" />
                        <ArrowRight className="hidden sm:block h-8 w-8 md:h-10 md:w-10 text-primary shrink-0" />

                        <div className="flex flex-col items-center">
                          <Image
                            src={testimonial.afterImage}
                            alt={`${testimonial.name} - After`}
                            data-ai-hint={testimonial.afterDataAiHint}
                            width={250}
                            height={250}
                            className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-[250px] lg:h-[250px] rounded-lg border-2 border-primary object-cover aspect-square shadow-md"
                          />
                          <p className="text-sm text-center text-muted-foreground mt-2">After</p>
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground text-center">{testimonial.name}</h3>
                      <p className="text-muted-foreground text-center leading-relaxed text-base">
                        "{testimonial.story}"
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-primary hover:text-primary/80 border-primary hover:bg-primary/10 -left-4 sm:-left-8 md:-left-12" />
          <CarouselNext className="text-primary hover:text-primary/80 border-primary hover:bg-primary/10 -right-4 sm:-right-8 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
}
