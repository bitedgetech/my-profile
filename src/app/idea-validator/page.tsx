
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { IdeaValidatorInput, IdeaValidatorOutput, validateIdea } from '@/ai/flows/idea-validator-flow';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Lightbulb, Loader2, Sparkles, CheckCircle, Code, DollarSign, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const IdeaValidatorInputSchema = z.object({
  ideaDescription: z.string().min(50, "Please provide a more detailed description of your idea (at least 50 characters)."),
});


export default function IdeaValidatorPage() {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<IdeaValidatorOutput | null>(null);
    const [error, setError] = useState<string | null>(null);

    const { register, handleSubmit, formState: { errors } } = useForm<IdeaValidatorInput>({
        resolver: zodResolver(IdeaValidatorInputSchema),
    });

    const onSubmit = async (data: IdeaValidatorInput) => {
        setLoading(true);
        setResult(null);
        setError(null);
        try {
            const validationResult = await validateIdea(data);
            setResult(validationResult);
        } catch (e: any) {
            console.error(e);
            if (e.message && e.message.includes('503')) {
                setError('The AI model is currently overloaded. Please try again in a few moments.');
            } else {
                setError(e.message || 'An error occurred while validating your idea. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-background">
            <section className="bg-card py-20 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <Lightbulb className="h-8 w-8 text-primary" />
                        <h1 className="text-4xl md:text-6xl font-bold font-headline">Startup Idea Validator</h1>
                    </div>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Have a startup idea? Get instant, AI-powered feedback on its feasibility, potential tech stack, and estimated MVP cost.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Card className="bg-card">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Describe Your Idea</CardTitle>
                                <CardDescription>The more detail you provide, the better the analysis will be. Tell us about the problem you're solving and your proposed solution.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <Label htmlFor="ideaDescription" className="sr-only">Your Idea Description</Label>
                                    <Textarea
                                        id="ideaDescription"
                                        placeholder="e.g., A social media platform for pet owners to share photos and organize playdates. It would include user profiles, a photo feed, event creation, and direct messaging..."
                                        rows={8}
                                        {...register('ideaDescription')}
                                    />
                                    {errors.ideaDescription && <p className="text-destructive text-sm mt-2">{errors.ideaDescription.message}</p>}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button type="submit" disabled={loading} size="lg" className="w-full">
                                    {loading ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                            Analyzing...
                                        </>
                                    ) : (
                                        <>
                                            <Sparkles className="mr-2 h-5 w-5" />
                                            Validate My Idea
                                        </>
                                    )}
                                </Button>
                            </CardFooter>
                        </form>
                    </Card>

                    {error && (
                        <Card className="mt-8 text-center bg-destructive/10 border-destructive">
                            <CardContent className="p-6">
                               <p className="text-destructive font-medium">{error}</p>
                            </CardContent>
                        </Card>
                    )}

                    {result && (
                        <Card className="mt-8 bg-card">
                            <CardHeader className="text-center">
                                <CardTitle className="font-headline text-3xl">AI Feasibility Report</CardTitle>
                                <CardDescription>Here's a preliminary analysis of your startup idea.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-8">
                                <div className="text-center bg-background/50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-lg text-primary">Feasibility Score</h4>
                                    <p className="text-6xl font-bold">{result.feasibilityScore}<span className="text-3xl text-muted-foreground">/10</span></p>
                                    <p className="text-muted-foreground mt-2">{result.feasibilityAnalysis}</p>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                     <div className="bg-background/50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-lg mb-2 flex items-center gap-2"><Code className="h-6 w-6 text-primary" />Suggested Tech Stack</h4>
                                        <p className="text-muted-foreground">{result.suggestedStack.join(', ')}</p>
                                    </div>
                                    <div className="bg-background/50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-lg mb-2 flex items-center gap-2"><DollarSign className="h-6 w-6 text-primary" />Estimated MVP Cost</h4>
                                        <p className="text-muted-foreground">{result.estimatedMvpCost}</p>
                                    </div>
                                </div>
                               
                                <div>
                                    <h4 className="font-semibold text-lg mb-2 flex items-center gap-2"><CheckCircle className="h-6 w-6 text-primary" />Recommended Next Steps</h4>
                                    <p className="text-muted-foreground whitespace-pre-wrap">{result.nextSteps}</p>
                                </div>
                            </CardContent>
                            <CardFooter className="flex-col gap-4">
                                <p className="text-sm text-muted-foreground text-center">This report is AI-generated. Ready for a human touch?</p>
                                <Button asChild size="lg">
                                    <Link href="/contact">Book a Free Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    )}
                </div>
            </section>
        </div>
    );
}
