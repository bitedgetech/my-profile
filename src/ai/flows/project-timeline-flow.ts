
'use server';
/**
 * @fileOverview A project timeline generation AI flow.
 *
 * - generateTimeline - A function that handles the project timeline generation process.
 * - ProjectTimelineInput - The input type for the generateTimeline function.
 * - ProjectTimelineOutput - The return type for the generateTimeline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectTimelineInputSchema = z.object({
  projectDescription: z.string().describe('A detailed description of the project, including its goals, key features, and target audience.'),
  platform: z.string().describe('The target platform for the project (e.g., Web, Mobile, Both).'),
  featureComplexity: z.enum(['low', 'medium', 'high']).describe('The overall complexity of the desired features.'),
});
export type ProjectTimelineInput = z.infer<typeof ProjectTimelineInputSchema>;

const PhaseSchema = z.object({
    phaseName: z.string().describe("The name of the project phase (e.g., 'Discovery & Planning', 'UI/UX Design', 'Frontend Development')."),
    duration: z.string().describe("The estimated duration for this phase (e.g., '1-2 weeks', '3-4 weeks')."),
    description: z.string().describe("A brief description of the key activities and deliverables for this phase."),
});

const ProjectTimelineOutputSchema = z.object({
    totalDuration: z.string().describe("The total estimated duration for the entire project."),
    phases: z.array(PhaseSchema).describe("A list of the project phases in chronological order."),
});
export type ProjectTimelineOutput = z.infer<typeof ProjectTimelineOutputSchema>;

export async function generateTimeline(input: ProjectTimelineInput): Promise<ProjectTimelineOutput> {
  return projectTimelineFlow(input);
}

const prompt = ai.definePrompt({
  name: 'projectTimelinePrompt',
  input: {schema: ProjectTimelineInputSchema},
  output: {schema: ProjectTimelineOutputSchema},
  prompt: `You are a senior project manager at BitEdge Technologies. Your task is to generate a high-level project timeline based on a client's requirements.

The timeline should be broken down into logical phases (e.g., Discovery, Design, Development, Testing, Deployment). For each phase, provide an estimated duration and a brief description of the key activities.

Client Requirements:
- Project Description: {{{projectDescription}}}
- Platform: {{{platform}}}
- Feature Complexity: {{{featureComplexity}}}

Generate a realistic timeline. The output should be structured clearly with a total estimated duration and an array of phases. Be professional and concise. The durations should be in weeks (e.g., "1 week", "2-3 weeks").
`,
});

const projectTimelineFlow = ai.defineFlow(
  {
    name: 'projectTimelineFlow',
    inputSchema: ProjectTimelineInputSchema,
    outputSchema: ProjectTimelineOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
