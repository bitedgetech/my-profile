
//import Image from "next/image";
import { memes } from "@/lib/data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Smile } from "lucide-react";

export default function MemeWallPage() {
    return (
        <div className="bg-background">
            <section className="bg-card py-20 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <Smile className="h-8 w-8 text-primary" />
                        <h1 className="text-4xl md:text-6xl font-bold font-headline">The BitEdge Meme Wall</h1>
                    </div>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Because even high-performance teams need a good laugh. A curated collection of our favorite dev and startup humor.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {memes.map((meme) => (
                            <Card key={meme.id} className="group overflow-hidden bg-card border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                                <CardContent className="p-0">
                                    <div className="relative aspect-square w-full overflow-hidden">
                                    </div>
                                </CardContent>
                                <CardFooter className="p-4 flex flex-col items-start">
                                    <p className="font-semibold text-foreground">{meme.title}</p>
                                    <p className="text-sm text-muted-foreground">Shared by: {meme.submittedBy}</p>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
