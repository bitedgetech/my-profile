
import { ReactElement } from "react";
import { Server, Code, ShieldCheck, Cloud, Briefcase, Bot, Smartphone, PenTool, GitBranch, Blocks, Zap, CheckCircle, Users, Heart, Award, Wifi, Coffee, Star, Globe, TrendingUp, Anchor, CodeXml, Calculator, Puzzle, Trophy, BrainCircuit, MessageSquare, Lightbulb, Building, Target, Search, Rocket, TestTube, Scale, MessagesSquare, DraftingCompass, Linkedin, GanttChartSquare, Smile, Calendar, Database, Factory, ShoppingCart, Hospital, University, HelpingHand } from "lucide-react";

export interface Service {
  id: number;
  title: string;
  icon: ReactElement;
  shortDescription: string;
  longDescription: string;
}

export interface Project {
  id: number;
  title:string;
  category: string;
  description: string;
  imageUrl: string;
  imageHint: string;
}

export interface Testimonial {
  name: string;
  title: string;
  quote: string;
  avatarUrl: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  imageHint: string;
}

export interface JobOpening {
    id: number;
    title: string;
    location: string;
    department: string;
    type: 'Full-time' | 'Part-time' | 'Contract';
    description: string;
}

export interface Benefit {
    icon: ReactElement;
    title: string;
    description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatarUrl: string;
  bio: string;
}

export interface Value {
    icon: ReactElement;
    title: string;
    description: string;
}

export interface Partner {
    name: string;
    logo: ReactElement;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface Certification {
    title: string;
    issuer: string;
}

export type DevTrackerStatus = "Discovery" | "Design" | "In Development" | "QA & Testing" | "Launched";

export interface DevTrackerActivity {
  id: number;
  commit: string;
  timestamp: string;
}

export interface DevTrackerProject {
  id: number;
  name: string;
  client: string;
  status: DevTrackerStatus;
  progress: number;
  currentTask: string;
  lastUpdate: string;
  activities: DevTrackerActivity[];
}

export interface Challenge {
  id: number;
  title: string;
  level: "Easy" | "Medium" | "Hard";
  description: string;
  isArchived: boolean;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
  avatarUrl: string;
}

export interface FeedbackItem {
    id: number;
    name: string;
    message: string;
    type: "Testimonial" | "Feature Request" | "General Feedback";
    timestamp: string;
}

export interface FounderStoryItem {
    year: number;
    title: string;
    description: string;
    type: 'idea' | 'launch' | 'team' | 'growth' | 'challenge';
}

export interface ProcessStep {
    icon: ReactElement;
    title: string;
    description: string;
    deliverables: string[];
}

export interface Alumnus {
  id: number;
  name: string;
  roleAtBitEdge: string;
  currentRole: string;
  currentCompany: string;
  companyLogoUrl: string;
  avatarUrl: string;
  quote: string;
  linkedinUrl: string;
}

export interface Meme {
    id: number;
    title: string;
    imageUrl: string;
    imageHint: string;
    submittedBy: string;
}

export interface Technology {
    name: string;
    icon: ReactElement;
    description: string;
}

export interface Industry {
    name: string;
    icon: ReactElement;
    description: string;
}

export interface CreditTier {
    name: string;
    price: number;
    description: string;
    features: string[];
    popular: boolean;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    icon: <Code className="h-10 w-10" />,
    shortDescription: "Building modern, fast, and responsive websites with React and Next.js.",
    longDescription: "We create high-performance websites and web applications using modern technologies like React and Next.js. Our focus is on building responsive, scalable, and user-friendly digital experiences that drive engagement and growth for your business."
  },
  {
    id: 2,
    title: "Mobile App Development",
    icon: <Smartphone className="h-10 w-10" />,
    shortDescription: "Developing native and cross-platform mobile apps for iOS and Android.",
    longDescription: "We build beautiful and performant mobile applications for both iOS and Android. Whether you need a native app for maximum performance or a cross-platform solution with React Native for wider reach, we deliver high-quality mobile experiences."
  },
  {
    id: 3,
    title: "AI & Automation",
    icon: <Bot className="h-10 w-10" />,
    shortDescription: "Implementing AI and automation to streamline processes and drive innovation.",
    longDescription: "Harness the power of Artificial Intelligence and automation to transform your business operations. We build and implement AI-driven solutions, from chatbots to predictive analytics, that increase efficiency, reduce costs, and unlock new opportunities for growth."
  },
  {
    id: 4,
    title: "DevOps & Cloud Services",
    icon: <Cloud className="h-10 w-10" />,
    shortDescription: "Streamlining development and operations with scalable cloud infrastructure.",
    longDescription: "We offer comprehensive DevOps and cloud services to automate your infrastructure and accelerate your development lifecycle. From CI/CD pipelines to cloud migration and management, we ensure your systems are scalable, reliable, and secure."
  },
  {
    id: 5,
    title: "UI/UX Design",
    icon: <PenTool className="h-10 w-10" />,
    shortDescription: "Creating intuitive and beautiful user interfaces and experiences.",
    longDescription: "Our UI/UX design services focus on creating user-centered designs that are both beautiful and easy to use. We conduct user research, create wireframes and prototypes, and design visually stunning interfaces that enhance user satisfaction and engagement."
  },
  {
    id: 6,
    title: "Custom Software Development",
    icon: <GitBranch className="h-10 w-10" />,
    shortDescription: "Bespoke software solutions tailored to your unique business needs.",
    longDescription: "We develop custom software applications from scratch, tailored specifically to your operational needs. From enterprise-level platforms to specialized business tools, our solutions are scalable, secure, and designed for a seamless user experience, giving you a competitive edge."
  },
  {
      id: 7,
      title: "Blockchain & Web3",
      icon: <Blocks className="h-10 w-10" />,
      shortDescription: "Developing decentralized applications and smart contracts on the blockchain.",
      longDescription: "Explore the future of the web with our blockchain and Web3 development services. We build decentralized applications (dApps), smart contracts, and other blockchain-based solutions that offer enhanced security, transparency, and user control."
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Enterprise CRM Platform",
    category: "Custom Software",
    description: "Developed a scalable CRM from the ground up for a major financial services client, improving sales team productivity by 40%.",
    imageUrl: "https://placehold.co/800x600.png",
    imageHint: "dashboard analytics"
  },
  {
    id: 2,
    title: "Cloud Migration for E-commerce",
    category: "Cloud Solutions",
    description: "Successfully migrated a high-traffic e-commerce platform to a multi-cloud environment, resulting in 99.99% uptime and reduced latency.",
    imageUrl: "https://placehold.co/800x600.png",
    imageHint: "server room"
  },
  {
    id: 3,
    title: "Cybersecurity Overhaul for Healthcare",
    category: "Cybersecurity",
    description: "Implemented a comprehensive security framework for a healthcare provider, ensuring HIPAA compliance and protecting sensitive patient data.",
    imageUrl: "https://placehold.co/800x600.png",
    imageHint: "cyber security"
  },
  {
    id: 4,
    title: "AI-Powered Logistics Optimizer",
    category: "AI & Automation",
    description: "Created an AI model to optimize delivery routes for a logistics company, cutting fuel costs by 15% and improving delivery times.",
    imageUrl: "https://placehold.co/800x600.png",
    imageHint: "delivery truck"
  },
  {
    id: 5,
    title: "FinTech Mobile Application",
    category: "Custom Software",
    description: "Built a secure and user-friendly mobile banking app that acquired over 1 million users in its first year.",
    imageUrl: "https://placehold.co/800x600.png",
    imageHint: "mobile app"
  },
  {
    id: 6,
    title: "Managed IT for a Retail Chain",
    category: "Managed IT Services",
    description: "Provide ongoing IT support and infrastructure management for a national retail chain with over 200 locations.",
    imageUrl: "https://placehold.co/800x600.png",
    imageHint: "retail store"
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Fatima Zahra",
    title: "CEO, Innovate Pk",
    quote: "BitEdge Technologies transformed our operations. Their custom software solution was a game-changer for our business.",
    avatarUrl: "https://placehold.co/100x100.png"
  },
  {
    name: "Ali Raza",
    title: "CTO, QuantumLeap",
    quote: "The cloud migration project was seamless and executed flawlessly. Their team's expertise is unparalleled. Highly recommended.",
    avatarUrl: "https://placehold.co/100x100.png"
  },
  {
    name: "Ayesha Malik",
    title: "Director of Operations, Sehat First",
    quote: "Their cybersecurity audit and implementation gave us the peace of mind we needed. A truly professional and reliable partner.",
    avatarUrl: "https://placehold.co/100x100.png"
  },
   {
    name: "Usman Khan",
    title: "Founder, TezLogistics",
    quote: "The AI automation solution they built has significantly improved our efficiency and bottom line. We couldn't be happier.",
    avatarUrl: "https://placehold.co/100x100.png"
  }
];

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        slug: "future-of-cybersecurity-2024",
        title: "The Future of Cybersecurity: Trends to Watch in 2024",
        author: "Hina Rabbani, Security Analyst",
        date: "2024-05-15",
        category: "Cybersecurity",
        excerpt: "As technology evolves, so do the threats. Discover the key cybersecurity trends that will shape the digital landscape this year.",
        content: "<p>The digital world is in a constant state of flux, and with it, the landscape of cybersecurity threats continues to evolve. In 2024, we are seeing a convergence of AI-powered attacks, sophisticated phishing schemes, and increased vulnerabilities in IoT devices. Businesses must stay vigilant and adapt their security strategies to counter these emerging challenges.</p><p>One of the most significant trends is the rise of AI in both offensive and defensive cybersecurity. Malicious actors are using AI to create more convincing phishing emails and to automate attacks at an unprecedented scale. On the flip side, security professionals are harnessing AI for advanced threat detection, predictive analysis, and automated response systems. The key is to stay ahead in this technological arms race.</p><p>Another critical area is the security of the software supply chain. Attacks targeting software vendors and open-source libraries are becoming more common. Businesses need to implement rigorous vetting processes for third-party code and ensure that their development pipelines are secure from end to end. This includes regular code scanning, dependency checking, and implementing principles of least privilege.</p><p>Finally, the concept of a 'Zero Trust' architecture is moving from a buzzword to a necessity. The old model of a secure network perimeter is no longer sufficient. A Zero Trust approach assumes that no user or device is inherently trustworthy and requires strict verification for every access request, regardless of where it originates. This is a fundamental shift in security philosophy but a crucial one for protecting modern, distributed IT environments.</p>",
        imageUrl: "https://placehold.co/1200x600.png",
        imageHint: "cyber lock"
    },
    {
        id: 2,
        slug: "navigating-multi-cloud-strategy",
        title: "Navigating the Clouds: How to Build a Winning Multi-Cloud Strategy",
        author: "Zain Ahmed, Cloud Architect",
        date: "2024-04-22",
        category: "Cloud Solutions",
        excerpt: "A multi-cloud approach offers flexibility and avoids vendor lock-in, but it comes with its own set of complexities. Here’s how to do it right.",
        content: "<p>The allure of a multi-cloud strategy is undeniable: the ability to pick and choose the best services from different cloud providers, increased resilience, and avoidance of vendor lock-in. However, a successful multi-cloud deployment requires careful planning and robust management. Without a clear strategy, organizations can face spiraling costs, security gaps, and operational chaos.</p><p>The first step is to define your business objectives. What are you trying to achieve with a multi-cloud approach? Whether it's cost optimization, access to specialized services (like AI/ML platforms), or disaster recovery, your goals will dictate your choice of providers and services.</p><p>Next, focus on governance and cost management. Each cloud provider has its own pricing models and management tools. To avoid bill shock, you need a centralized cloud management platform (CMP) that provides visibility across all your environments. This allows you to monitor spending, enforce policies, and optimize resource allocation.</p><p>Finally, interoperability and security are paramount. Your applications and data need to move seamlessly between clouds, which requires a focus on containerization (using technologies like Docker and Kubernetes) and standardized APIs. From a security perspective, you must have a unified security policy that is consistently applied across all cloud environments, ensuring there are no weak links in your infrastructure.</p>",
        imageUrl: "https://placehold.co/1200x600.png",
        imageHint: "data clouds"
    },
    {
        id: 3,
        slug: "ai-in-business-automation",
        title: "Beyond the Hype: Practical AI for Business Automation",
        author: "Saad Ali, AI Specialist",
        date: "2024-03-10",
        category: "AI & Automation",
        excerpt: "AI is more than just a buzzword. Learn how businesses are using practical AI solutions to automate tasks, improve decision-making, and drive real growth.",
        content: "<p>Artificial Intelligence (AI) has moved from the realm of science fiction to a practical tool that is reshaping industries. While the hype around generative AI is significant, the real value for many businesses lies in more targeted applications of AI and machine learning for automation.</p><p>One of the most accessible applications is in customer service. AI-powered chatbots can handle a large volume of customer inquiries 24/7, freeing up human agents to focus on more complex issues. These bots are becoming increasingly sophisticated, capable of understanding natural language and resolving issues without human intervention.</p><p>Another powerful use case is in predictive analytics. By analyzing historical data, machine learning models can forecast sales trends, predict customer churn, and identify potential equipment failures before they happen. This allows businesses to move from a reactive to a proactive operational model, making better decisions based on data-driven insights.</p><p>Intelligent Process Automation (IPA) is also gaining traction. This involves using AI to automate complex, end-to-end business processes. For example, in finance, IPA can automate the entire invoice processing workflow, from data extraction and validation to payment approval and entry into accounting systems. This not only saves time but also reduces the risk of human error.</p>",
        imageUrl: "https://placehold.co/1200x600.png",
        imageHint: "robot brain"
    },
    {
        id: 4,
        slug: "the-entrepreneurial-mindset",
        title: "The Entrepreneurial Mindset: Navigating Uncertainty",
        author: "Dr. Arslan Maverick, CEO",
        date: "2024-06-01",
        category: "Leadership",
        excerpt: "True entrepreneurship isn't just about big ideas; it's about the resilience to navigate the constant waves of uncertainty and challenge.",
        content: "<p>Many believe entrepreneurship begins with a brilliant, world-changing idea. While innovation is key, the true foundation of a successful venture is the mindset of its leader. The entrepreneurial mindset is not a fixed trait but a developed muscle, strengthened by facing and overcoming adversity.</p><h2>Embracing the Unknown</h2><p>The journey of building a company is a path paved with unknowns. Market shifts, competitor moves, and internal challenges are constants. A successful entrepreneur doesn't just tolerate this uncertainty; they embrace it as an environment ripe for opportunity. It's about making calculated decisions with incomplete information and being agile enough to pivot when a new, better path reveals itself.</p><h2>Resilience is Your Superpower</h2><p>You will face setbacks. Products will have bugs, funding may be delayed, and key employees might leave. Resilience is the ability to absorb these shocks, learn from them, and move forward with renewed determination. It's the quiet voice that says 'try again' after a failure. This quality is more valuable than any single business plan or financial projection.</p><p>At BitEdge, we foster this mindset not just in our leadership but throughout our team. We believe that by empowering our people to think like owners, take calculated risks, and learn from every outcome, we build a more robust, innovative, and successful organization. The next great breakthrough often comes not from a place of comfort, but from the edge of uncertainty.</p>",
        imageUrl: "https://placehold.co/1200x600.png",
        imageHint: "mountain peak"
    }
];

export const jobOpenings: JobOpening[] = [
    {
        id: 1,
        title: "Senior Frontend Developer",
        location: "Remote",
        department: "Engineering",
        type: "Full-time",
        description: "Seeking an experienced Frontend Developer to build and maintain our client-facing applications using React and Next.js.",
    },
    {
        id: 2,
        title: "Cloud Solutions Architect",
        location: "Innovation City",
        department: "Engineering",
        type: "Full-time",
        description: "Design and implement scalable, secure, and robust cloud infrastructure for our enterprise clients.",
    },
    {
        id: 3,
        title: "UI/UX Designer",
        location: "Remote",
        department: "Design",
        type: "Contract",
        description: "Join our creative team to design intuitive and visually appealing interfaces for web and mobile applications.",
    },
    {
        id: 4,
        title: "Junior DevOps Engineer",
        location: "Innovation City",
        department: "Engineering",
        type: "Full-time",
        description: "Assist in managing our CI/CD pipelines, automating deployments, and monitoring system health.",
    }
];

export const benefits: Benefit[] = [
    {
        icon: <Award className="h-8 w-8 text-primary" />,
        title: "Competitive Salary",
        description: "We offer competitive compensation packages to attract and retain the best talent."
    },
    {
        icon: <Heart className="h-8 w-8 text-primary" />,
        title: "Health & Wellness",
        description: "Comprehensive health, dental, and vision insurance for you and your family."
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Flexible Work",
        description: "Enjoy flexible working hours and remote work options to maintain a healthy work-life balance."
    },
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Professional Development",
        description: "We support your growth with access to courses, conferences, and certifications."
    },
     {
        icon: <Coffee className="h-8 w-8 text-primary" />,
        title: "Generous PTO",
        description: "Take the time you need to recharge with our generous paid time off policy."
    },
    {
        icon: <Wifi className="h-8 w-8 text-primary" />,
        title: "Home Office Stipend",
        description: "We provide a stipend to help you set up a comfortable and productive home office."
    }
];

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Arslan Ahmed",
    role: "Founder & CEO",
    avatarUrl: "https://placehold.co/200x200.png",
    bio: "Visionary leader with 20+ years in the tech industry, passionate about driving innovation and fostering entrepreneurship."
  },
  {
    name: "Ayesha Khan",
    role: "Chief Technology Officer",
    avatarUrl: "https://placehold.co/200x200.png",
    bio: "Expert architect of scalable systems and cloud infrastructure, leading our technical strategy."
  },
  {
    name: "Bilal Hassan",
    role: "Head of Product",
    avatarUrl: "https://placehold.co/200x200.png",
    bio: "Dedicated to creating user-centric solutions that solve real-world business problems."
  },
    {
    name: "Sana Ali",
    role: "Lead Cybersecurity Analyst",
    avatarUrl: "https://placehold.co/200x200.png",
    bio: "Guardian of digital assets, specializing in threat intelligence and proactive defense."
  },
];

export const values: Value[] = [
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Innovation",
        description: "We constantly explore new technologies and ideas to deliver cutting-edge solutions."
    },
    {
        icon: <CheckCircle className="h-8 w-8 text-primary" />,
        title: "Integrity",
        description: "We build trust through transparent, honest, and ethical practices in everything we do."
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Collaboration",
        description: "We work closely with our clients and as a team to achieve shared success."
    },
    {
        icon: <Heart className="h-8 w-8 text-primary" />,
        title: "Customer Centricity",
        description: "Our clients are at the heart of our business. Their success is our success."
    }
]

export const partners: Partner[] = [
    { name: 'QuantumLeap', logo: <div className="flex items-center gap-2"><Star className="h-8 w-8" /> <span className="text-xl font-bold">QuantumLeap</span></div> },
    { name: 'Innovate Pk', logo: <div className="flex items-center gap-2"><Globe className="h-8 w-8" /> <span className="text-xl font-bold">Innovate Pk</span></div> },
    { name: 'Apex Solutions', logo: <div className="flex items-center gap-2"><TrendingUp className="h-8 w-8" /> <span className="text-xl font-bold">Apex Solutions</span></div> },
    { name: 'Meridian Corp', logo: <div className="flex items-center gap-2"><Anchor className="h-8 w-8" /> <span className="text-xl font-bold">Meridian Corp</span></div> },
    { name: 'CodeCrafters', logo: <div className="flex items-center gap-2"><CodeXml className="h-8 w-8" /> <span className="text-xl font-bold">CodeCrafters</span></div> },
];

export const faqs: FAQ[] = [
    {
        question: "What kind of industries do you specialize in?",
        answer: "We have experience working across a wide range of industries, including finance, healthcare, retail, logistics, and technology. Our solutions are tailored to meet the specific challenges and opportunities of each sector."
    },
    {
        question: "How do you approach a new project?",
        answer: "Our process begins with a deep-dive discovery phase to understand your business goals and technical requirements. We then move to strategy and planning, followed by agile development sprints with regular feedback loops. We prioritize transparency and collaboration throughout the entire project lifecycle."
    },
    {
        question: "What is your pricing model?",
        answer: "We offer flexible pricing models to suit different project needs, including fixed-price contracts for well-defined scopes, time and materials for more dynamic projects, and dedicated team retainers for ongoing work. We provide detailed proposals and transparent pricing upfront."
    },
    {
        question: "Do you provide ongoing support and maintenance?",
        answer: "Yes, we offer comprehensive support and maintenance packages to ensure your applications remain secure, up-to-date, and performant after launch. Our support services are tailored to your needs, from basic monitoring to proactive feature enhancements."
    }
];

export const certifications: Certification[] = [
    { title: "Certified Cloud Practitioner", issuer: "Amazon Web Services" },
    { title: "Azure Solutions Architect Expert", issuer: "Microsoft" },
    { title: "Professional Scrum Master", issuer: "Scrum.org" },
    { title: "Certified Information Systems Security Professional (CISSP)", issuer: "(ISC)²" }
];

export const devTrackerProjects: DevTrackerProject[] = [
    {
        id: 1,
        name: "QuantumLeap AI Engine",
        client: "QuantumLeap",
        status: "In Development",
        progress: 65,
        currentTask: "Refactoring the data ingestion pipeline for performance.",
        lastUpdate: "2 hours ago",
        activities: [
            { id: 1, commit: "feat: Integrate real-time analytics dashboard", timestamp: "2024-06-03T10:00:00Z" },
            { id: 2, commit: "fix: Resolve authentication bug on mobile", timestamp: "2024-06-02T15:30:00Z" },
            { id: 3, commit: "chore: Upgrade Node.js to v20", timestamp: "2024-06-01T11:00:00Z" },
        ]
    },
    {
        id: 2,
        name: "Innovate Pk Mobile App",
        client: "Innovate Pk",
        status: "QA & Testing",
        progress: 90,
        currentTask: "Conducting final regression testing before App Store submission.",
        lastUpdate: "1 day ago",
         activities: [
            { id: 1, commit: "test: Add end-to-end tests for payment flow", timestamp: "2024-06-02T18:00:00Z" },
            { id: 2, commit: "refactor: Simplify state management with Zustand", timestamp: "2024-05-30T12:00:00Z" },
        ]
    },
    {
        id: 3,
        name: "Apex Solutions Web3 Portal",
        client: "Apex Solutions",
        status: "Design",
        progress: 20,
        currentTask: "Finalizing wireframes for the user dashboard and NFT marketplace.",
        lastUpdate: "3 days ago",
         activities: [
            { id: 1, commit: "docs: Update project requirements document", timestamp: "2024-05-29T09:00:00Z" },
        ]
    },
    {
        id: 4,
        name: "Meridian Corp Website",
        client: "Meridian Corp",
        status: "Launched",
        progress: 100,
        currentTask: "Project complete. Monitoring performance and gathering feedback.",
        lastUpdate: "1 week ago",
         activities: [
             { id: 1, commit: "deploy: Production launch v1.0", timestamp: "2024-05-25T16:00:00Z" },
        ]
    },
];

export const challenges: Challenge[] = [
    {
        id: 1,
        title: "Two Sum Challenge",
        level: "Easy",
        description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        isArchived: false,
    },
    {
        id: 2,
        title: "FizzBuzz",
        level: "Easy",
        description: "Write a program that outputs the string representation of numbers from 1 to n. But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.",
        isArchived: true,
    }
]

export const leaderboard: LeaderboardEntry[] = [
    { rank: 1, name: "CodeNinja", score: 2500, avatarUrl: "https://placehold.co/100x100.png" },
    { rank: 2, name: "SyntaxSorcerer", score: 2350, avatarUrl: "https://placehold.co/100x100.png" },
    { rank: 3, name: "AlgoWhiz", score: 2200, avatarUrl: "https://placehold.co/100x100.png" },
    { rank: 4, name: "ScriptKitten", score: 2100, avatarUrl: "https://placehold.co/100x100.png" },
    { rank: 5, name: "BinaryBard", score: 1950, avatarUrl: "https://placehold.co/100x100.png" },
];

export const feedbackItems: FeedbackItem[] = [
    {
        id: 1,
        name: "Fatima Z.",
        message: "The AI Project Estimator is brilliant! It gave me a solid baseline for my budget in just a few seconds. Highly recommend this for anyone starting a new project.",
        type: "Testimonial",
        timestamp: "2 days ago",
    },
    {
        id: 2,
        name: "Anonymous",
        message: "It would be great if the Code Battle challenges had a way to see other users' solutions after you've submitted your own. It would be a great learning tool.",
        type: "Feature Request",
        timestamp: "5 days ago",
    },
    {
        id: 3,
        name: "Bilal A.",
        message: "Your blog post on multi-cloud strategy was incredibly insightful and well-written. It helped clarify a lot of complex concepts for my team.",
        type: "General Feedback",
        timestamp: "1 week ago",
    },
    {
        id: 4,
        name: "Anonymous",
        message: "The customer service is top-notch. I had a question about the team builder and received a detailed, helpful response within an hour.",
        type: "Testimonial",
        timestamp: "2 weeks ago",
    }
]

export const founderStory: FounderStoryItem[] = [
    {
        year: 2018,
        title: "The Idea",
        type: "idea",
        description: "Dr. Arslan Maverick, working as a freelance consultant, identifies a major gap in the market for agile and transparent IT partners for growing businesses."
    },
    {
        year: 2019,
        title: "BitEdge is Born",
        type: "launch",
        description: "With a small, passionate team of two, BitEdge Technologies is officially launched, operating out of a co-working space with a focus on custom software development."
    },
    {
        year: 2020,
        title: "First Major Client",
        type: "growth",
        description: "Landed our first enterprise-level client, a project that pushed our limits and proved our capability to deliver complex, mission-critical software."
    },
    {
        year: 2021,
        title: "Navigating the Pandemic",
        type: "challenge",
        description: "The global pandemic forces a shift to a fully remote model. We embraced the challenge, honing our remote collaboration processes and expanding our talent pool globally."
    },
    {
        year: 2022,
        title: "Expanding the Team",
        type: "team",
        description: "Our team grows to over 20 professionals across three continents, adding specialized expertise in cloud solutions and cybersecurity to our service offerings."
    },
    {
        year: 2024,
        title: "Innovating with AI",
        type: "growth",
        description: "Launched a dedicated AI & Automation service, helping clients leverage cutting-edge technology to drive efficiency and unlock new business value."
    }
];

export const ourProcess: ProcessStep[] = [
    {
        icon: <Search className="h-full w-full" />,
        title: "Discovery & Strategy",
        description: "We start by deeply understanding your vision, goals, and challenges. This phase is all about aligning on the project's 'why' and defining the roadmap for success.",
        deliverables: ["Project Brief & Scope Document", "Technical Feasibility Report", "High-level Roadmap & Milestones"]
    },
    {
        icon: <DraftingCompass className="h-full w-full" />,
        title: "UI/UX Design & Prototyping",
        description: "Our design team translates the strategy into intuitive and beautiful user interfaces. We create wireframes and interactive prototypes to give you a tangible feel for the final product early on.",
        deliverables: ["User Flow Diagrams", "Wireframes", "High-Fidelity Mockups", "Interactive Prototype"]
    },
    {
        icon: <Code className="h-full w-full" />,
        title: "Agile Development",
        description: "Working in two-week sprints, our development team brings the designs to life. We follow best practices to write clean, efficient, and scalable code, with regular demos to keep you in the loop.",
        deliverables: ["Working Software Increments", "Source Code & Documentation", "CI/CD Pipeline Setup"]
    },
    {
        icon: <TestTube className="h-full w-full" />,
        title: "Quality Assurance & Testing",
        description: "Rigorous testing is built into every stage of our process. We conduct comprehensive manual and automated tests to ensure your application is secure, performant, and bug-free.",
        deliverables: ["Test Plans & Cases", "Bug Reports", "User Acceptance Testing (UAT) Support"]
    },
    {
        icon: <Rocket className="h-full w-full" />,
        title: "Deployment & Launch",
        description: "We handle the entire deployment process, ensuring a smooth and seamless launch. Our team will manage the release, monitor the initial rollout, and ensure everything is stable.",
        deliverables: ["Production Environment Setup", "Successful Application Launch", "Post-launch Sanity Checks"]
    },
    {
        icon: <Scale className="h-full w-full" />,
        title: "Support & Scaling",
        description: "Our partnership doesn't end at launch. We offer ongoing support and maintenance packages to keep your application running smoothly, and we're here to help you scale as your business grows.",
        deliverables: ["Service Level Agreement (SLA)", "Performance Monitoring Reports", "Ongoing Feature Enhancements"]
    }
];

export const alumni: Alumnus[] = [
    {
        id: 1,
        name: "Ahmed Ali",
        roleAtBitEdge: "Senior Software Engineer (2019-2022)",
        currentRole: "Staff Engineer",
        currentCompany: "Google",
        companyLogoUrl: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        avatarUrl: "https://placehold.co/200x200.png",
        quote: "My time at BitEdge was pivotal. It's where I learned to tackle complex problems with a truly agile and collaborative mindset.",
        linkedinUrl: "#"
    },
    {
        id: 2,
        name: "Sobia Khan",
        roleAtBitEdge: "Lead UI/UX Designer (2020-2023)",
        currentRole: "Product Design Lead",
        currentCompany: "Microsoft",
        companyLogoUrl: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
        avatarUrl: "https://placehold.co/200x200.png",
        quote: "BitEdge gave me the creative freedom to lead high-impact projects and grow into a leadership role. The mentorship was invaluable.",
        linkedinUrl: "#"
    },
    {
        id: 3,
        name: "Imran Malik",
        roleAtBitEdge: "Cloud Engineer (2021-2023)",
        currentRole: "Founder & CTO",
        currentCompany: "ScaleUp.ai",
        companyLogoUrl: "https://placehold.co/150x50.png",
        avatarUrl: "https://placehold.co/200x200.png",
        quote: "I was inspired by the entrepreneurial spirit at BitEdge to start my own venture. The experience I gained was the perfect launchpad.",
        linkedinUrl: "#"
    },
    {
        id: 4,
        name: "Fatima Al-Jamil",
        roleAtBitEdge: "Cybersecurity Intern (2022)",
        currentRole: "Security Engineer",
        currentCompany: "Amazon",
        companyLogoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        avatarUrl: "https://placehold.co/200x200.png",
        quote: "My internship at BitEdge was a masterclass in real-world security challenges. It prepared me for a fast-paced career at a major tech company.",
        linkedinUrl: "#"
    }
];

export const memes: Meme[] = [
    {
        id: 1,
        title: "It works on my machine",
        imageUrl: "https://placehold.co/500x500.png",
        imageHint: "funny meme",
        submittedBy: "The Backend Team",
    },
    {
        id: 2,
        title: "Merging to main on Friday",
        imageUrl: "https://placehold.co/500x500.png",
        imageHint: "funny meme",
        submittedBy: "A Brave Soul",
    },
    {
        id: 3,
        title: "CSS is awesome",
        imageUrl: "https://placehold.co/500x500.png",
        imageHint: "funny meme",
        submittedBy: "The Frontend Team",
    },
    {
        id: 4,
        title: "This meeting could have been an email",
        imageUrl: "https://placehold.co/500x500.png",
        imageHint: "funny meme",
        submittedBy: "Everyone",
    },
    {
        id: 5,
        title: "Another JS Framework",
        imageUrl: "https://placehold.co/500x500.png",
        imageHint: "funny meme",
        submittedBy: "A Tired Developer",
    },
    {
        id: 6,
        title: "When the PM adds 'one more thing'",
        imageUrl: "https://placehold.co/500x500.png",
        imageHint: "funny meme",
        submittedBy: "The Dev Team",
    },
    {
        id: 7,
        title: "What the client wants vs. the budget",
        imageUrl: "https://placehold.co/500x500.png",
        imageHint: "funny meme",
        submittedBy: "Sales Department",
    },
     {
        id: 8,
        title: "Let's circle back on that",
        imageUrl: "https://placehold.co/500x500.png",
        imageHint: "funny meme",
        submittedBy: "Corporate Jargon Inc.",
    },
];


export const technologies: Technology[] = [
    { name: 'React & Next.js', icon: <Code className="h-8 w-8" />, description: 'For building performant, server-rendered web applications.' },
    { name: 'Node.js', icon: <Server className="h-8 w-8" />, description: 'Our choice for scalable and efficient backend services.' },
    { name: 'Google Cloud & Firebase', icon: <Cloud className="h-8 w-8" />, description: 'For robust, scalable, and serverless infrastructure.' },
    { name: 'React Native', icon: <Smartphone className="h-8 w-8" />, description: 'To build beautiful, cross-platform mobile applications.' },
    { name: 'Genkit & Gemini', icon: <BrainCircuit className="h-8 w-8" />, description: 'To power our AI-driven features and automation.' },
    { name: 'PostgreSQL', icon: <Database className="h-8 w-8" />, description: 'Our go-to for reliable and powerful relational databases.' },
];

export const industries: Industry[] = [
    { name: 'FinTech', icon: <Scale className="h-8 w-8" />, description: 'Secure and scalable financial applications.' },
    { name: 'Healthcare', icon: <Heart className="h-8 w-8" />, description: 'HIPAA-compliant software and data solutions.' },
    { name: 'E-commerce', icon: <ShoppingCart className="h-8 w-8" />, description: 'High-traffic, conversion-optimized retail platforms.' },
    { name: 'Manufacturing', icon: <Factory className="h-8 w-8" />, description: 'Process automation and supply chain optimization.' },
    { name: 'Education', icon: <University className="h-8 w-8" />, description: 'Engaging e-learning platforms and tools.' },
    { name: 'Non-profit', icon: <HelpingHand className="h-8 w-8" />, description: 'Technology to amplify social impact and outreach.' },
];

export const creditTiers: CreditTier[] = [
    {
        name: "Starter",
        price: 2500,
        description: "Perfect for small projects & maintenance.",
        features: [
            "20 Development Hours",
            "Standard Support",
            "Credits valid for 3 months"
        ],
        popular: false
    },
    {
        name: "Pro",
        price: 5000,
        description: "Ideal for medium-sized features.",
        features: [
            "45 Development Hours (5 free!)",
            "Priority Support",
            "Access to a Project Manager",
            "Credits valid for 6 months"
        ],
        popular: true
    },
    {
        name: "Business",
        price: 10000,
        description: "Best value for ongoing development.",
        features: [
            "100 Development Hours (10 free!)",
            "Dedicated Support Channel",
            "Bi-weekly Strategy Calls",
            "Credits valid for 12 months"
        ],
        popular: false
    }
];

export const creditFaqs: FAQ[] = [
    {
        question: "What can I use credits for?",
        answer: "Credits can be used for any of our services, including custom development, UI/UX design, cloud consulting, and maintenance tasks. One credit is equivalent to one hour of work from our team."
    },
    {
        question: "How do I track my credit usage?",
        answer: "Once you purchase a credit package, you will get access to a client portal where you can see your remaining credit balance, view detailed usage reports, and approve new work items."
    },
    {
        question: "Do credits expire?",
        answer: "Yes, credits have an expiration period depending on the package you purchase. The 'Starter' package credits are valid for 3 months, 'Pro' for 6 months, and 'Business' for 12 months."
    },
    {
        question: "Can I top up my credits?",
        answer: "Absolutely. You can purchase additional credit packages at any time. Many of our clients maintain a credit balance to ensure development work can begin immediately without contract or payment delays."
    }
];

    

    


