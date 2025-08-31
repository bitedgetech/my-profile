
import Link from "next/link";
import { Cpu, Linkedin, Twitter, Mail, Phone, MapPin, Instagram, Github, Facebook } from "lucide-react";
import { NewsletterForm } from "./newsletter-form";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About */}
          <div className="space-y-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Cpu className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground font-headline">
                BitEdge
              </span>
            </Link>
            <p className="text-muted-foreground">
              Innovative IT solutions to power your business growth. We are committed to excellence and customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="https://www.instagram.com/bitedge_technologies?igsh=Y2VoYjU1Nmc0NXF1" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-6 w-6" />
              </Link>
               <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
              </Link>
              <a href="https://wa.me/923106450020" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-headline">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="/portfolio" className="text-muted-foreground hover:text-primary">Portfolio</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="/our-process" className="text-muted-foreground hover:text-primary">Our Process</Link></li>
              <li><Link href="/ecosystem" className="text-muted-foreground hover:text-primary">Ecosystem</Link></li>
              <li><Link href="/team-builder" className="text-muted-foreground hover:text-primary">Team Builder</Link></li>
              <li><Link href="/dev-tracker" className="text-muted-foreground hover:text-primary">Dev Tracker</Link></li>
              <li><Link href="/success-calculator" className="text-muted-foreground hover:text-primary">Savings Calculator</Link></li>
              <li><Link href="/timeline-generator" className="text-muted-foreground hover:text-primary">Timeline Generator</Link></li>
              <li><Link href="/idea-validator" className="text-muted-foreground hover:text-primary">Idea Validator</Link></li>
              <li><Link href="/founders-corner" className="text-muted-foreground hover:text-primary">Founder's Corner</Link></li>
              <li><Link href="/founder-story" className="text-muted-foreground hover:text-primary">Founder's Story</Link></li>
              <li><Link href="/engineering-principles" className="text-muted-foreground hover:text-primary">Engineering Principles</Link></li>
              <li><Link href="/tech-quiz" className="text-muted-foreground hover:text-primary">Tech Quiz</Link></li>
              <li><Link href="/code-battle" className="text-muted-foreground hover:text-primary">Code Battle</Link></li>
              <li><Link href="/feedback" className="text-muted-foreground hover:text-primary">Feedback</Link></li>
              <li><Link href="/grant-program" className="text-muted-foreground hover:text-primary">Grant Program</Link></li>
              <li><Link href="/wall-of-fame" className="text-muted-foreground hover:text-primary">Wall of Fame</Link></li>
              <li><Link href="/meme-wall" className="text-muted-foreground hover:text-primary">Meme Wall</Link></li>
              <li><Link href="/credits" className="text-muted-foreground hover:text-primary">Credits</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-primary">Careers</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-headline">Contact Us</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 shrink-0 text-primary" />
                <span>Toba Tek Singh, Rajana Road, Punjab, Pakistan</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 shrink-0 text-primary" />
                <a href="tel:+923106450020" className="hover:text-primary">+92 310 6450020</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 shrink-0 text-primary" />
                <a href="mailto:contact@bitedgetechnologies.com" className="hover:text-primary">contact@bitedgetechnologies.com</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-headline">Join Our Newsletter</h3>
            <p className="text-muted-foreground mb-4">Get the latest news, articles, and resources, sent to your inbox weekly.</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground space-x-4">
          <span>&copy; {new Date().getFullYear()} BitEdge Technologies. All Rights Reserved.</span>
           <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
           <Link href="/terms-of-service" className="hover:text-primary">Terms of Service</Link>
            <Link href="/cookie-policy" className="hover:text-primary">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
