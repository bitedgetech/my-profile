
'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { useToast } from '@/hooks/use-toast';
import { submitFeedbackForm, type FeedbackFormState } from './actions';
import { feedbackItems } from '@/lib/data';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Lightbulb, MessageSquare, Star, User, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap = {
    "Testimonial": <Star className="h-6 w-6 text-yellow-400" />,
    "Feature Request": <Lightbulb className="h-6 w-6 text-blue-400" />,
    "General Feedback": <MessageSquare className="h-6 w-6 text-green-400" />,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting... </> : "Post Feedback"}
    </Button>
  );
}


export default function FeedbackPage() {
    const { toast } = useToast();
    const formRef = useRef<HTMLFormElement>(null);
    const initialState: FeedbackFormState = { message: '', success: false, whatsappLink: '' };
    const [state, formAction] = useActionState(submitFeedbackForm, initialState);

    useEffect(() => {
        if (state.message) {
            if (state.success) {
                toast({
                    title: 'Success!',
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
                    <h1 className="text-4xl md:text-6xl font-bold font-headline">Feedback Wall</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Share your thoughts, suggestions, or praise. We value your feedback and love hearing from our community.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Feedback Submission Form */}
                        <div className="lg:col-span-1">
                             <Card className="sticky top-24">
                                <CardHeader>
                                    <CardTitle className="font-headline text-2xl">Leave a Message</CardTitle>
                                    <CardDescription>Your feedback helps us improve.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form ref={formRef} action={formAction} className="space-y-6">
                                        <div className={cn("hidden")}>
                                            <Label htmlFor="honeypot">Honeypot</Label>
                                            <input type="text" id="honeypot" name="honeypot" tabIndex={-1} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Your Name (Optional)</Label>
                                            <Input id="name" name="name" placeholder="Anonymous" />
                                        </div>
                                        <div className="space-y-4">
                                            <Label>Feedback Type</Label>
                                            <RadioGroup name="type" defaultValue="General Feedback" className="flex flex-col gap-2">
                                                <div className="flex items-center space-x-2"><RadioGroupItem value="Testimonial" id="testimonial" /><Label htmlFor="testimonial">Testimonial</Label></div>
                                                <div className="flex items-center space-x-2"><RadioGroupItem value="Feature Request" id="feature" /><Label htmlFor="feature">Feature Request</Label></div>
                                                <div className="flex items-center space-x-2"><RadioGroupItem value="General Feedback" id="general" /><Label htmlFor="general">General Feedback</Label></div>
                                            </RadioGroup>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="message">Message</Label>
                                            <Textarea id="message" name="message" placeholder="Share your thoughts..." rows={5} required />
                                        </div>
                                        <SubmitButton />
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                        {/* Feedback Wall Display */}
                        <div className="lg:col-span-2">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                               {feedbackItems.map(item => (
                                   <Card key={item.id} className="bg-card flex flex-col">
                                       <CardContent className="p-6 flex-grow">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center gap-2">
                                                    <User className="h-5 w-5 text-muted-foreground" />
                                                    <span className="font-semibold">{item.name}</span>
                                                </div>
                                                <div className="p-2 bg-background rounded-full">
                                                    {iconMap[item.type]}
                                                </div>
                                            </div>
                                           <p className="text-muted-foreground italic">"{item.message}"</p>
                                       </CardContent>
                                       <div className="p-6 pt-0 text-xs text-muted-foreground text-right">
                                            {item.timestamp}
                                       </div>
                                   </Card>
                               ))}
                           </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
