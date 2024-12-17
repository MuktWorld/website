import { useRef, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import emailConfig from "../../config/emailConfig.ts";

const ContactForm: React.FC = () => {
  const [error, setError] = useState<string>('');
  const form = useRef<HTMLFormElement>(null);

  const validatePhoneNumber = (phoneValue: string): boolean => {
    // Check if the phone number contains only digits and is exactly 10 digits long
    if (!/^\d{10}$/.test(phoneValue)) {
      setError("Phone number must be exactly 10 digits.");
      return false;
    }
    setError(""); // Clear the error if valid
    return true;
  };

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    const formData = e.target as HTMLFormElement;
    const phoneValue = (formData.elements.namedItem("contact_number") as HTMLInputElement).value;

    // Validate the phone number before proceeding
    if (!validatePhoneNumber(phoneValue)) return;

    // Proceed with email sending only if there is no error
    if (form.current) {
      emailjs
        .sendForm(
          emailConfig.emailJsServiceId,
          emailConfig.emailJsTemplateId,
          form.current,
          emailConfig.emailJsPublicKey
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            alert("Message sent successfully!");
          },
          (error) => {
            console.log("FAILED...", error.text);
            alert("Failed to send message. Please try again.");
          }
        );
    }
  };

  return (
    <form ref={form} className="space-y-6" onSubmit={sendEmail}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sebg-secondary"
          required
        />
        <input
          type="text"
          id="contact_number"
          name="contact_number"
          placeholder="Contact number"
          maxLength={10} // Enforce max 10 digits
          className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sebg-secondary"
          required
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="email"
        name="from_email"
        placeholder="Your Email"
        className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sebg-secondary"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={6}
        className="w-full px-4 py-3 bg-gray-900 text-white resize-none rounded-lg focus:outline-none focus:ring-2 focus:ring-sebg-secondary"
        required
      ></textarea>
      <button
        type="submit"
        className="w-full px-8 py-4 bg-secondary hover:bg- text-white rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105"
      >
        <Send className="w-5 h-5" />
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
