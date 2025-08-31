
'use server';
/**
 * @fileOverview An AI flow for validating startup ideas.
 *
 * - validateIdea - A function that handles the idea validation process.
 * - IdeaValidatorInput - The input type for the validateIdea function.
 * - IdeaValidatorOutput - The return type for the validateIdea function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IdeaValidatorInputSchema = z.object({
  ideaDescription: z.string().min(50, "Please provide a more detailed description of your idea (at least 50 characters).").describe('A detailed description of the startup or app idea.'),
});
export type IdeaValidatorInput = z.infer<typeof IdeaValidatorInputSchema>;

const IdeaValidatorOutputSchema = z.object({
  feasibilityScore: z.number().min(1).max(10).describe('A score from 1-10 indicating the idea\'s feasibility.'),
  feasibilityAnalysis: z.string().describe('A brief analysis explaining the feasibility score, including potential strengths and challenges.'),
  suggestedStack: z.array(z.string()).describe('A list of suggested technologies for building the MVP, e.g., ["Next.js", "Firebase", "Stripe"].'),
  estimatedMvpCost: z.string().describe('A rough, non-binding estimate of the Minimum Viable Product (MVP) cost in USD, e.g., "$15,000 - $30,000".'),
  nextSteps: z.string().describe('A few actionable next steps the user should consider.'),
});
export type IdeaValidatorOutput = z.infer<typeof IdeaValidatorOutputSchema>;

export async function validateIdea(input: IdeaValidatorInput): Promise<IdeaValidatorOutput> {
  return ideaValidatorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'ideaValidatorPrompt',
  input: {schema: IdeaValidatorInputSchema},
  output: {schema: IdeaValidatorOutputSchema},
  prompt: `You are an experienced startup advisor and CTO at BitEdge Technologies. A potential founder has submitted their idea for validation.
Your task is to provide a realistic, constructive, and encouraging analysis.

**Idea Description:**
"{{{ideaDescription}}}"

**Your Analysis Should Include:**

1.  **Feasibility Score (1-10):** Give a score based on technical difficulty, market potential, and potential competition. A higher score means more feasible.
2.  **Feasibility Analysis:** Briefly justify your score. Mention 1-2 potential strengths and 1-2 potential hurdles or questions they should consider.
3.  **Suggested Tech Stack:** Recommend a modern, practical tech stack for building the MVP. Favor technologies like Next.js, Firebase, React Native, and other common, scalable tools.
4.  **Estimated MVP Cost:** Provide a rough, non-binding cost range in USD for an initial MVP. Base this on the complexity implied by the idea.
5.  **Actionable Next Steps:** Suggest 2-3 concrete next steps. This should guide them towards refining their idea and potentially working with a company like BitEdge. Examples: "Define your target user persona," or "Create a simple landing page to gauge interest."

Your tone should be professional, knowledgeable, and supportive. The goal is to provide genuine value and position BitEdge as a capable partner.
`,
});

const ideaValidatorFlow = ai.defineFlow(
  {
    name: 'ideaValidatorFlow',
    inputSchema: IdeaValidatorInputSchema,
    outputSchema: IdeaValidatorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
