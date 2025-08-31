
'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Calculator, Clock, DollarSign, Users } from 'lucide-react';

export default function SuccessCalculatorPage() {
    const [devs, setDevs] = useState(10);
    const [salary, setSalary] = useState(100000);
    const [manualHours, setManualHours] = useState(5);

    const { hoursSaved, costSavings } = useMemo(() => {
        const BITEDGE_EFFICIENCY_GAIN = 0.25; // Assuming BitEdge can reduce manual time by 25%
        const WEEKS_PER_YEAR = 52;

        const totalManualHoursPerWeek = devs * manualHours;
        const hoursSavedPerWeek = totalManualHoursPerWeek * BITEDGE_EFFICIENCY_GAIN;
        const hoursSavedPerYear = hoursSavedPerWeek * WEEKS_PER_YEAR;

        const averageHourlyRate = salary / 2080; // 40 hours/week * 52 weeks
        const costSavingsPerYear = hoursSavedPerYear * averageHourlyRate;
        
        return {
            hoursSaved: Math.round(hoursSavedPerYear),
            costSavings: Math.round(costSavingsPerYear),
        };
    }, [devs, salary, manualHours]);

    return (
        <div className="bg-background">
            <section className="bg-card py-20 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <Calculator className="h-8 w-8 text-primary" />
                        <h1 className="text-4xl md:text-6xl font-bold font-headline">Client Success Calculator</h1>
                    </div>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Estimate your potential time and cost savings by partnering with BitEdge Technologies. See how our efficiency and automation solutions can impact your bottom line.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Calculator Input Card */}
                        <Card className="bg-card">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Tell Us About Your Team</CardTitle>
                                <CardDescription>Adjust the sliders to match your current team and workflow.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-8">
                                <div className="space-y-4">
                                    <Label htmlFor="dev-count" className="flex justify-between text-lg font-semibold">
                                        <span><Users className="inline-block mr-2" />Number of Developers</span>
                                        <span className="text-primary font-bold">{devs}</span>
                                    </Label>
                                    <Slider
                                        id="dev-count"
                                        min={1}
                                        max={100}
                                        step={1}
                                        value={[devs]}
                                        onValueChange={(value) => setDevs(value[0])}
                                    />
                                </div>

                                <div className="space-y-4">
                                    <Label htmlFor="avg-salary" className="flex justify-between text-lg font-semibold">
                                        <span><DollarSign className="inline-block mr-2" />Average Developer Salary (USD)</span>
                                        <span className="text-primary font-bold">${salary.toLocaleString()}</span>
                                    </Label>
                                     <Slider
                                        id="avg-salary"
                                        min={50000}
                                        max={250000}
                                        step={5000}
                                        value={[salary]}
                                        onValueChange={(value) => setSalary(value[0])}
                                    />
                                </div>
                                
                                <div className="space-y-4">
                                    <Label htmlFor="manual-hours" className="flex justify-between text-lg font-semibold">
                                        <span><Clock className="inline-block mr-2" />Weekly Hours on Manual Tasks</span>
                                        <span className="text-primary font-bold">{manualHours} hrs/dev</span>
                                    </Label>
                                    <Slider
                                        id="manual-hours"
                                        min={1}
                                        max={20}
                                        step={1}
                                        value={[manualHours]}
                                        onValueChange={(value) => setManualHours(value[0])}
                                    />
                                    <p className="text-sm text-muted-foreground">e.g., manual builds, deployments, environment setup, repetitive testing.</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Results Card */}
                        <Card className="bg-gradient-to-br from-primary to-fuchsia-600 text-primary-foreground">
                            <CardHeader className="text-center">
                                <CardTitle className="font-headline text-3xl">Your Potential Annual Savings</CardTitle>
                                <CardDescription className="text-primary-foreground/80">Based on a 25% efficiency gain with our DevOps & Automation services.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-8 text-center">
                                <div>
                                    <p className="text-lg text-primary-foreground/80">Time Saved</p>
                                    <p className="text-6xl font-bold">{hoursSaved.toLocaleString()}</p>
                                    <p className="text-lg">Hours / Year</p>
                                </div>
                                <div>
                                    <p className="text-lg text-primary-foreground/80">Cost Savings</p>
                                    <p className="text-6xl font-bold">${costSavings.toLocaleString()}</p>
                                    <p className="text-lg">USD / Year</p>
                                </div>
                            </CardContent>
                            <CardFooter className="flex-col gap-4 p-6">
                                <p className="text-sm text-primary-foreground/80 text-center">Ready to unlock this potential?</p>
                                <Button asChild size="lg" variant="secondary" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                                    <Link href="/contact">Make It a Reality <ArrowRight className="ml-2 h-5 w-5" /></Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
