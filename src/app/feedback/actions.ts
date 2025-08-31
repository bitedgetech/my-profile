
"use server";

import { z } from "zod";

const feedbackFormSchema = z.object({
  name: z.string().optional(),
  type: z.enum(["Testimonial", "Feature Request", "General Feedback"]),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  honeypot: z.string().optional(),
});

export type FeedbackFormState = {
  message: string;
  success: boolean;
  whatsappLink?: string;
};

export async function submitFeedbackForm(
  prevState: FeedbackFormState,
  formData: FormData
): Promise<FeedbackFormState> {
  const validatedFields = feedbackFormSchema.safeParse({
    name: formData.get("name") || "Anonymous",
    type: formData.get("type"),
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
  
  const { name, type, message } = validatedFields.data;
  const whatsappNumber = "923106450020";
  const whatsappMessage = `
*New Feedback Received*

*From:* ${name}
*Type:* ${type}

*Message:*
${message}
  `;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return {
    message: "Redirecting to WhatsApp to send your feedback...",
    success: true,
    whatsappLink,
  };
}
