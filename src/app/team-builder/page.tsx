
'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

import { submitTeamBuilderForm, type TeamBuilderFormState } from './actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Users, Loader2, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const teamBuilderFormSchema = z.object({
  skills: z.array(z.string()).refine((value) => value.length > 0, {
    message: 'You have to select at least one skill.',
  }),
  availability: z.enum(['full-time', 'part-time', 'hourly']),
  budget: z.string(),
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  company: z.string().optional(),
  description: z.string().min(10, 'Please provide a brief project description.'),
});

type TeamBuilderFormValues = z.infer<typeof teamBuilderFormSchema>;

const skillOptions = [
    { id: 'frontend', label: 'Frontend (React/Next.js)' },
    { id: 'backend', label: 'Backend (Node.js/Python)' },
    { id: 'mobile', label: 'Mobile (React Native)' },
    { id: 'uiux', label: 'UI/UX Design' },
    { id: 'devops', label: 'DevOps & Cloud' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'blockchain', label: 'Blockchain/Web3' },
    { id: 'qa', label: 'Quality Assurance' },
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Submitting Proposal...
        </>
      ) : (
        <>
          Get Your Proposal <ArrowRight className="ml-2 h-5 w-5" />
        </>
      )}
    </Button>
  );
}

export default function TeamBuilderPage() {
    const { toast } = useToast();
    const formRef = useRef<HTMLFormElement>(null);
    const initialState: TeamBuilderFormState = { message: '', success: false, whatsappLink: '' };
    const [state, formAction] = useActionState(submitTeamBuilderForm, initialState);

    const { control, formState: { errors } } = useForm<TeamBuilderFormValues>({
        resolver: zodResolver(teamBuilderFormSchema),
        defaultValues: {
            skills: [],
            availability: 'full-time',
            budget: '5k-10k',
            name: '',
            email: '',
            company: '',
            description: '',
        },
    });

    useEffect(() => {
        if (state.message) {
            if (state.success) {
                toast({
                    title: 'Proposal Submitted!',
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
                        <Users className="h-8 w-8 text-primary" />
                        <h1 className="text-4xl md:text-6xl font-bold font-headline">Build Your Dream Team</h1>
                    </div>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Configure your ideal remote development team. We'll provide a custom proposal to match your project needs and budget.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Card>
                        <form ref={formRef} action={formAction} >
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Team Configuration</CardTitle>
                                <CardDescription>Tell us what you need. The more details you provide, the better our proposal will be.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-8">
                                <div className={cn("hidden")}>
                                    <Label htmlFor="honeypot">Honeypot</Label>
                                    <input type="text" id="honeypot" name="honeypot" tabIndex={-1}/>
                                </div>
                                <div className="space-y-4">
                                    <Label className="text-lg font-semibold">1. What skills do you need on your team?</Label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {skillOptions.map((skill) => (
                                           <div className="flex items-center gap-2" key={skill.id}>
                                                <Checkbox id={skill.id} name="skills" value={skill.label} />
                                                <Label htmlFor={skill.id} className="font-normal">{skill.label}</Label>
                                            </div>
                                        ))}
                                    </div>
                                     {errors.skills && <p className="text-destructive text-sm">{errors.skills.message}</p>}
                                </div>
                                <div className="space-y-4">
                                    <Label className="text-lg font-semibold">2. What level of availability do you require?</Label>
                                    <Controller
                                        name="availability"
                                        control={control}
                                        render={({ field }) => (
                                          <RadioGroup name="availability" onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col sm:flex-row gap-4">
                                              <div className="flex items-center space-x-2">
                                                  <RadioGroupItem value="full-time" id="full-time" />
                                                  <Label htmlFor="full-time">Full-time (160 hours/month)</Label>
                                              </div>
                                              <div className="flex items-center space-x-2">
                                                  <RadioGroupItem value="part-time" id="part-time" />
                                                  <Label htmlFor="part-time">Part-time (80 hours/month)</Label>
                                              </div>
                                              <div className="flex items-center space-x-2">
                                                  <RadioGroupItem value="hourly" id="hourly" />
                                                  <Label htmlFor="hourly">Hourly / Flexible</Label>
                                              </div>
                                          </RadioGroup>
                                        )}
                                      />
                                </div>
                                 <div className="space-y-4">
                                    <Label className="text-lg font-semibold" htmlFor="budget">3. What's your monthly budget for the team?</Label>
                                    <Controller
                                      name="budget"
                                      control={control}
                                      render={({ field }) => (
                                        <Select name="budget" onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger id="budget">
                                                <SelectValue placeholder="Select budget range" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="<5k">Under $5,000 / month</SelectItem>
                                                <SelectItem value="5k-10k">$5,000 - $10,000 / month</SelectItem>
                                                <SelectItem value="10k-20k">$10,000 - $20,000 / month</SelectItem>
                                                <SelectItem value=">20k">Over $20,000 / month</SelectItem>
                                            </SelectContent>
                                        </Select>
                                      )}
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Your Name</Label>
                                        <Input id="name" name="name" placeholder="e.g., Jane Doe" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Your Email</Label>
                                        <Input id="email" name="email" type="email" placeholder="e.g., jane@example.com" required />
                                    </div>
                                </div>
                                 <div className="space-y-2">
                                    <Label htmlFor="company">Company Name (Optional)</Label>
                                    <Input id="company" name="company" placeholder="e.g., Innovate Inc." />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="description">Brief Project Description</Label>
                                    <Textarea id="description" name="description" placeholder="Tell us about the project, key goals, and current status." rows={5} required />
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
