
'use client';

import { useState, useRef, useEffect } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter, SheetDescription } from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Bot, Loader2, Send, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { chat, type ChatHistory } from '@/ai/flows/assistant-flow';

export default function ChatAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatHistory>([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTo({
                top: scrollAreaRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || loading) return;

        const userMessage = { role: 'user', content: input };
        const newMessages: ChatHistory = [...messages, userMessage];
        setMessages(newMessages);
        setInput('');
        setLoading(true);

        try {
            const { response } = await chat({ history: newMessages });
            setMessages([...newMessages, { role: 'model', content: response }]);
        } catch (error) {
            console.error("Chat error:", error);
            const errorMessage = (error instanceof Error && error.message.includes('503'))
                ? 'The AI model is currently overloaded. Please try again in a moment.'
                : 'Sorry, I encountered an error. Please try again.';
            setMessages([...newMessages, { role: 'model', content: errorMessage }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button
                    className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg shadow-primary/30 z-50 text-shadow-glow"
                    size="icon"
                >
                    <Bot className="h-8 w-8" />
                </Button>
            </SheetTrigger>
            <SheetContent className="w-full max-w-md flex flex-col p-0 bg-card/80 backdrop-blur-xl border-primary/20">
                <SheetHeader className="p-4 border-b border-primary/20">
                    <SheetTitle className="flex items-center gap-2 font-headline text-2xl text-shadow-glow">
                        <Sparkles className="h-6 w-6 text-primary" />
                        BitEdge AI Assistant
                    </SheetTitle>
                     <SheetDescription>
                        Ask me about our services, projects, or blog posts.
                    </SheetDescription>
                </SheetHeader>
                <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
                    <div className="space-y-4">
                        {messages.map((msg, index) => (
                            <div key={index} className={cn("flex items-start gap-3", msg.role === 'user' ? 'justify-end' : '')}>
                                {msg.role === 'model' && (
                                    <Avatar className="h-8 w-8 bg-primary/20 border border-primary">
                                        <AvatarFallback><Bot className="h-5 w-5 text-primary" /></AvatarFallback>
                                    </Avatar>
                                )}
                                <div className={cn(
                                    "rounded-lg p-3 max-w-[80%]",
                                    msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-background'
                                )}>
                                    <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                                </div>
                            </div>
                        ))}
                         {loading && (
                            <div className="flex items-start gap-3">
                               <Avatar className="h-8 w-8 bg-primary/20 border border-primary">
                                    <AvatarFallback><Bot className="h-5 w-5 text-primary" /></AvatarFallback>
                                </Avatar>
                                <div className="rounded-lg p-3 bg-background">
                                   <Loader2 className="h-5 w-5 animate-spin text-primary" />
                                </div>
                            </div>
                        )}
                    </div>
                </ScrollArea>
                <SheetFooter className="p-4 border-t border-primary/20 bg-card/80">
                    <form onSubmit={handleSubmit} className="w-full flex items-center gap-2">
                        <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask me anything..."
                            className="flex-grow bg-background/50 focus:ring-primary"
                            disabled={loading}
                        />
                        <Button type="submit" disabled={loading} size="icon">
                            <Send className="h-5 w-5" />
                        </Button>
                    </form>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
