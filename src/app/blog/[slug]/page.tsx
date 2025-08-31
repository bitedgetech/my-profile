
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, teamMembers } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const authorFirstName = post.author.split(' ')[0];
  const authorTeamInfo = teamMembers.find(m => post.author.includes(m.name.split(' ')[1]));

  return (
    <div className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <article>
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-primary hover:underline mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
            </Link>
            <Badge variant="secondary">{post.category}</Badge>
            <h1 className="mt-2 text-3xl md:text-5xl font-bold font-headline leading-tight">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center space-x-4 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={authorTeamInfo?.avatarUrl ?? `https://placehold.co/100x100.png`} />
                  <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{post.author}</span>
              </div>
              <span>&bull;</span>
              <time dateTime={post.date}>{post.date}</time>
            </div>
          </div>

          <Image
            src={post.imageUrl}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-auto rounded-lg shadow-lg mb-8"
            priority
            data-ai-hint={post.imageHint}
          />

          <div 
            className="prose prose-lg max-w-none text-foreground prose-invert prose-h2:font-headline prose-h2:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <Card className="mt-12 bg-card">
            <CardContent className="p-6 flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                    <AvatarImage src={authorTeamInfo?.avatarUrl ?? `https://placehold.co/100x100.png`} />
                    <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <h4 className="text-lg font-semibold">About the author</h4>
                    <p className="font-bold text-xl text-primary">{post.author}</p>
                    <p className="text-muted-foreground mt-1">
                        {authorTeamInfo?.bio ?? `${authorFirstName} is a specialist at BitEdge Technologies, contributing expertise in ${post.category}.`}
                    </p>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
