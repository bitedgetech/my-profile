
"use server";

import { z } from "zod";

const founderFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  company: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address." }),
  question: z.string().min(10, { message: "Question must be at least 10 characters." }),
  honeypot: z.string().optional(),
});

export type FounderFormState = {
  message: string;
  success: boolean;
  whatsappLink?: string;
};

export async function submitFounderForm(
  prevState: FounderFormState,
  formData: FormData
): Promise<FounderFormState> {
  const validatedFields = founderFormSchema.safeParse({
    name: formData.get("name"),
    company: formData.get("company"),
    email: formData.get("email"),
    question: formData.get("question"),
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

  const { name, company, email, question } = validatedFields.data;
  const whatsappNumber = "923106450020";
  const whatsappMessage = `
*New Question for the Founder*

*Name:* ${name}
*Company:* ${company || 'N/A'}
*Email:* ${email}

*Question:*
${question}
  `;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return {
    message: "Redirecting to WhatsApp to send your question...",
    success: true,
    whatsappLink,
  };
}
