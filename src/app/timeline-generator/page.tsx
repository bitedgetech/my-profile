
'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateTimeline, ProjectTimelineInput, ProjectTimelineOutput } from '@/ai/flows/project-timeline-flow';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { CalendarClock, GanttChartSquare, GitCommit, Loader2, Milestone, Sparkles } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const ProjectTimelineInputSchema = z.object({
  projectDescription: z.string().min(20, "Please provide a more detailed description (at least 20 characters)."),
  platform: z.string(),
  featureComplexity: z.enum(['low', 'medium', 'high']),
});


export default function TimelineGeneratorPage() {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<ProjectTimelineOutput | null>(null);
    const [error, setError] = useState<string | null>(null);

    const { register, handleSubmit, control, formState: { errors } } = useForm<ProjectTimelineInput>({
        resolver: zodResolver(ProjectTimelineInputSchema),
        defaultValues: {
            projectDescription: '',
            platform: 'web',
            featureComplexity: 'medium',
        }
    });

    const onSubmit = async (data: ProjectTimelineInput) => {
        setLoading(true);
        setResult(null);
        setError(null);
        try {
            const timeline = await generateTimeline(data);
            setResult(timeline);
        } catch (e: any) {
            console.error(e);
            if (e.message && e.message.includes('503')) {
                setError('The AI model is currently overloaded. Please try again in a few moments.');
            } else {
                setError('An error occurred while generating the timeline. Please try again.');
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
                        <GanttChartSquare className="h-8 w-8 text-primary" />
                        <h1 className="text-4xl md:text-6xl font-bold font-headline">AI Project Timeline Generator</h1>
                    </div>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Describe your project, and our AI will generate a high-level delivery timeline with key phases.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Card className="bg-card">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Project Overview</CardTitle>
                                <CardDescription>Provide details about your project to generate a timeline.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-8">
                                <div className="space-y-4">
                                    <Label className="text-lg font-semibold" htmlFor="projectDescription">1. Describe your project</Label>
                                    <Textarea
                                        id="projectDescription"
                                        placeholder="e.g., A mobile app for booking fitness classes, with user profiles, payments, and a class schedule..."
                                        rows={6}
                                        {...register('projectDescription')}
                                    />
                                    {errors.projectDescription && <p className="text-destructive text-sm">{errors.projectDescription.message}</p>}
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <Label className="text-lg font-semibold">2. Platform</Label>
                                        <Controller
                                            name="platform"
                                            control={control}
                                            render={({ field }) => (
                                                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col gap-2">
                                                    <div className="flex items-center space-x-2"><RadioGroupItem value="web" id="web" /><Label htmlFor="web">Web Application</Label></div>
                                                    <div className="flex items-center space-x-2"><RadioGroupItem value="mobile" id="mobile" /><Label htmlFor="mobile">Mobile App</Label></div>
                                                    <div className="flex items-center space-x-2"><RadioGroupItem value="both" id="both" /><Label htmlFor="both">Both Web & Mobile</Label></div>
                                                </RadioGroup>
                                            )}
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <Label className="text-lg font-semibold">3. Feature Complexity</Label>
                                        <Controller
                                            name="featureComplexity"
                                            control={control}
                                            render={({ field }) => (
                                                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col gap-2">
                                                    <div className="flex items-center space-x-2"><RadioGroupItem value="low" id="low" /><Label htmlFor="low">Low (Basic features)</Label></div>
                                                    <div className="flex items-center space-x-2"><RadioGroupItem value="medium" id="medium" /><Label htmlFor="medium">Medium (Standard features)</Label></div>
                                                    <div className="flex items-center space-x-2"><RadioGroupItem value="high" id="high" /><Label htmlFor="high">High (Complex features, integrations)</Label></div>
                                                </RadioGroup>
                                            )}
                                        />
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button type="submit" disabled={loading} size="lg" className="w-full">
                                    {loading ? ( <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Generating Timeline...</> ) 
                                    : ( <><GanttChartSquare className="mr-2 h-5 w-5" /> Generate Timeline</>)}
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
                                    <CardTitle className="font-headline text-3xl">Generated Project Timeline</CardTitle>
                                </div>
                                <CardDescription>This is a high-level, estimated timeline based on your inputs.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="text-center bg-background/50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-lg text-primary">Total Estimated Duration</h4>
                                    <p className="text-3xl font-bold">{result.totalDuration}</p>
                                </div>
                                <Separator />
                                <div className="relative pl-6 space-y-8 before:absolute before:inset-y-0 before:w-px before:bg-border before:left-0">
                                    {result.phases.map((phase, index) => (
                                        <div key={index} className="relative">
                                            <div className="absolute -left-[37px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                                <Milestone className="h-5 w-5" />
                                            </div>
                                            <div className="pl-6">
                                                <div className="flex justify-between items-center">
                                                    <h4 className="font-headline text-xl">{phase.phaseName}</h4>
                                                    <div className="font-semibold text-primary">{phase.duration}</div>
                                                </div>
                                                <p className="text-muted-foreground mt-1">{phase.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter>
                                 <p className="text-sm text-muted-foreground text-center w-full">Note: This AI-generated timeline is for preliminary planning. For a detailed, fixed-quote proposal, please contact us.</p>
                            </CardFooter>
                        </Card>
                    )}
                </div>
            </section>
        </div>
    );
}
