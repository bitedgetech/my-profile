
'use client';

import { useState, useEffect } from "react";
import { devTrackerProjects, DevTrackerStatus } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { GitMerge, GitCommit, TestTube, Construction, Rocket, Smile, Meh, Frown, Send, FlaskConical } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const statusConfig: { [key in DevTrackerStatus]: { icon: React.ReactNode; color: string; } } = {
  "Discovery": { icon: <FlaskConical className="h-5 w-5" />, color: "bg-blue-500" },
  "Design": { icon: <Construction className="h-5 w-5" />, color: "bg-purple-500" },
  "In Development": { icon: <GitMerge className="h-5 w-5" />, color: "bg-orange-500" },
  "QA & Testing": { icon: <TestTube className="h-5 w-5" />, color: "bg-yellow-500" },
  "Launched": { icon: <Rocket className="h-5 w-5" />, color: "bg-green-500" },
};

const statusOrder: DevTrackerStatus[] = ["Discovery", "Design", "In Development", "QA & Testing", "Launched"];

type Mood = 'Happy' | 'Neutral' | 'Concerned';

const MoodSelector = () => {
    const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
    const { toast } = useToast();

    const handleSubmit = () => {
        if (selectedMood) {
            // In a real app, you'd send this to your backend.
            console.log("Mood submitted:", selectedMood);
            toast({
                title: "Feedback Submitted!",
                description: "Thank you for letting us know how you're feeling about the project.",
            });
            setSelectedMood(null);
        }
    };

    return (
        <Card className="bg-card mt-16">
            <CardHeader className="text-center">
                <CardTitle className="font-headline text-2xl">Client Mood Meter</CardTitle>
                <CardDescription>How are you feeling about your project's progress?</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center items-center gap-4 sm:gap-8">
                <button onClick={() => setSelectedMood('Happy')} className={cn("p-4 rounded-full transition-all", selectedMood === 'Happy' ? 'bg-green-500/20 scale-110' : 'hover:bg-muted')}>
                    <Smile className="h-12 w-12 text-green-500" />
                </button>
                <button onClick={() => setSelectedMood('Neutral')} className={cn("p-4 rounded-full transition-all", selectedMood === 'Neutral' ? 'bg-yellow-500/20 scale-110' : 'hover:bg-muted')}>
                    <Meh className="h-12 w-12 text-yellow-500" />
                </button>
                <button onClick={() => setSelectedMood('Concerned')} className={cn("p-4 rounded-full transition-all", selectedMood === 'Concerned' ? 'bg-red-500/20 scale-110' : 'hover:bg-muted')}>
                    <Frown className="h-12 w-12 text-red-500" />
                </button>
            </CardContent>
            <CardContent>
                <Button onClick={handleSubmit} disabled={!selectedMood} className="w-full">
                    <Send className="mr-2" /> Submit Feedback
                </Button>
            </CardContent>
        </Card>
    );
};

const ActivityTimestamp = ({ timestamp }: { timestamp: string }) => {
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        setFormattedDate(new Date(timestamp).toLocaleString());
    }, [timestamp]);
    
    if (!formattedDate) {
        return <div className="h-4 w-24 bg-muted rounded mt-1" />;
    }

    return <p className="text-xs text-muted-foreground">{formattedDate}</p>;
}

export default function DevTrackerPage() {
  return (
    <div className="bg-background">
      <section className="bg-card py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-2">
            <GitMerge className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold font-headline">Live Dev Tracker</h1>
          </div>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A transparent, real-time feed of our development progress. See what we're building, one commit at a time.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">

            {/* Timeline View */}
            <div className="mb-16">
                 <h2 className="text-3xl font-bold text-center mb-12 font-headline">Project Status Timeline</h2>
                 <div className="relative">
                     {/* The line */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-border -translate-y-1/2"></div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center relative">
                        {statusOrder.map((status, index) => (
                            <div key={status} className="flex flex-col items-center">
                                <div className={cn(
                                    "flex items-center justify-center h-16 w-16 rounded-full border-4 border-background z-10",
                                    statusConfig[status].color
                                )}>
                                    <div className="text-primary-foreground">{statusConfig[status].icon}</div>
                                </div>
                                <h3 className="text-lg font-semibold mt-4">{status}</h3>
                            </div>
                        ))}
                    </div>
                 </div>
            </div>
            
            <Separator className="my-16" />

            {/* Project Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {devTrackerProjects.map(project => (
                    <Card key={project.id} className="bg-card flex flex-col">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="font-headline text-2xl">{project.name}</CardTitle>
                                    <CardDescription>For: {project.client}</CardDescription>
                                </div>
                                <Badge variant={project.status === 'Launched' ? 'default' : 'secondary'}>
                                    <div className={cn("h-2 w-2 rounded-full mr-2", statusConfig[project.status].color)}></div>
                                    {project.status}
                                </Badge>
                            </div>
                            <div className="pt-4">
                                <Progress value={project.progress} className="h-2" />
                                <p className="text-sm text-muted-foreground mt-2">{project.progress}% complete</p>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                             <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">Now Working On:</h4>
                                    <p className="text-muted-foreground">{project.currentTask}</p>
                                </div>
                                <Separator />
                                <div>
                                    <h4 className="font-semibold mb-2">Recent Activity</h4>
                                    <ul className="space-y-3">
                                        {project.activities.map(activity => (
                                            <li key={activity.id} className="flex items-start gap-3">
                                                <GitCommit className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                                                <div>
                                                    <p className="text-foreground leading-tight">{activity.commit}</p>
                                                    <ActivityTimestamp timestamp={activity.timestamp} />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <MoodSelector />
        </div>
      </section>
    </div>
  );
}

    
