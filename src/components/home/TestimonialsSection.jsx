import { useInView } from 'react-intersection-observer';
import { clsx } from 'clsx';

const testimonials = [
  {
    id: 1,
    author: 'Charles-Hubert',
    content: 'Superbe villa au pied du Massif de L\'Esterel. Parfait pour des vacances au calme en famille (nous étions 7 adultes). Elle est très bien située avec des petits commerces à 5 minutes à pied et de belles plages facilement accessibles en voiture. La villa jouit d\'une belle vue sur les roches rouges de l\'Esterel et il n\'y a pas de vis-à-vis même si celle-ci est située dans une zone résidentielle. La piscine, de taille correcte, et le jardin soigneusement conçu et entretenu nous ont permis de passer d\'agréables moments [...]',
    source: 'AirBnB'
  },
  {
    id: 2,
    author: 'Valérie',
    content: 'Un petit paradis : Tout est réuni pour d\'excellentes vacances. L\'accueil du propriétaire, le cadre, les environs avec des commerces proches, la piscine et la proximité de la plage. Un Superbe séjour',
    source: 'Abritel'
  },
  {
    id: 3,
    author: 'Alberto',
    content: 'A wonderful place, definitely this is the place',
    source: 'AirBnB'
  },
  {
    id: 4,
    author: 'Suzanne',
    content: 'Very nice house in a quiet residential area - superb pool and manicured gardens!',
    source: 'Booking'
  }
];

export function TestimonialsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12">
          Ce Que Disent Nos Clients
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={clsx(
                'transform transition-all duration-1000 bg-ocre p-8 rounded-lg shadow-md relative',
                inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
                {
                  'delay-200': index === 1,
                  'delay-300': index === 2,
                  'delay-400': index === 3
                }
              )}
            >
              <div className="space-y-4">
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-light">{testimonial.author}</span>
                  <span className="text-gray-500 text-sm">{testimonial.source}</span>
                </div>
              </div>
              {/* Bulle d'expression */}
 <div className="absolute bottom-0 left-1 w-0 h-0 border-l-20 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-ocre transform translate-y-1"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}