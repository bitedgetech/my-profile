"use client";

import { useState } from "react";
//import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data.tsx";
import { cn } from "@/lib/utils";

const categories = ["All", ...new Set(projects.map(p => p.category))];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((project) => project.category === filter);

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-card py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline">Our Work</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We take pride in our work. Explore our portfolio to see how we've helped businesses like yours succeed with our innovative IT solutions.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="bg-card p-1 rounded-lg flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setFilter(category)}
                  variant="ghost"
                  className={cn(
                    "rounded-md",
                    filter === category ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground" : "text-muted-foreground hover:bg-muted"
                  )}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden group bg-card border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary">
                <div className="relative h-60 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-primary font-semibold mb-1">{project.category}</p>
                  <h3 className="text-xl font-bold font-headline mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
