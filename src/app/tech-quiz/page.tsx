
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Puzzle, Lightbulb, Rocket } from 'lucide-react';
import Link from 'next/link';

type QuizFormData = {
  goal: string;
  audience: string;
  timeline: string;
};

type Recommendation = {
  title: string;
  description: string;
  ctaLink: string;
};

export default function TechQuizPage() {
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const { register, handleSubmit, watch } = useForm<QuizFormData>();

  const onSubmit = (data: QuizFormData) => {
    let rec: Recommendation;

    if (data.goal === 'idea' && data.timeline === 'fast') {
      rec = {
        title: 'MVP (Minimum Viable Product)',
        description:
          "You need to test your idea quickly and gather feedback. An MVP is the perfect starting point to validate your concept with core features before investing in a full-scale product.",
        ctaLink: '/services#custom-software-development',
      };
    } else if (data.audience === 'mobile') {
      rec = {
        title: 'Mobile Application',
        description:
          'Your audience is on the go and needs a dedicated, seamless experience on their phones. A native or cross-platform mobile app will provide the best performance and engagement.',
        ctaLink: '/services#mobile-app-development',
      };
    } else {
      rec = {
        title: 'Full-Scale Web Application',
        description:
          'Your vision requires a robust and scalable solution to serve a broad audience. A full-featured web application will provide the power and flexibility you need to grow.',
        ctaLink: '/services#web-development',
      };
    }
    setRecommendation(rec);
  };

  return (
    <div className="bg-background">
      <section className="bg-card py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-2">
            <Puzzle className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold font-headline">Tech Solution Quiz</h1>
          </div>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Answer a few quick questions to find out what type of tech solution best fits your business needs.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          {!recommendation ? (
            <Card>
              <form onSubmit={handleSubmit(onSubmit)}>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Let's Find Your Fit</CardTitle>
                  <CardDescription>This will only take a minute.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Goal */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold">1. What is your primary goal?</Label>
                    <RadioGroup {...register('goal')} className="gap-4" defaultValue="scale">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="idea" id="idea" />
                        <Label htmlFor="idea">Quickly test a new business idea</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="scale" id="scale" />
                        <Label htmlFor="scale">Build a full-scale, long-term product</Label>
                      </div>
                       <div className="flex items-center space-x-2">
                        <RadioGroupItem value="internal" id="internal" />
                        <Label htmlFor="internal">Improve internal business processes</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Audience */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold">2. Who is your primary audience?</Label>
                    <RadioGroup {...register('audience')} className="gap-4" defaultValue="web">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="web" id="web" />
                        <Label htmlFor="web">General consumers on desktop & mobile web</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mobile" id="mobile" />
                        <Label htmlFor="mobile">Mobile users who need a dedicated app experience</Label>
                      </div>
                       <div className="flex items-center space-x-2">
                        <RadioGroupItem value="employees" id="employees" />
                        <Label htmlFor="employees">Our internal team and employees</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                   {/* Timeline */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold">3. How fast do you need to launch?</Label>
                    <RadioGroup {...register('timeline')} className="gap-4" defaultValue="standard">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fast" id="fast" />
                        <Label htmlFor="fast">As quickly as possible (1-3 months)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="standard" id="standard" />
                        <Label htmlFor="standard">Standard timeline (3-6 months)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="flexible" id="flexible" />
                        <Label htmlFor="flexible">We are flexible on the timeline</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" size="lg" className="w-full">
                    <Lightbulb className="mr-2" />
                    Get My Recommendation
                  </Button>
                </CardFooter>
              </form>
            </Card>
          ) : (
            <Card className="text-center bg-gradient-to-br from-primary to-fuchsia-600 text-primary-foreground">
                <CardHeader>
                    <div className="flex justify-center">
                        <div className="bg-accent text-accent-foreground p-4 rounded-full mb-4">
                            <Rocket className="h-10 w-10" />
                        </div>
                    </div>
                    <CardTitle className="font-headline text-3xl">Our Recommendation For You</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <h3 className="text-2xl font-bold">{recommendation.title}</h3>
                    <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">{recommendation.description}</p>
                </CardContent>
                <CardFooter className="flex-col gap-4 p-6">
                    <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href={recommendation.ctaLink}>Learn More About This Service</Link>
                    </Button>
                    <Button variant="ghost" onClick={() => setRecommendation(null)} className="text-primary-foreground/80 hover:text-primary-foreground">
                        Or, take the quiz again
                    </Button>
                </CardFooter>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}
