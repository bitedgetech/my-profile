
'use server';
/**
 * @fileOverview A project estimation AI flow.
 *
 * - estimateProject - A function that handles the project estimation process.
 * - ProjectEstimationInput - The input type for the estimateProject function.
 * - ProjectEstimationOutput - The return type for the estimateProject function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectEstimationInputSchema = z.object({
  platform: z.string().describe('The target platform for the project (e.g., Web, Mobile, Both).'),
  features: z.array(z.string()).describe('A list of desired features for the project.'),
  timeline: z.string().describe('The desired timeline for project completion (e.g., 3 months, 6 months, flexible).'),
  budget: z.string().describe('The estimated budget for the project (e.g., <$10k, $10k-$50k, >$50k).'),
});
export type ProjectEstimationInput = z.infer<typeof ProjectEstimationInputSchema>;

const ProjectEstimationOutputSchema = z.object({
  estimatedTime: z.string().describe('A rough estimate of the project duration, e.g., "3-4 months".'),
  costRange: z.string().describe('A rough estimate of the project cost, e.g., "$25,000 - $40,000".'),
  suggestedStack: z.array(z.string()).describe('A list of suggested technologies for the project, e.g., ["Next.js", "React Native", "Firebase"].'),
  summary: z.string().describe('A brief summary of the project scope and the rationale behind the estimate.'),
});
export type ProjectEstimationOutput = z.infer<typeof ProjectEstimationOutputSchema>;

export async function estimateProject(input: ProjectEstimationInput): Promise<ProjectEstimationOutput> {
  return projectEstimatorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'projectEstimatorPrompt',
  input: {schema: ProjectEstimationInputSchema},
  output: {schema: ProjectEstimationOutputSchema},
  prompt: `You are an expert software project manager at a digital agency called BitEdge Technologies.
A potential client has provided the following requirements for a new project.
Your task is to provide a rough, non-binding estimate based on these details.

Client Requirements:
- Platform: {{{platform}}}
- Desired Features: {{#each features}}- {{{this}}} {{/each}}
- Desired Timeline: {{{timeline}}}
- Estimated Budget: {{{budget}}}

Based on this, generate a project estimate. The cost should be in USD.
Be realistic but optimistic. The goal is to provide a helpful preliminary estimate that encourages the client to request a more detailed, custom quote.
The summary should be a short paragraph.
`,
});

const projectEstimatorFlow = ai.defineFlow(
  {
    name: 'projectEstimatorFlow',
    inputSchema: ProjectEstimationInputSchema,
    outputSchema: ProjectEstimationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
