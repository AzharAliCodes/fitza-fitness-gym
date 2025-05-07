import Link from 'next/link';
import { Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" aria-label="Vitality Landing Home">
          <Dumbbell className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl text-foreground">Vitality Landing</span>
        </Link>
        <nav className="flex items-center space-x-2">
          <Button variant="ghost" asChild>
            <Link href="#programs">Programs</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#trainers">Trainers</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#contact">Contact</Link>
          </Button>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <Link href="#contact">Join Now</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
