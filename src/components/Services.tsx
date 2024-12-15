import { motion } from 'framer-motion';
import { Video, Camera, Airplay, Film, Share2, Tv, Palette, Edit } from 'lucide-react';

const services = [
  {
    icon: <Film className="w-8 h-8" />,
    title: 'Film Making',
    description: 'Crafting visually stunning and creative film productions.',
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: 'Videography',
    description: 'Capturing professional, high-quality videos for diverse needs.',
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: 'Photography',
    description: 'Delivering striking and memorable photographic content.',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Graphic Design',
    description: 'Designing compelling visuals to communicate your brand message.',
  },
  {
    icon: <Edit className="w-8 h-8" />,
    title: 'Post-production',
    description: 'Polishing and refining media content with expert editing.',
  },
  {
    icon: <Airplay className="w-8 h-8" />,
    title: 'Advertisement',
    description: 'Creating captivating ad campaigns that make an impact.',
  },
  {
    icon: <Tv className="w-8 h-8" />,
    title: 'Branding',
    description: 'Developing a strong, cohesive identity to elevate your brand.',
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: 'Social Media Content',
    description: 'Producing engaging and shareable content tailored for social platforms.',
  },
];


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Services() {
  return (
    <section id="services" className="font-secondary py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer a comprehensive range of media production services to bring your vision to life
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 hover:bg-secondary transition-all duration-300"
            >
              <div className="font-primary text-secondary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}