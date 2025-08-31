
"use client";

import { useFormStatus } from "react-dom";
import { useActionState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { submitNewsletter, type NewsletterFormState } from "@/app/newsletter/actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="icon" disabled={pending} aria-label="Subscribe">
        {pending ? <Loader2 className="animate-spin" /> : <ArrowRight />}
    </Button>
  );
}

export function NewsletterForm() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const initialState: NewsletterFormState = { message: "", success: false };
  const [state, formAction] = useActionState(submitNewsletter, initialState);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Success!" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
      if (state.success) {
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="flex w-full max-w-sm items-center space-x-2">
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        required
      />
      <SubmitButton />
    </form>
  );
}
