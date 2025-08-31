
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Rocket, DollarSign, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { services, projects, testimonials, partners } from "@/lib/data.tsx";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-background py-20 md:py-32">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 font-headline tracking-tighter">
                Driving Business Forward with Innovative IT Solutions
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                BitEdge Technologies provides cutting-edge IT services to help your business thrive in the digital age.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/services">Our Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </div>
          </div>
           <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent z-0"></div>
        </section>

        {/* Success Metrics Section */}
        <section className="py-16 bg-card">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="bg-background p-8 rounded-lg shadow-sm transform hover:-translate-y-2 transition-transform duration-300">
                        <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
                        <p className="text-5xl font-bold">37</p>
                        <p className="text-muted-foreground mt-2 text-lg">MVPs Launched</p>
                    </div>
                    <div className="bg-background p-8 rounded-lg shadow-sm transform hover:-translate-y-2 transition-transform duration-300">
                        <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                        <p className="text-5xl font-bold">$5.2M+</p>
                        <p className="text-muted-foreground mt-2 text-lg">Revenue Unlocked for Clients</p>
                    </div>
                    <div className="bg-background p-8 rounded-lg shadow-sm transform hover:-translate-y-2 transition-transform duration-300">
                        <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                        <p className="text-5xl font-bold">11</p>
                        <p className="text-muted-foreground mt-2 text-lg">Countries Served</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Partners Section */}
        <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
                <h3 className="text-center text-muted-foreground font-semibold uppercase tracking-wider mb-8">Trusted by leading companies worldwide</h3>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                    {partners.map((partner) => (
                        <div key={partner.name} className="flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                            {partner.logo}
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Expertise</h2>
              <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
                We offer a comprehensive suite of IT services tailored to your business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.slice(0, 4).map((service) => (
                <Card key={service.id} className="text-center bg-background border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit">
                      {service.icon}
                    </div>
                    <CardTitle className="mt-4">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.shortDescription}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
             <div className="text-center mt-12">
                <Button asChild variant="link" className="text-primary text-lg">
                    <Link href="/services">View All Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="portfolio" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Success Stories</h2>
              <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
                Explore some of our most successful projects and see the BitEdge difference.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(0, 3).map((project) => (
                <Card key={project.id} className="overflow-hidden group bg-card border-border">
                  <div className="relative h-60">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={project.imageHint}
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
                <Button asChild size="lg" variant="outline">
                    <Link href="/portfolio">View Full Portfolio</Link>
                </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">What Our Clients Say</h2>
            </div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2">
                    <div className="p-1 h-full">
                      <Card className="flex flex-col justify-between h-full bg-background border-border">
                        <CardContent className="p-6">
                          <div className="flex mb-2">
                              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-accent fill-accent" />)}
                          </div>
                          <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                        </CardContent>
                        <div className="flex items-center gap-4 p-6 pt-0">
                          <Avatar>
                            <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-fuchsia-600 text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4 font-headline">Let's Build Something Great</h2>
                <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Ready to start your next project? Let's work together to build something amazing. Schedule a free consultation to discuss your vision.</p>
                <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/contact">Book a Free Call Now</Link>
                </Button>
            </div>
        </section>

      </main>
    </div>
  );
}
