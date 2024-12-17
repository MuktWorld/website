import { Mail, Phone } from 'lucide-react';
import ContactForm from '../UI/ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="font-secondary py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-primary text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to start your next project? Contact us for a free consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary rounded-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-primarytext-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-400">+91 94089 09108</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary rounded-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-primary text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-400">mukt.wd@gmail.com</p>
              </div>
            </div>

            {/* <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary rounded-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-400">123 Creative Street, Digital City, DC 12345</p>
              </div>
            </div> */}
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}