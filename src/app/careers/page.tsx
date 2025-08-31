
import { jobOpenings, benefits } from "@/lib/data.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin, Briefcase, Clock, ArrowRight, UserCheck, Search, Users, FileText, Code } from "lucide-react";
//import Image from "next/image";

export default function CareersPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-card py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline">Join Our Team</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of a team that's passionate about innovation and dedicated to pushing the boundaries of technology.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Work at BitEdge?</h2>
                    <p className="text-lg text-muted-foreground">
                        At BitEdge Technologies, we foster a culture of collaboration, learning, and growth. We believe in empowering our employees, providing them with the resources and opportunities they need to succeed and make a real impact.
                    </p>
                    <p className="text-lg text-muted-foreground">
                        Join us and you'll work on challenging projects, with cutting-edge technologies, alongside a team of brilliant and supportive colleagues.
                    </p>
                </div>
                <div>
                </div>
            </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Perks & Benefits</h2>
            <p className="mt-2 text-lg text-muted-foreground">We invest in our team's success and well-being.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
                <Card key={benefit.title} className="text-center p-6 bg-background border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
                    <div className="mb-4 inline-block bg-primary/10 p-4 rounded-full">
                        {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Rebuild Site Challenge Section */}
       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary to-fuchsia-600 text-primary-foreground p-8 md:p-12 text-center">
              <Code className="h-16 w-16 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">The "Rebuild Our Homepage" Challenge</h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Are you a junior developer looking to stand out? Fork our website's public repository, rebuild our homepage with your own creative spin, and share the result with us. It's the best way to show us your skills. Exceptional submissions may lead to an interview.
              </p>
              <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="#open-positions">View Open Positions <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
          </Card>
        </div>
      </section>


       {/* Hiring Process Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Hiring Process</h2>
                <p className="mt-2 text-lg text-muted-foreground">A simple and transparent process to find the right fit.</p>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center relative">
                  <div className="flex flex-col items-center p-4">
                      <div className="bg-primary/10 text-primary p-6 rounded-full mb-4 border-4 border-card z-10">
                          <FileText className="h-12 w-12" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">1. Application</h3>
                      <p className="text-muted-foreground">Submit your resume and cover letter through our online portal.</p>
                  </div>
                  <div className="flex flex-col items-center p-4">
                      <div className="bg-primary/10 text-primary p-6 rounded-full mb-4 border-4 border-card z-10">
                          <Search className="h-12 w-12" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">2. Screening</h3>
                      <p className="text-muted-foreground">Our HR team reviews your application to assess your qualifications.</p>
                  </div>
                  <div className="flex flex-col items-center p-4">
                      <div className="bg-primary/10 text-primary p-6 rounded-full mb-4 border-4 border-card z-10">
                          <Users className="h-12 w-12" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">3. Interviews</h3>
                      <p className="text-muted-foreground">Meet with the hiring manager and team members to discuss your skills and experience.</p>
                  </div>
                  <div className="flex flex-col items-center p-4">
                      <div className="bg-primary/10 text-primary p-6 rounded-full mb-4 border-4 border-card z-10">
                          <UserCheck className="h-12 w-12" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">4. Offer</h3>
                      <p className="text-muted-foreground">If you're a great fit, we'll extend a competitive job offer.</p>
                  </div>
              </div>
            </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Current Openings</h2>
            <p className="mt-2 text-lg text-muted-foreground">Find your next opportunity at BitEdge Technologies.</p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="transition-all duration-300 hover:shadow-xl hover:border-primary bg-card">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                    <div>
                      <CardTitle className="text-2xl font-headline hover:text-primary">
                        <Link href="#">{job.title}</Link>
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground mt-2">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0 flex-shrink-0">
                      <Button asChild>
                        <Link href="#">Apply Now <ArrowRight className="ml-2 h-4 w-4"/></Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
