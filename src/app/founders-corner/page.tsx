
"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
//import Image from "next/image";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { submitFounderForm, type FounderFormState } from "./actions";
import { blogPosts, teamMembers } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight, Video, Mic, Quote, Loader2, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting... </> : "Submit Your Question"}
    </Button>
  );
}

export default function FoundersCornerPage() {
    const { toast } = useToast();
    const formRef = useRef<HTMLFormElement>(null);
    const initialState: FounderFormState = { message: "", success: false, whatsappLink: "" };
    const [state, formAction] = useActionState(submitFounderForm, initialState);
    
    const founder = teamMembers.find(m => m.role === "Founder & CEO");
    const founderPosts = blogPosts.filter(p => p.author.includes('Arslan'));

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
            formRef.current?.reset();
        } else {
            toast({
            title: "Error",
            description: state.message,
            variant: "destructive",
            });
        }
        }
    }, [state, toast]);

    if (!founder) {
        return <div className="container mx-auto px-4 py-12">Founder not found.</div>
    }

    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="bg-card py-20 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        <div className="md:col-span-1 flex justify-center">
                            <Avatar className="h-48 w-48 border-4 border-primary shadow-lg">
                                <AvatarImage src={founder.avatarUrl} alt={founder.name} />
                                <AvatarFallback>{founder.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="md:col-span-2 text-center md:text-left">
                            <h1 className="text-4xl md:text-6xl font-bold font-headline">Founder's Corner</h1>
                            <p className="mt-2 text-2xl text-primary font-semibold">{founder.name}</p>
                            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl">
                                Insights on technology, leadership, and entrepreneurship from the mind behind BitEdge Technologies.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder's Story CTA */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <Card className="bg-card text-center p-8">
                        <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h2 className="text-2xl md:text-3xl font-bold font-headline mb-2">The Story Behind BitEdge</h2>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Follow the journey of our founder, from a single idea to a global technology company.</p>
                        <Button asChild>
                            <Link href="/founder-story">Read the Founder's Story <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </Card>
                </div>
            </section>

            {/* Latest Articles */}
            <section className="py-16 md:py-24 bg-card">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Latest Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {founderPosts.slice(0, 3).map(post => (
                             <Card key={post.id} className="group overflow-hidden bg-background border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
                                <div className="relative h-52">
                                </div>
                                <CardContent className="p-6">
                                    <p className="text-sm text-primary font-semibold mb-2">{post.category}</p>
                                    <Link href={`/blog/${post.slug}`}>
                                        <h3 className="text-xl font-bold font-headline hover:text-primary transition-colors">{post.title}</h3>
                                    </Link>
                                    <p className="text-muted-foreground mt-2 text-sm">{post.excerpt}</p>
                                </CardContent>
                             </Card>
                        ))}
                    </div>
                </div>
            </section>

             {/* Media Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Featured Media</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <Card className="bg-card p-6 flex flex-col items-center justify-center">
                            <Video className="h-12 w-12 text-primary mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Tech Talks on YouTube</h3>
                            <p className="text-muted-foreground">Watch deep dives into the latest tech trends.</p>
                            <Button variant="outline" className="mt-4">Watch Now</Button>
                        </Card>
                        <Card className="bg-card p-6 flex flex-col items-center justify-center">
                            <Mic className="h-12 w-12 text-primary mb-4" />
                            <h3 className="text-xl font-semibold mb-2">"Bit by Bit" Podcast</h3>
                            <p className="text-muted-foreground">Listen to conversations with industry leaders.</p>
                             <Button variant="outline" className="mt-4">Listen Now</Button>
                        </Card>
                         <Card className="bg-card p-6 flex flex-col items-center justify-center">
                            <Quote className="h-12 w-12 text-primary mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Leadership Quotes</h3>
                            <p className="text-muted-foreground">Quick insights and inspiration for your journey.</p>
                             <Button variant="outline" className="mt-4">Read More</Button>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Ask the Founder Form */}
            <section className="py-16 md:py-24 bg-card">
                <div className="container mx-auto px-4 max-w-3xl">
                    <Card className="bg-background">
                        <CardHeader className="text-center">
                            <CardTitle className="font-headline text-3xl">Ask the Founder</CardTitle>
                            <CardDescription>Have a question about startups, tech, or scaling your business? Dr. Arslan Maverick might answer it in a future blog or video.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form ref={formRef} action={formAction} className="space-y-6">
                                <div className={cn("hidden")}>
                                    <Label htmlFor="honeypot">Honeypot</Label>
                                    <input type="text" id="honeypot" name="honeypot" tabIndex={-1} />
                                </div>
                                <div>
                                    <Label htmlFor="name">Your Name</Label>
                                    <Input id="name" name="name" type="text" placeholder="e.g., Jane Doe" required />
                                </div>
                                 <div>
                                    <Label htmlFor="company">Your Startup/Company (Optional)</Label>
                                    <Input id="company" name="company" type="text" placeholder="e.g., Innovate Inc." />
                                </div>
                                <div>
                                    <Label htmlFor="email">Your Email</Label>
                                    <Input id="email" name="email" type="email" placeholder="e.g., jane@example.com" required />
                                </div>
                                <div>
                                    <Label htmlFor="question">Your Question</Label>
                                    <Textarea id="question" name="question" placeholder="What's your biggest challenge right now?" rows={5} required />
                                </div>
                                <SubmitButton />
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}

    
