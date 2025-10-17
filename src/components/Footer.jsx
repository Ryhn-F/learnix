import Link from "next/link";
import { SiInstagram, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-black/30 border-t border-white/10 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Learnix</h3>
            <p className="text-foreground/60 text-sm">
              Smart Learning for the Future. Technology for New Era.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-foreground/60 hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/features" className="text-foreground/60 hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/technology" className="text-foreground/60 hover:text-primary transition-colors">Technology</Link></li>
              <li><Link href="/contact" className="text-foreground/60 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/r_xyy._/" className="text-foreground/60 hover:text-primary transition-colors">
                <SiInstagram />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-rayhan-firdaus-958b20302/" className="text-foreground/60 hover:text-primary transition-colors">
               <SiLinkedin />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-foreground/60">
          <p>&copy; 2025 Learnix.  All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
