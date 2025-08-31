
'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { useToast } from '@/hooks/use-toast';
import { submitCode, type CodeSubmissionState } from './actions';
import { challenges, leaderboard } from '@/lib/data';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CodeXml, Trophy, ChevronRight, Crown, Loader2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
        </>
      ) : (
        <>
          <CodeXml className="mr-2" /> Submit Solution
        </>
      )}
    </Button>
  );
}


export default function CodeBattlePage() {
    const currentChallenge = challenges.find(c => !c.isArchived);
    const archivedChallenges = challenges.filter(c => c.isArchived);

    const { toast } = useToast();
    const formRef = useRef<HTMLFormElement>(null);
    const initialState: CodeSubmissionState = { message: '', success: false, whatsappLink: '' };
    const [state, formAction] = useActionState(submitCode, initialState);
    
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
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <Trophy className="h-10 w-10 text-primary drop-shadow-[0_0_5px_hsl(var(--primary))]" />
                        <h1 className="text-4xl md:text-6xl font-bold font-headline text-shadow-glow">Code Battle Zone</h1>
                    </div>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Sharpen your skills, compete with the best, and get recognized. Welcome to the ultimate coding arena.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            {currentChallenge && (
                                <Card>
                                    <form ref={formRef} action={formAction}>
                                        <input type="hidden" name="challengeId" value={currentChallenge.id} />
                                        <div className={cn("hidden")}>
                                            <Label htmlFor="honeypot">Honeypot</Label>
                                            <input type="text" id="honeypot" name="honeypot" tabIndex={-1} />
                                        </div>
                                        <CardHeader>
                                            <div className="flex justify-between items-center">
                                                <CardTitle className="font-headline text-3xl">Challenge of the Month</CardTitle>
                                                <Badge variant={currentChallenge.level === 'Hard' ? 'destructive' : 'secondary'}>{currentChallenge.level}</Badge>
                                            </div>
                                            <CardDescription>{currentChallenge.title}</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-6">
                                            <div>
                                                <h3 className="font-semibold text-lg mb-2">Description</h3>
                                                <p className="text-muted-foreground whitespace-pre-wrap">{currentChallenge.description}</p>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="language" className="font-semibold text-lg">Language</Label>
                                                <Select name="language" defaultValue="javascript">
                                                    <SelectTrigger id="language">
                                                        <SelectValue placeholder="Select language" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="javascript">JavaScript</SelectItem>
                                                        <SelectItem value="python">Python</SelectItem>
                                                        <SelectItem value="typescript">TypeScript</SelectItem>
                                                        <SelectItem value="java">Java</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="code" className="font-semibold text-lg">Your Solution</Label>
                                                <Textarea id="code" name="code" placeholder="> Enter your code here..." rows={12} className="font-code bg-black/50 border-primary/20 text-green-400 focus:ring-primary" required />
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <SubmitButton />
                                        </CardFooter>
                                    </form>
                                </Card>
                            )}
                        </div>

                        <div className="space-y-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="font-headline text-2xl flex items-center gap-2">
                                        <Crown className="text-yellow-400" /> Leaderboard
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="w-1/4">Rank</TableHead>
                                                <TableHead>User</TableHead>
                                                <TableHead className="text-right">Score</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {leaderboard.map(entry => (
                                                <TableRow key={entry.rank}>
                                                    <TableCell className="font-bold text-lg">{entry.rank}</TableCell>
                                                    <TableCell>
                                                        <div className="flex items-center gap-2">
                                                            <Avatar className="h-8 w-8">
                                                                <AvatarImage src={entry.avatarUrl} alt={entry.name} />
                                                                <AvatarFallback>{entry.name.charAt(0)}</AvatarFallback>
                                                            </Avatar>
                                                            <span className="font-medium">{entry.name}</span>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="text-right font-code">{entry.score}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                            
                             <Card>
                                <CardHeader>
                                    <CardTitle className="font-headline text-2xl">Challenge Archive</CardTitle>
                                </CardHeader>
                                <CardContent>
                                   <ul className="space-y-3">
                                       {archivedChallenges.map(challenge => (
                                           <li key={challenge.id}>
                                               <Link href="#" className="flex justify-between items-center p-3 rounded-md hover:bg-muted">
                                                   <div>
                                                       <span className="font-semibold">{challenge.title}</span>
                                                       <Badge variant="outline" className="ml-2">{challenge.level}</Badge>
                                                   </div>
                                                   <ChevronRight className="h-5 w-5 text-muted-foreground" />
                                               </Link>
                                           </li>
                                       ))}
                                   </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
