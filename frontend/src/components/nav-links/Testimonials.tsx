const testimonials = [
  {
    name: 'Saurav Thakhur',
    // role: 'Marketing Director',
    company: 'Tech Innovations Inc.',
    // image: 'https://i.pinimg.com/564x/39/61/bf/3961bfca49ba65cbbb2df3faebe6f148.jpg',
    content: 'Their creative vision and technical expertise transformed our brand message into a compelling visual story. Exceptional work!'
  },
  {
    name: 'Rohan Patel',
    // role: 'Event Coordinator',
    company: 'Global Events',
    // image: 'https://i.pinimg.com/564x/00/f3/ba/00f3baed741806ab1cc74e094b30824b.jpg',
    content: 'The teams attention to detail and professional approach made our event coverage absolutely outstanding.'
  },
  {
    name: 'Puja Vyas',
    // role: '',
    company: 'Artistry Studios',
    // image: 'https://i.pinimg.com/564x/ba/64/12/ba641296ceceeaf7bd880c27b77df973.jpg',
    content: 'Working with them was a game-changer for our social media presence. The content quality is unmatched!'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="font-secondarypy-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-primary text-4xl font-bold text-white mb-4">Client Testimonials</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div> */}
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                {/* <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                /> */}
                <div>
                  <h4 className="font-primary text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-secondary text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}