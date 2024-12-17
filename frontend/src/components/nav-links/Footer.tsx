import { Facebook, Instagram,Youtube,Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/mukt.world', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/people/Mukt/61568525823660/?rdid=TAxueYWF4J03T8XU&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1D1vV5nmo9%2F', label: 'Facebook' },
    { icon: Youtube, href: 'https://www.youtube.com/@MuktWorld', label: 'Youtube' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/muktworld/', label: 'Twitter' },

  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="font-secondary bg-gradient-to-b from-gray-900 to-black  border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">mukt</h2>
            <p className="text-gray-400">
              Bringing your vision to life through exceptional media production.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-secondary transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-primary ont-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="text-gray-400 hover:text-secondary transition-colors duration-300"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-primary ont-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {['Film Making','Videography', 'Photography', 'Graphic Design', 'Post Production','Advertisement', 'Events','Social Media Content'].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-secondary transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-primary text-white font-semibold mb-4 pt-1">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-secondary" />
                <a href="mailto:contact@mukt.com" className="text-gray-400 hover:text-secondary transition-colors duration-300">
                  mukt.wd@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-secondary" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-secondary transition-colors duration-300">
                  +91 94089 09108
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 ">
            <p className="text-gray-500 text-sm ">
              © {new Date().getFullYear()} Mukt Media. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;