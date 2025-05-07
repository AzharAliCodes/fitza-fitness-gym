import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Zap, Target, HeartPulse, Utensils } from 'lucide-react';

const programs = [
  {
    title: 'Rapid Results Fat Burn',
    icon: <Zap className="h-10 w-10 text-primary mb-4" />,
    description: 'An intensive 8-week program designed for maximum fat loss through high-intensity interval training (HIIT) and metabolic conditioning.',
    link: '/programs/rapid-results',
  },
  {
    title: 'Sustainable Lifestyle Change',
    icon: <HeartPulse className="h-10 w-10 text-primary mb-4" />,
    description: 'A balanced, long-term approach combining moderate exercise, nutritional guidance, and habit-building for lasting weight management.',
    link: '/programs/sustainable-lifestyle',
  },
  {
    title: 'Strength & Sculpt',
    icon: <Target className="h-10 w-10 text-primary mb-4" />,
    description: 'Focus on building lean muscle mass to boost metabolism and sculpt your physique. Includes progressive resistance training and body composition tracking.',
    link: '/programs/strength-sculpt',
  },
  {
    title: 'Nutrition Overhaul',
    icon: <Utensils className="h-10 w-10 text-primary mb-4" />,
    description: 'A comprehensive nutrition-focused program with personalized meal plans, dietary education, and ongoing support from certified nutritionists.',
    link: '/programs/nutrition-overhaul',
  },
];

export function WeightLossPrograms() {
  return (
    <section id="programs" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Our Weight Loss Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="flex flex-col overflow-hidden shadow-lg transform hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center text-center">
                {program.icon}
                <CardTitle className="text-2xl font-semibold text-foreground">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                <CardDescription className="text-muted-foreground leading-relaxed">{program.description}</CardDescription>
              </CardContent>
              <CardFooter className="justify-center p-6 bg-muted/50">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <Link href={program.link}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
