"use server";

import { z } from "zod";

const newsletterFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export type NewsletterFormState = {
  message: string;
  success: boolean;
};

export async function submitNewsletter(
  prevState: NewsletterFormState,
  formData: FormData
): Promise<NewsletterFormState> {
  const validatedFields = newsletterFormSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      message: "Please enter a valid email address.",
      success: false,
    };
  }
  
  // Here you would typically integrate with an email marketing service like Mailchimp or SendGrid.
  console.log("Newsletter subscription for:", validatedFields.data.email);

  return {
    message: "Thank you for subscribing! Please check your inbox to confirm.",
    success: true,
  };
}
