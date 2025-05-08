
"use client";

import Link from 'next/link';
import { Dumbbell, Menu } from 'lucide-react'; // Removed X as it's provided by SheetContent
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
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu if an anchor link on the same page is clicked
  const handleMobileLinkClick = (href: string) => {
    if (href.startsWith("/#")) {
      setIsMobileMenuOpen(false);
    } else {
       // For actual page navigations, useEffect above will handle it.
       // But to be safe for any other link types, we can also close here.
      setIsMobileMenuOpen(false);
    }
  };

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
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0"> {/* Adjusted padding */}
              <div className="flex flex-col h-full">
                {/* SheetContent provides its own close button, so remove the custom one here */}
                <div className="flex items-center p-4 border-b"> {/* Removed justify-between as close button is now absolute */}
                  <Link href="/#page-top" className="flex items-center space-x-2" onClick={() => handleMobileLinkClick("/#page-top")}>
                    <Dumbbell className="h-8 w-8 text-primary" />
                    <span className="font-bold text-xl text-foreground">Vitality</span>
                  </Link>
                  {/* The default X button from SheetContent will be used */}
                </div>
                <nav className="flex flex-col space-y-2 p-4 flex-grow">
                  {navLinks.map(link => (
                     <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                          onClick={() => handleMobileLinkClick(link.href)}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                  ))}
                </nav>
                <div className="p-4 border-t">
                  <SheetClose asChild>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                      <Link href="#contact" onClick={() => handleMobileLinkClick("#contact")}>Join Now</Link>
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
