
'use client';

import { useState } from 'react';
import Link from 'next/link';
//import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';
import { NewsletterForm } from '@/components/layout/newsletter-form';
import { cn } from '@/lib/utils';

const allCategories = ['All', ...new Set(blogPosts.map((p) => p.category))];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-card py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline">
            BitEdge Insights
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your source for the latest in IT, cybersecurity, and technology
            trends.
          </p>
        </div>
      </section>

      {/* Blog List Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <main className="lg:col-span-8">
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 gap-12">
                  {filteredPosts.map((post) => (
                    <Card
                      key={post.id}
                      className="group flex flex-col md:flex-row overflow-hidden bg-card border-border hover:border-primary transition-all duration-300"
                    >
                      <div className="md:w-2/5 relative min-h-[250px] md:min-h-0">
                      </div>
                      <div className="md:w-3/5 p-6 flex flex-col">
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            {post.category}
                          </Badge>
                          <Link href={`/blog/${post.slug}`}>
                            <h2 className="text-2xl font-bold font-headline hover:text-primary transition-colors">
                              {post.title}
                            </h2>
                          </Link>
                          <div className="text-sm text-muted-foreground mt-2 mb-4">
                            <span>By {post.author}</span> &bull;{' '}
                            <span>{post.date}</span>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {post.excerpt}
                          </p>
                        </div>
                        <div className="mt-auto pt-4">
                          <Button
                            asChild
                            variant="link"
                            className="p-0 text-primary"
                          >
                            <Link href={`/blog/${post.slug}`}>
                              Read More{' '}
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-card rounded-lg">
                    <h2 className="text-2xl font-bold font-headline">No Posts Found</h2>
                    <p className="text-muted-foreground mt-2">Try adjusting your search or filter.</p>
                </div>
              )}
            </main>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold font-headline">
                      Search
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Input
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold font-headline">
                      Categories
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {allCategories.map((category) => (
                        <Button
                          key={category}
                          variant="ghost"
                          size="sm"
                          className={cn(
                            "rounded-full",
                            selectedCategory === category
                              ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                              : 'bg-muted text-muted-foreground hover:bg-muted/80'
                          )}
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold font-headline">
                      Recent Posts
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {blogPosts.slice(0, 3).map((post) => (
                        <li key={post.id}>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="font-semibold text-foreground hover:text-primary"
                          >
                            {post.title}
                          </Link>
                          <p className="text-sm text-muted-foreground">
                            {post.date}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                 <Card className="bg-card text-center p-6">
                    <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold font-headline mb-2">Stay Updated</h3>
                    <p className="text-muted-foreground mb-4 text-sm">Subscribe to our newsletter for the latest articles directly in your inbox.</p>
                    <NewsletterForm />
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
