
import { Cookie } from "lucide-react";

export default function CookiePolicyPage() {
  return (
    <div className="bg-background">
      <section className="bg-card py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
            <Cookie className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-6xl font-bold font-headline">Cookie Policy</h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg dark:prose-invert prose-h2:font-headline prose-h2:text-foreground prose-p:text-muted-foreground prose-a:text-primary">
            
            <h2>1. What Are Cookies?</h2>
            <p>
                Cookies are small text files stored on your device (computer, tablet, mobile phone) when you are on the internet, including on our websites. They are not harmful and do not contain any personal information such as your home address, date of birth or credit card details.
            </p>

            <h2>2. How We Use Cookies</h2>
            <p>
                We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.
            </p>
            <ul>
                <li>
                    <strong>Essential Cookies:</strong> These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.
                </li>
                <li>
                    <strong>Performance and Analytics Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
                </li>
                 <li>
                    <strong>Functionality Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                </li>
            </ul>

            <h2>3. Managing Cookies</h2>
            <p>
                You can control and/or delete cookies as you wish – for details, see aboutcookies.org. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
            </p>
            
            <h2>4. Changes to This Policy</h2>
            <p>
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
            </p>

            <h2>5. Contact Us</h2>
            <p>
                If you have questions or comments about this Cookie Policy, please contact us at: <a href="mailto:privacy@bitedgetechnologies.com">privacy@bitedgetechnologies.com</a>.
            </p>

        </div>
      </section>
    </div>
  );
}
