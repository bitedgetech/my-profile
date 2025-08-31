
import { FileText } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="bg-background">
      <section className="bg-card py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
            <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-6xl font-bold font-headline">Terms of Service</h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg dark:prose-invert prose-h2:font-headline prose-h2:text-foreground prose-p:text-muted-foreground prose-a:text-primary">
            
            <h2>1. Agreement to Terms</h2>
            <p>
                By using our services, you agree to be bound by these Terms of Service. If you do not agree to these Terms, do not use the services. We may modify the Terms at any time, in our sole discretion. If we do so, we’ll let you know either by posting the modified Terms on the Site or through other communications.
            </p>

            <h2>2. Use of Services</h2>
            <p>
                You may use the Services only if you are not barred from using them under applicable law. You agree not to use the Services for any illegal or unauthorized purpose. You agree to comply with all laws, rules, and regulations applicable to your use of the Services.
            </p>
           
            <h2>3. Intellectual Property</h2>
            <p>
                The Site and its original content, features, and functionality are owned by BitEdge Technologies and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>

            <h2>4. Termination</h2>
            <p>
                We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
                In no event shall BitEdge Technologies, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>

            <h2>6. Governing Law</h2>
            <p>
               These Terms shall be governed and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions.
            </p>

            <h2>7. Contact Us</h2>
            <p>
                If you have any questions about these Terms, please contact us at: <a href="mailto:legal@bitedgetechnologies.com">legal@bitedgetechnologies.com</a>.
            </p>

        </div>
      </section>
    </div>
  );
}
