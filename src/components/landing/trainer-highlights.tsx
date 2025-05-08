
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Award, Zap, Target, Users } from 'lucide-react';

const trainers = [
  {
    name: 'Alice Wonderland',
    photo: 'https://picsum.photos/300/300?random=1',
    dataAiHint: 'female trainer',
    specialties: ['Weight Loss', 'Strength Training'],
    certifications: ['ACE Certified Personal Trainer', 'NASM Nutrition Coach'],
  },
  {
    name: 'Bob The Builder',
    photo: 'https://picsum.photos/300/300?random=2',
    dataAiHint: 'male trainer',
    specialties: ['HIIT', 'Functional Fitness'],
    certifications: ['CrossFit Level 1', 'ISSA Certified Fitness Trainer'],
  },
  {
    name: 'Carol Danvers',
    photo: 'https://picsum.photos/300/300?random=3',
    dataAiHint: 'female trainer intense',
    specialties: ['Yoga & Pilates', 'Post-Natal Fitness'],
    certifications: ['RYT 200 Yoga Instructor', 'AFPA Pre/Post Natal Specialist'],
  },
];

export function TrainerHighlights() {
  return (
    <section id="certificates" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Certifications
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Our team holds recognized certifications, ensuring you receive expert guidance. We are committed to upholding the highest standards in fitness and wellness training.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <Card key={index} className="flex flex-col overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="p-0">
                <Image
                  src={trainer.photo}
                  alt={trainer.name}
                  data-ai-hint={trainer.dataAiHint}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="text-2xl font-semibold mb-2 text-foreground">{trainer.name}</CardTitle>
                <div className="mb-4">
                  <h4 className="font-semibold text-primary flex items-center mb-1">
                    <Zap className="mr-2 h-5 w-5" /> Specialties:
                  </h4>
                  <ul className="list-disc list-inside text-muted-foreground">
                    {trainer.specialties.map((specialty) => (
                      <li key={specialty}>{specialty}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary flex items-center mb-1">
                    <Award className="mr-2 h-5 w-5" /> Certifications:
                  </h4>
                  <ul className="list-disc list-inside text-muted-foreground">
                    {trainer.certifications.map((cert) => (
                      <li key={cert}>{cert}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="p-6 bg-muted/50">
                <Button variant="link" className="text-accent hover:text-accent/90 p-0 h-auto" asChild>
                  <Link href={`/trainers/${trainer.name.toLowerCase().replace(' ', '-')}`}>Learn More <Target className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground" asChild>
            <Link href="/trainers">Meet Our Certified Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
