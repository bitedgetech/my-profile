
'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { z } from 'zod';

import { ProjectEstimationInput, ProjectEstimationOutput, estimateProject } from '@/ai/flows/project-estimator-flow';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, Bot, Clock, Code, DollarSign, Loader2, Sparkles, Wand2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const projectEstimationInputSchema = z.object({
  platform: z.string({ required_error: 'Please select a platform.' }),
  features: z.array(z.string()).min(1, "Please select at least one feature."),
  timeline: z.string({ required_error: 'Please select a timeline.' }),
  budget: z.string({ required_error: 'Please select a budget.' }),
});


const featureOptions = [
    { id: 'auth', label: 'User Authentication (Sign up / Login)' },
    { id: 'dashboard', label: 'User Dashboard' },
    { id: 'payments', label: 'Payment Integration (Stripe, etc.)' },
    { id: 'cms', label: 'Content Management System (CMS)' },
    { id: 'social', label: 'Social Media Integration' },
    { id: 'analytics', label: 'Analytics and Reporting' },
    { id: 'booking', label: 'Booking/Scheduling System' },
    { id: 'ai', label: 'AI-Powered Features' },
];

export default function ProjectEstimatorPage() {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<ProjectEstimationOutput | null>(null);
    const [error, setError] = useState<string | null>(null);

    const { handleSubmit, control, formState: { errors } } = useForm<ProjectEstimationInput>({
        resolver: zodResolver(projectEstimationInputSchema),
        defaultValues: {
            platform: 'web',
            features: [],
            timeline: '3-6m',
            budget: '10k-50k',
        }
    });

    const onSubmit = async (data: ProjectEstimationInput) => {
        setLoading(true);
        setResult(null);
        setError(null);
        try {
            const estimation = await estimateProject(data);
            setResult(estimation);
        } catch (e: any) {
            console.error(e);
            if (e.message && e.message.includes('503')) {
                setError('The AI model is currently overloaded. Please try again in a few moments.');
            } else {
                setError(e.message || 'An error occurred while generating the estimate. Please try again.');
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
                        <Bot className="h-8 w-8 text-primary" />
                        <h1 className="text-4xl md:text-6xl font-bold font-headline">AI Project Estimator</h1>
                    </div>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Answer a few questions about your project to receive a real-time, AI-generated estimate.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Card className="bg-card">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Project Details</CardTitle>
                                <CardDescription>Tell us about your project vision.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-8">
                                <div className="space-y-4">
                                    <Label className="text-lg font-semibold">1. What platform are you targeting?</Label>
                                    <Controller
                                        name="platform"
                                        control={control}
                                        render={({ field }) => (
                                            <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col sm:flex-row gap-4">
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="web" id="web" />
                                                    <Label htmlFor="web">Web Application</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="mobile" id="mobile" />
                                                    <Label htmlFor="mobile">Mobile App (iOS & Android)</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="both" id="both" />
                                                    <Label htmlFor="both">Both Web & Mobile</Label>
                                                </div>
                                            </RadioGroup>
                                        )}
                                    />
                                </div>
                                <Separator />
                                <div className="space-y-4">
                                    <Label className="text-lg font-semibold">2. What features do you need?</Label>
                                    <Controller
                                        name="features"
                                        control={control}
                                        render={({ field }) => (
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {featureOptions.map((feature) => (
                                                    <div className="flex items-center gap-2" key={feature.id}>
                                                        <Checkbox
                                                            id={feature.id}
                                                            checked={field.value?.includes(feature.label)}
                                                            onCheckedChange={(checked) => {
                                                                const currentValue = field.value || [];
                                                                if (checked) {
                                                                    field.onChange([...currentValue, feature.label]);
                                                                } else {
                                                                    field.onChange(currentValue.filter(v => v !== feature.label));
                                                                }
                                                            }}
                                                        />
                                                        <Label htmlFor={feature.id}>{feature.label}</Label>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    />
                                    {errors.features && <p className="text-destructive text-sm mt-2">{errors.features.message}</p>}
                                </div>
                                <Separator />
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <Label className="text-lg font-semibold" htmlFor="timeline">3. What's your desired timeline?</Label>
                                         <Controller
                                            name="timeline"
                                            control={control}
                                            render={({ field }) => (
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <SelectTrigger id="timeline">
                                                        <SelectValue placeholder="Select timeline" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="0-3m">Under 3 months</SelectItem>
                                                        <SelectItem value="3-6m">3-6 months</SelectItem>
                                                        <SelectItem value="6-12m">6-12 months</SelectItem>
                                                        <SelectItem value="flexible">Flexible</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <Label className="text-lg font-semibold" htmlFor="budget">4. What's your estimated budget?</Label>
                                         <Controller
                                            name="budget"
                                            control={control}
                                            render={({ field }) => (
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <SelectTrigger id="budget">
                                                        <SelectValue placeholder="Select budget" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="<10k">Under $10,000</SelectItem>
                                                        <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                                                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                                                        <SelectItem value=">100k">Over $100,000</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button type="submit" disabled={loading} size="lg" className="w-full">
                                    {loading ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                            Generating Estimate...
                                        </>
                                    ) : (
                                        <>
                                            <Wand2 className="mr-2 h-5 w-5" />
                                            Generate Estimate
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
                                <div className="flex justify-center items-center gap-2 mb-2">
                                    <Sparkles className="h-8 w-8 text-accent" />
                                    <CardTitle className="font-headline text-3xl">Your Project Estimate</CardTitle>
                                </div>
                                <CardDescription>This is a preliminary estimate based on the provided details.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                    <div className="bg-background/50 p-4 rounded-lg">
                                        <div className="flex justify-center items-center gap-2 mb-2">
                                            <Clock className="h-6 w-6 text-primary" />
                                            <h4 className="font-semibold text-lg">Estimated Time</h4>
                                        </div>
                                        <p className="text-2xl font-bold">{result.estimatedTime}</p>
                                    </div>
                                    <div className="bg-background/50 p-4 rounded-lg">
                                        <div className="flex justify-center items-center gap-2 mb-2">
                                            <DollarSign className="h-6 w-6 text-primary" />
                                            <h4 className="font-semibold text-lg">Cost Range (USD)</h4>
                                        </div>
                                        <p className="text-2xl font-bold">{result.costRange}</p>
                                    </div>
                                    <div className="bg-background/50 p-4 rounded-lg">
                                        <div className="flex justify-center items-center gap-2 mb-2">
                                            <Code className="h-6 w-6 text-primary" />
                                            <h4 className="font-semibold text-lg">Suggested Stack</h4>
                                        </div>
                                        <p className="text-lg font-medium">{result.suggestedStack.join(', ')}</p>
                                    </div>
                                </div>
                                <Separator />
                                <div className="space-y-2">
                                    <h4 className="font-semibold text-lg">Project Summary</h4>
                                    <p className="text-muted-foreground">{result.summary}</p>
                                </div>
                            </CardContent>
                            <CardFooter className="flex-col gap-4">
                                <p className="text-sm text-muted-foreground text-center">Ready to take the next step?</p>
                                <Button asChild size="lg">
                                    <Link href="/contact">Get a Custom Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    )}
                </div>
            </section>
        </div>
    );
}
