
"use server";

import { z } from "zod";

const grantApplicationSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  projectTitle: z.string().min(5, { message: "Project title must be at least 5 characters." }),
  projectUrl: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal('')),
  pitch: z.string().min(50, { message: "Your pitch must be at least 50 characters." }),
  honeypot: z.string().optional(),
});

export type GrantApplicationFormState = {
  message: string;
  success: boolean;
  whatsappLink?: string;
};

export async function submitGrantApplication(
  prevState: GrantApplicationFormState,
  formData: FormData
): Promise<GrantApplicationFormState> {
  const validatedFields = grantApplicationSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    projectTitle: formData.get("projectTitle"),
    projectUrl: formData.get("projectUrl"),
    pitch: formData.get("pitch"),
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
  
  const { name, email, projectTitle, projectUrl, pitch } = validatedFields.data;
  const whatsappNumber = "923106450020";
  const whatsappMessage = `
*New Grant Application*

*Name / Team:* ${name}
*Email:* ${email}
*Project Title:* ${projectTitle}
*Project URL:* ${projectUrl || 'N/A'}

*Pitch:*
${pitch}
  `;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return {
    message: "Redirecting to WhatsApp to send your application...",
    success: true,
    whatsappLink,
  };
}
