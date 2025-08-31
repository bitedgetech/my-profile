
"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { useToast } from "@/hooks/use-toast";
import { submitGrantApplication, type GrantApplicationFormState } from "./actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DollarSign, FileText, Lightbulb, Loader2, Search, Send, Trophy, Users } from "lucide-react";
import { cn } from "@/lib/utils";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Submitting Application...
        </>
      ) : (
        <>
          Submit Application <Send className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

export default function GrantProgramPage() {
    const { toast } = useToast();
    const formRef = useRef<HTMLFormElement>(null);
    const initialState: GrantApplicationFormState = { message: '', success: false, whatsappLink: '' };
    const [state, formAction] = useActionState(submitGrantApplication, initialState);
    
     useEffect(() => {
        if (state.message) {
            if (state.success) {
                toast({
                    title: 'Application Submitted!',
                    description: state.message,
                });
                if (state.whatsappLink) {
                    window.open(state.whatsappLink, '_blank');
                }
                formRef.current?.reset();
            } else {
                toast({
                    title: 'Error',
                    description: state.message,
                    variant: 'destructive',
                });
            }
        }
    }, [state, toast]);

    return (
        <div className="bg-background">
            <section className="bg-card py-20 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <Trophy className="h-8 w-8 text-primary" />
                        <h1 className="text-4xl md:text-6xl font-bold font-headline">The BitEdge Grant Program</h1>
                    </div>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Funding the next generation of developers, innovators, and entrepreneurs. We're investing in ideas that will shape the future of technology.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                     <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">About the Grant</h2>
                        <p className="text-lg text-muted-foreground">
                            The BitEdge Grant Program is our commitment to fostering innovation within the tech community. We provide micro-grants (up to $5,000 USD) and mentorship to talented individuals and early-stage startups who are building groundbreaking projects.
                        </p>
                         <p className="text-lg text-muted-foreground">
                            We believe that a great idea can come from anywhere. This grant is designed to provide the initial fuel to help you turn your concept into a reality, whether it's an open-source tool, a community-focused app, or a novel application of AI.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
                        <Card className="bg-card p-6">
                            <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                            <h3 className="text-2xl font-bold">$5,000</h3>
                            <p className="text-muted-foreground">Micro-grant</p>
                        </Card>
                        <Card className="bg-card p-6">
                            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                            <h3 className="text-2xl font-bold">Mentorship</h3>
                            <p className="text-muted-foreground">From our experts</p>
                        </Card>
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24 bg-card">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">How It Works</h2>
                        <p className="mt-2 text-lg text-muted-foreground">A simple and transparent process to get your project funded.</p>
                    </div>
                    <div className="relative">
                      <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center relative">
                          <div className="flex flex-col items-center p-4">
                              <div className="bg-primary/10 text-primary p-6 rounded-full mb-4 border-4 border-card z-10"><FileText className="h-10 w-10" /></div>
                              <h3 className="text-xl font-semibold mb-2">1. Apply Online</h3>
                              <p className="text-muted-foreground">Fill out the application form with your project details.</p>
                          </div>
                          <div className="flex flex-col items-center p-4">
                              <div className="bg-primary/10 text-primary p-6 rounded-full mb-4 border-4 border-card z-10"><Search className="h-10 w-10" /></div>
                              <h3 className="text-xl font-semibold mb-2">2. Team Review</h3>
                              <p className="text-muted-foreground">Our expert panel reviews all submissions.</p>
                          </div>
                          <div className="flex flex-col items-center p-4">
                              <div className="bg-primary/10 text-primary p-6 rounded-full mb-4 border-4 border-card z-10"><Trophy className="h-10 w-10" /></div>
                              <h3 className="text-xl font-semibold mb-2">3. Winners Announced</h3>
                              <p className="text-muted-foreground">Grant recipients are announced on our blog.</p>
                          </div>
                          <div className="flex flex-col items-center p-4">
                              <div className="bg-primary/10 text-primary p-6 rounded-full mb-4 border-4 border-card z-10"><Lightbulb className="h-10 w-10" /></div>
                              <h3 className="text-xl font-semibold mb-2">4. Build & Grow</h3>
                              <p className="text-muted-foreground">Receive funding and mentorship to build your idea.</p>
                          </div>
                      </div>
                    </div>
                </div>
            </section>
            
            <section id="apply" className="py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-3xl">
                    <Card>
                        <form ref={formRef} action={formAction}>
                            <CardHeader className="text-center">
                                <CardTitle className="font-headline text-3xl">Grant Application Form</CardTitle>
                                <CardDescription>Tell us about your brilliant idea. Applications for the current cycle close August 31st.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-8">
                                <div className={cn("hidden")}>
                                    <Label htmlFor="honeypot">Honeypot</Label>
                                    <input type="text" id="honeypot" name="honeypot" tabIndex={-1} />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Your Name / Team Name</Label>
                                        <Input id="name" name="name" placeholder="e.g., Ada Lovelace" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Contact Email</Label>
                                        <Input id="email" name="email" type="email" placeholder="e.g., ada@example.com" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="projectTitle">Project Title</Label>
                                    <Input id="projectTitle" name="projectTitle" placeholder="e.g., Open-Source Accessibility Widget" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="projectUrl">Project URL (Optional)</Label>
                                    <Input id="projectUrl" name="projectUrl" placeholder="https://github.com/your/project" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="pitch">Your Pitch</Label>
                                    <Textarea id="pitch" name="pitch" placeholder="Describe your project, the problem it solves, and why you're passionate about it. (Max 500 words)" rows={8} required />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <SubmitButton />
                            </CardFooter>
                        </form>
                    </Card>
                </div>
            </section>
        </div>
    );
}
