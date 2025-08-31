
"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  honeypot: z.string().optional(),
});

export type FormState = {
  message: string;
  success: boolean;
  whatsappLink?: string;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
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
  
  const { name, email, subject, message } = validatedFields.data;
  const whatsappNumber = "923106450020";
  const whatsappMessage = `
*New Contact Form Submission*

*Name:* ${name}
*Email:* ${email}
*Subject:* ${subject}
*Message:*
${message}
  `;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return {
    message: "Redirecting to WhatsApp to send your message...",
    success: true,
    whatsappLink,
  };
}
