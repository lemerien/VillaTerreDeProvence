import { useInView } from 'react-intersection-observer';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';


export function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-ocre text-black" ref={ref}> {/* Fond ocre et texte noir */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className={clsx(
              'transform transition-all duration-1000',
              inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            )}
          >
            <img
              src="Welcome/1 - The Villa South.jpg"
              alt="Villa Terre de Provence"
              className="w-full h-[600px] object-cover"
            />
          </div>
          <div
            className={clsx(
              'transform transition-all duration-1000 delay-200 space-y-6',
              inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            )}
          >
            <h2 className="text-xl md:text-xl font-light">
              Une Villa moderne, dans le style provençal avec Piscine chauffée et Climatisation
            </h2>
            
            <p className="text-gray-600"> {/* Texte noir */}
              La Villa dispose d'une belle terrasse exposition sud avec un porche donnant sur une grande piscine 
              aux eaux turquoise ainsi que sur un jardin paysagé entouré de bambous et de végétation exotique.
            </p>
            
            <p className="text-gray-600"> {/* Texte noir */}
              La résidence est calme et sécurisée. La vue est dégagée. Elle se situe en zone résidentielle 
              et boisée, à proximité des golfs.
            </p>
            
            <p className="text-gray-600"> {/* Texte noir */}
              Une sortie privée de la résidence donne directement accès au massif de l'Estérel, pour les 
              randonnées et le VTT.
            </p>
            
            <p className="text-gray-600"> {/* Texte noir */}
              Bienvenue sur notre nouveau site et dans ce décor de rêves au climat enchanteur.
            </p>
            
            <div className="pt-4">

<button
  className="border border-green-500 px-8 py-3 text-gray-600 hover:bg-green-700 transition-colors flex justify-center items-center mx-auto"
>
  <Link to="/availability" className="text-gray-600 hover:text-white">
    Voir disponibilités
  </Link>
</button>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
