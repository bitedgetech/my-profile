
"use server";

import { z } from "zod";

const teamBuilderFormSchema = z.object({
  skills: z.preprocess((val) => (Array.isArray(val) ? val : [val]), z.array(z.string()).min(1, { message: 'You have to select at least one skill.' })),
  availability: z.enum(['full-time', 'part-time', 'hourly']),
  budget: z.string(),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  description: z.string().min(10, { message: "Project description must be at least 10 characters." }),
  honeypot: z.string().optional(),
});

export type TeamBuilderFormState = {
  message: string;
  success: boolean;
  whatsappLink?: string;
};

export async function submitTeamBuilderForm(
  prevState: TeamBuilderFormState,
  formData: FormData
): Promise<TeamBuilderFormState> {

  const validatedFields = teamBuilderFormSchema.safeParse({
    skills: formData.getAll("skills"),
    availability: formData.get("availability"),
    budget: formData.get("budget"),
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    description: formData.get("description"),
    honeypot: formData.get("honeypot"),
  });

  if (!validatedFields.success) {
    const errorMessages = validatedFields.error.issues.map(issue => issue.message).join(' ');
    return {
      message: `Please correct the following errors: ${errorMessages}`,
      success: false,
    };
  }

  if (validatedFields.data.honeypot) {
    return { message: "Spam detected.", success: false };
  }
  
  const { name, email, company, skills, availability, budget, description } = validatedFields.data;
  const whatsappNumber = "923106450020";
  const whatsappMessage = `
*New Team Builder Proposal*

*Name:* ${name}
*Email:* ${email}
*Company:* ${company || 'N/A'}

*Required Skills:*
${skills.map(s => `- ${s}`).join('\n')}

*Availability:* ${availability}
*Budget:* ${budget}

*Project Description:*
${description}
  `;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return {
    message: "Redirecting to WhatsApp to send your proposal...",
    success: true,
    whatsappLink,
  };
}
