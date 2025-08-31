
//import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Award } from "lucide-react";
import { teamMembers, values, faqs, certifications } from "@/lib/data";

const WorldMap = () => (
  <div className="relative">
    <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto fill-muted-foreground/30">
        <path d="M1000 250a250 250 0 10-500 0 250 250 0 00500 0zM522 338c22-44 44-78 44-111 0-44-33-89-88-89s-89 45-89 89c0 33 22 67 44 111zM189 333c-33-33-56-78-56-122 0-89 78-156 167-156s167 67 167 156c0 44-22 89-56 122-22-22-33-44-44-67-11 22-22 45-44 67s-33 33-33 33-11-11-33-33-44-45-44-67c-11 22-22 44-44 67zM889 333c-33-33-56-78-56-122 0-89 78-156 167-156s167 67 167 156c0 44-22 89-56 122-22-22-33-44-44-67-11 22-22 45-44 67s-33 33-33 33-11-11-33-33-44-45-44-67c-11 22-22 44-44 67z M444 444c0 33 22 56 44 56s44-22 44-56-22-56-44-56-44 22-44 56z"></path>
    </svg>
    {/* Pulses for different locations */}
    <div className="absolute top-[40%] left-[25%]">
        <div className="w-4 h-4 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-0 left-0 w-4 h-4 bg-primary rounded-full"></div>
    </div>
    <div className="absolute top-[35%] left-[50%]">
        <div className="w-5 h-5 bg-primary rounded-full animate-ping delay-500"></div>
        <div className="absolute top-0 left-0 w-5 h-5 bg-primary rounded-full"></div>
    </div>
     <div className="absolute top-[55%] left-[18%]">
        <div className="w-3 h-3 bg-primary rounded-full animate-ping delay-200"></div>
        <div className="absolute top-0 left-0 w-3 h-3 bg-primary rounded-full"></div>
    </div>
    <div className="absolute top-[45%] left-[80%]">
        <div className="w-3 h-3 bg-primary rounded-full animate-ping delay-1000"></div>
         <div className="absolute top-0 left-0 w-3 h-3 bg-primary rounded-full"></div>
    </div>
     <div className="absolute top-[60%] left-[70%]">
        <div className="w-4 h-4 bg-primary rounded-full animate-ping delay-700"></div>
         <div className="absolute top-0 left-0 w-4 h-4 bg-primary rounded-full"></div>
    </div>
    <div className="absolute top-[30%] left-[75%]">
        <div className="w-3 h-3 bg-primary rounded-full animate-ping delay-400"></div>
        <div className="absolute top-0 left-0 w-3 h-3 bg-primary rounded-full"></div>
    </div>
  </div>
);

const OrgChart = () => {
    const ceo = teamMembers.find(m => m.role.includes('CEO'));
    const otherLeaders = teamMembers.filter(m => !m.role.includes('CEO'));

    if (!ceo) return null;

    return (
        <div className="relative">
            {/* CEO */}
            <div className="flex justify-center mb-12">
                <div className="relative text-center">
                    <Card className="inline-block text-center overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl bg-background border-border hover:border-primary">
                        <CardHeader className="p-0">
                          <Avatar className="mx-auto mt-6 h-32 w-32 border-4 border-card shadow-lg">
                            <AvatarImage src={ceo.avatarUrl} alt={ceo.name} />
                            <AvatarFallback>{ceo.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                        </CardHeader>
                        <CardContent className="p-6">
                          <CardTitle className="text-xl">{ceo.name}</CardTitle>
                          <p className="text-primary font-medium mt-1">{ceo.role}</p>
                          <p className="text-muted-foreground mt-3 text-sm max-w-xs">{ceo.bio}</p>
                        </CardContent>
                    </Card>
                    {/* Vertical line from CEO */}
                    <div className="absolute left-1/2 -bottom-6 h-6 w-0.5 bg-border -translate-x-1/2"></div>
                </div>
            </div>

            {/* Connecting Line */}
            <div className="flex justify-center">
                 <div className="w-4/5 h-0.5 bg-border"></div>
            </div>

            {/* Subordinates */}
            <div className="flex justify-around mt-6 relative">
                 {/* Vertical lines connecting to the horizontal line */}
                 {otherLeaders.map((_, index) => (
                    <div key={index} className="absolute top-0 h-6 w-0.5 bg-border" style={{ left: `calc(${(100 / (otherLeaders.length * 2)) * (index * 2 + 1)}%)`}}></div>
                ))}
                
                {otherLeaders.map(member => (
                    <div key={member.name} className="relative text-center w-1/4">
                        <Card className="inline-block text-center overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl bg-background border-border hover:border-primary mt-6">
                            <CardHeader className="p-0">
                                <Avatar className="mx-auto mt-6 h-24 w-24 border-4 border-card shadow-lg">
                                    <AvatarImage src={member.avatarUrl} alt={member.name} />
                                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                            </CardHeader>
                            <CardContent className="p-6">
                                <CardTitle className="text-lg">{member.name}</CardTitle>
                                <p className="text-primary font-medium mt-1 text-sm">{member.role}</p>
                                <p className="text-muted-foreground mt-3 text-xs">{member.bio}</p>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-card py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline">About BitEdge Technologies</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a team of passionate innovators dedicated to solving complex IT challenges and empowering businesses through technology.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                Our mission is to be the leading partner for businesses seeking to harness the power of technology. We strive to deliver exceptional IT services and innovative software solutions that drive growth, enhance efficiency, and provide a competitive advantage for our clients in the global market.
              </p>
              <p className="text-lg text-muted-foreground">
                We are committed to building long-term relationships based on trust, expertise, and a deep understanding of our clients' unique needs and aspirations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
        {/* Global Presence Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Global Presence</h2>
            <p className="mt-2 text-lg text-muted-foreground">A remote-first team powering businesses and innovation across the world.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <WorldMap />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-4xl font-bold text-primary">50+</h3>
                <p className="text-muted-foreground mt-2">Clients Worldwide</p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-4xl font-bold text-primary">10+</h3>
                <p className="text-muted-foreground mt-2">Team in Countries</p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-4xl font-bold text-primary">300+</h3>
                <p className="text-muted-foreground mt-2">Projects Completed</p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                 <h3 className="text-4xl font-bold text-primary">18</h3>
                <p className="text-muted-foreground mt-2">Timezones Active</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Core Values</h2>
            <p className="mt-2 text-lg text-muted-foreground">The principles that guide our work and culture.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
                <Card key={value.title} className="text-center p-6 bg-card border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
                    <div className="mb-4 inline-block bg-primary/10 p-4 rounded-full">
                        {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Meet Our Leadership</h2>
            <p className="mt-2 text-lg text-muted-foreground">The experienced minds behind our success.</p>
          </div>
          <OrgChart />
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Achievements</h2>
            <p className="mt-2 text-lg text-muted-foreground">Recognized for our excellence and commitment.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
            {certifications.map((cert) => (
              <div key={cert.title} className="flex flex-col items-center">
                <div className="bg-primary/10 text-primary p-5 rounded-full mb-4">
                    <Award className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <p className="text-muted-foreground text-sm">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="bg-background px-4 rounded-lg mb-2">
                        <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </section>
    </div>
  );
}
