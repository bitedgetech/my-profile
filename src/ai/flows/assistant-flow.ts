
'use server';
/**
 * @fileOverview A conversational AI assistant for the BitEdge Technologies website.
 *
 * - chat - A function that handles the conversational chat with the assistant.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { services, projects, blogPosts } from '@/lib/data';

// //////////////////////////////////////////////////////////////////////////////
// Tool Definitions
// //////////////////////////////////////////////////////////////////////////////

const getServices = ai.defineTool(
  {
    name: 'getServices',
    description: 'Get a list of services offered by BitEdge Technologies.',
    outputSchema: z.any(),
  },
  async () => services.map(s => ({title: s.title, description: s.shortDescription}))
);

const getProjects = ai.defineTool(
  {
    name: 'getProjects',
    description: 'Get a list of featured projects from the BitEdge Technologies portfolio.',
    inputSchema: z.object({
        category: z.string().optional().describe('Filter projects by category (e.g., "Custom Software", "Cloud Solutions").'),
    }),
    outputSchema: z.any(),
  },
  async ({category}) => {
    let filteredProjects = projects;
    if (category) {
        filteredProjects = projects.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
    return filteredProjects.map(p => ({title: p.title, category: p.category, description: p.description}));
  }
);

const getBlogPosts = ai.defineTool(
  {
    name: 'getBlogPosts',
    description: 'Get a list of recent blog posts from the BitEdge Insights blog. Use the content of the posts to answer specific questions about them.',
    inputSchema: z.object({
        category: z.string().optional().describe('Filter blog posts by category (e.g., "Cybersecurity", "AI & Automation").'),
        title: z.string().optional().describe('Get a specific blog post by its title.'),
    }),
    outputSchema: z.any(),
  },
  async ({category, title}) => {
    let filteredPosts = blogPosts;
    if (category) {
        filteredPosts = blogPosts.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
    if (title) {
        filteredPosts = filteredPosts.filter(p => p.title.toLowerCase().includes(title.toLowerCase()));
    }
    return filteredPosts.map(p => ({title: p.title, category: p.category, author: p.author, content: p.content}));
  }
);


// //////////////////////////////////////////////////////////////////////////////
// Prompt Definition
// //////////////////////////////////////////////////////////////////////////////

const contentPartSchema = z.union([
  z.object({ text: z.string() }),
  z.object({
    toolRequest: z.object({
      name: z.string(),
      input: z.any(),
    }),
  }),
  z.object({
    toolResponse: z.object({
      name: z.string(),
      output: z.any(),
    }),
  }),
]);


const ChatHistorySchema = z.array(z.object({
    role: z.enum(['user', 'model', 'tool']),
    content: z.preprocess((content) => {
        if (typeof content === 'string') {
          return [{ text: content }];
        }
        return content;
    }, z.array(contentPartSchema)),
}));


const assistantPrompt = ai.definePrompt({
  name: 'assistantPrompt',
  tools: [getServices, getProjects, getBlogPosts],
  messages: [{
    role: 'system',
    content: `You are a friendly and helpful AI assistant for BitEdge Technologies, a cutting-edge IT services company.
Your goal is to assist website visitors by answering their questions, providing information about the company, and guiding them to relevant parts of the website.

- Be conversational and approachable.
- Use the available tools to answer questions about services, projects, and blog posts.
- When asked to explain a blog post, use the getBlogPosts tool to retrieve the content and summarize it in simple terms.
- If asked about something you don't know, be honest and suggest they contact the company directly for more information.
- You cannot book appointments yet, but you can guide users to the contact page to get in touch.
- Keep your answers concise and to the point.
`
  }],
});

// //////////////////////////////////////////////////////////////////////////////
// Flow Definition
// //////////////////////////////////////////////////////////////////////////////

export type ChatHistory = z.infer<typeof ChatHistorySchema>;

const ChatInputSchema = z.object({
  history: ChatHistorySchema,
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  response: z.string(),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;


export async function chat(input: ChatInput): Promise<ChatOutput> {
  const llmResponse = await assistantPrompt({
    history: input.history,
  });
  return { response: llmResponse.text };
}
