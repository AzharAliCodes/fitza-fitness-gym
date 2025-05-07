"use client"

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import { BookOpen } from 'lucide-react';

const blogPosts = [
  {
    title: '5 Simple Swaps for a Healthier Diet',
    image: 'https://picsum.photos/400/250?random=8',
    dataAiHint: 'healthy food',
    excerpt: 'Discover easy food substitutions that can make a big impact on your weight loss journey and overall health.',
    link: '/blog/healthy-diet-swaps',
  },
  {
    title: 'The Truth About Cardio for Weight Loss',
    image: 'https://picsum.photos/400/250?random=9',
    dataAiHint: 'person running',
    excerpt: 'Is cardio king? We break down the science behind cardiovascular exercise and its role in shedding pounds.',
    link: '/blog/cardio-weight-loss',
  },
  {
    title: 'Top 3 Exercises to Boost Your Metabolism',
    image: 'https://picsum.photos/400/250?random=10',
    dataAiHint: 'person lifting weights',
    excerpt: 'Learn which exercises can fire up your metabolism and help you burn more calories even at rest.',
    link: '/blog/metabolism-boosting-exercises',
  },
  {
    title: 'Mindful Eating: A Beginner\'s Guide',
    image: 'https://picsum.photos/400/250?random=11',
    dataAiHint: 'meditation food',
    excerpt: 'Explore the practice of mindful eating and how it can transform your relationship with food and support weight loss.',
    link: '/blog/mindful-eating-guide',
  },
];

export function BlogPreview() {
  return (
    <section id="blog" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Latest from Our Blog
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 6000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {blogPosts.map((post, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col h-full overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <CardHeader className="p-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        data-ai-hint={post.dataAiHint}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover"
                      />
                    </CardHeader>
                    <CardContent className="p-6 flex-grow">
                      <CardTitle className="text-xl font-semibold mb-2 text-foreground hover:text-primary transition-colors">
                        <Link href={post.link}>{post.title}</Link>
                      </CardTitle>
                      <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter className="p-6 bg-muted/50">
                      <Button variant="link" className="text-accent hover:text-accent/90 p-0 h-auto" asChild>
                        <Link href={post.link}>Read More <BookOpen className="ml-2 h-4 w-4" /></Link>
                      </Button>
                    </CardFooter>
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
