
"use client";
import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type FormState } from "./actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
//import Image from "next/image";
import { cn } from "@/lib/utils";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export default function ContactPage() {
  const { toast } = useToast();
  const initialState: FormState = { message: "", success: false, whatsappLink: "" };
  const [state, formAction] = useActionState(submitContactForm, initialState);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        if (state.whatsappLink) {
          window.open(state.whatsappLink, '_blank');
        }
      } else {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  return (
    <div className="bg-background">
      <section className="bg-card py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline">Get In Touch</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you. Whether you have a question about our services, pricing, or want to book a consultation, our team is ready to help.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form action={formAction} className="space-y-6">
                    <div className={cn("hidden")}>
                        <Label htmlFor="honeypot">Honeypot</Label>
                        <input type="text" id="honeypot" name="honeypot" tabIndex={-1}/>
                    </div>
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" type="text" placeholder="Your Name" required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="Your Email" required />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" name="subject" type="text" placeholder="Message Subject" required />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" name="message" placeholder="Your Message" rows={5} required />
                    </div>
                    <SubmitButton />
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-8">
                <Card className="bg-card">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6 text-lg">
                        <div className="flex items-center gap-4">
                            <Mail className="h-8 w-8 text-primary" />
                            <div>
                                <h4 className="font-semibold">Email</h4>
                                <a href="mailto:contact@bitedgetechnologies.com" className="text-muted-foreground hover:text-primary">contact@bitedgetechnologies.com</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Phone className="h-8 w-8 text-primary" />
                            <div>
                                <h4 className="font-semibold">Phone / WhatsApp</h4>
                                <a href="tel:+923106450020" className="text-muted-foreground hover:text-primary">+92 310 6450020</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <MapPin className="h-8 w-8 text-primary mt-1" />
                            <div>
                                <h4 className="font-semibold">Office</h4>
                                <p className="text-muted-foreground">Toba Tek Singh, Rajana Road, Punjab, Pakistan</p>
                            </div>
                        </div>
                         <div className="relative h-60 w-full rounded-lg overflow-hidden mt-4">
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-card">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl flex items-center gap-2">
                            <Calendar className="h-6 w-6 text-primary" />
                            Remote Office Hours
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">
                            Need advice on your startup, a code review, or just want to talk tech? Book a free 30-minute consultation with one of our experts.
                        </p>
                        <Button asChild className="w-full">
                            {/* Replace '#' with your Calendly or other scheduling link */}
                            <Link href="https://calendly.com/" target="_blank" rel="noopener noreferrer">Book a Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
          </div>
        </div>
      </section>
        <section className="py-20 bg-gradient-to-r from-primary to-fuchsia-600 text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4 font-headline">Ready to Start Your Project?</h2>
                <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Let's work together to build something amazing. Schedule your free consultation today and let's discuss your vision.</p>
                <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/contact">Book Your Free Call</Link>
                </Button>
            </div>
        </section>
    </div>
  );
}
