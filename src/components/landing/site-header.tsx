
"use client";

import Link from 'next/link';
import { Dumbbell, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: "/#page-top", label: "Home" },
  { href: "/#programs", label: "Programs" },
  { href: "/#certificates", label: "Certificates" },
  { href: "/#feedback", label: "Success Stories" },
  { href: "/#blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/#page-top" className="flex items-center space-x-2" aria-label="Vitality Landing Home">
          <Dumbbell className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl text-foreground">Vitality Landing</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map(link => (
            <Button variant="ghost" asChild key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <Link href="#contact">Join Now</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-4 border-b">
                  <Link href="/#page-top" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <Dumbbell className="h-8 w-8 text-primary" />
                    <span className="font-bold text-xl text-foreground">Vitality</span>
                  </Link>
                  <SheetClose asChild>
                     <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col space-y-2 p-4 flex-grow">
                  {navLinks.map(link => (
                     <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                  ))}
                </nav>
                <div className="p-4 border-t">
                  <SheetClose asChild>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                      <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Join Now</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
