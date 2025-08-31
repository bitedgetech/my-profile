
import { Check, Code2, Shield, Zap, GitCommit, GitPullRequest, Recycle, TestTube2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const principles = [
    {
        icon: <Code2 className="h-12 w-12" />,
        title: "Code Quality",
        description: "We believe that high-quality code is the foundation of a great product. It's not just about what it does, but how it's built.",
        details: [
            "Consistent coding standards and style guides.",
            "Comprehensive code reviews for every change.",
            "Emphasis on readability, maintainability, and scalability.",
            "Writing clean, efficient, and well-documented code."
        ]
    },
    {
        icon: <Recycle className="h-12 w-12" />,
        title: "Agile Process",
        description: "We embrace an agile mindset to deliver value to our clients faster and more effectively, adapting to change as we go.",
        details: [
            "Iterative development in two-week sprints.",
            "Daily stand-ups and regular retrospectives.",
            "Close collaboration with clients and stakeholders.",
            "Prioritizing working software and continuous feedback."
        ]
    },
    {
        icon: <Zap className="h-12 w-12" />,
        title: "Continuous Delivery",
        description: "Our goal is to get new features and fixes into the hands of users as quickly and safely as possible.",
        details: [
            "Automated CI/CD pipelines for every project.",
            "Comprehensive automated testing (unit, integration, E2E).",
            "Blue-green and canary deployment strategies.",
            "Continuous monitoring and observability."
        ]
    },
    {
        icon: <Shield className="h-12 w-12" />,
        title: "Security-First Thinking",
        description: "Security is not an afterthought; it's an integral part of our entire development lifecycle, from design to deployment.",
        details: [
            "Secure coding practices and regular training.",
            "Threat modeling in the design phase.",
            "Regular vulnerability scanning and penetration testing.",
            "Adherence to industry best practices like OWASP Top 10."
        ]
    }
];

export default function EngineeringPrinciplesPage() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="bg-card py-20 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-headline">Our Engineering DNA</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        The core principles that guide our development process, ensuring we build robust, scalable, and high-quality solutions.
                    </p>
                </div>
            </section>

            {/* Principles Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="relative">
                        {/* The connecting line */}
                        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-12 bottom-12 w-1 bg-border"></div>

                        {principles.map((principle, index) => (
                            <div key={principle.title} className="relative flex md:items-center mb-12 md:mb-0">
                                <div className={`flex w-full md:w-1/2 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                    <div className="w-full md:w-10/12">
                                        <Card className={`bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                            <CardHeader className="flex flex-col md:items-start">
                                                <div className={`mb-4 p-4 bg-primary/10 rounded-full text-primary w-fit ${index % 2 === 0 ? 'self-start' : 'md:self-end'}`}>
                                                    {principle.icon}
                                                </div>
                                                <CardTitle className="font-headline text-3xl">{principle.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-muted-foreground text-lg mb-4">{principle.description}</p>
                                                <ul className="space-y-2">
                                                    {principle.details.map((detail, i) => (
                                                        <li key={i} className={`flex items-start gap-3 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end'}`}>
                                                            {index % 2 !== 0 && <span className="text-muted-foreground text-right flex-grow">{detail}</span>}
                                                            <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                                                             {index % 2 === 0 && <span className="text-muted-foreground">{detail}</span>}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                                {/* The circle on the timeline */}
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-primary h-8 w-8 rounded-full items-center justify-center border-4 border-background">
                                    <GitCommit className="h-4 w-4 text-primary-foreground" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
