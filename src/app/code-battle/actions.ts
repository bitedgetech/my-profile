
"use server";

import { z } from "zod";

const codeSubmissionSchema = z.object({
  challengeId: z.string(),
  code: z.string().min(10, { message: "Your code seems a bit short!" }),
  language: z.string(),
  honeypot: z.string().optional(),
});

export type CodeSubmissionState = {
  message: string;
  success: boolean;
  whatsappLink?: string;
};

export async function submitCode(
  prevState: CodeSubmissionState,
  formData: FormData
): Promise<CodeSubmissionState> {
  const validatedFields = codeSubmissionSchema.safeParse({
    challengeId: formData.get("challengeId"),
    code: formData.get("code"),
    language: formData.get("language"),
    honeypot: formData.get("honeypot"),
  });

  if (!validatedFields.success) {
    const errorMessages = validatedFields.error.issues.map(issue => issue.message).join(' ');
    return {
      message: `Invalid submission: ${errorMessages}`,
      success: false,
    };
  }
  
  if (validatedFields.data.honeypot) {
    return { message: "Spam detected.", success: false };
  }
  
  const { challengeId, code, language } = validatedFields.data;
  const whatsappNumber = "923106450020";
  const whatsappMessage = `
*New Code Battle Submission*

*Challenge ID:* ${challengeId}
*Language:* ${language}

*Code:*
\`\`\`
${code}
\`\`\`
  `;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


  return {
    message: "Redirecting to WhatsApp to send your solution...",
    success: true,
    whatsappLink,
  };
}
