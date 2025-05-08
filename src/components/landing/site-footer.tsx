import Link from 'next/link';
import { Dumbbell, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/#page-top" className="flex items-center space-x-2 mb-4" aria-label="FitzaFitness Home">
              <Dumbbell className="h-10 w-10" />
              <span className="font-bold text-2xl">FitzaFitness</span>
            </Link>
            <p className="text-sm text-center md:text-left opacity-80">
              Transforming bodies, empowering lives.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#programs" className="hover:text-accent-foreground transition-colors opacity-80 hover:opacity-100">Programs</Link></li>
              <li><Link href="#certificates" className="hover:text-accent-foreground transition-colors opacity-80 hover:opacity-100">Certificates</Link></li>
              <li><Link href="/classes" className="hover:text-accent-foreground transition-colors opacity-80 hover:opacity-100">Classes</Link></li>
              <li><Link href="/blog" className="hover:text-accent-foreground transition-colors opacity-80 hover:opacity-100">Blog</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-accent-foreground transition-colors opacity-80 hover:opacity-100">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-accent-foreground transition-colors opacity-80 hover:opacity-100">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent-foreground transition-colors opacity-80 hover:opacity-100">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent-foreground transition-colors opacity-80 hover:opacity-100">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-70">
          &copy; {new Date().getFullYear()} FitzaFitness. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
