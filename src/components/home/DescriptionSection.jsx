import { useInView } from 'react-intersection-observer';
import { clsx } from 'clsx';

export function DescriptionSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-2 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto relative bg-ocre p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row">
            {/* Colonne gauche avec deux blocs de texte */}
            <div className="flex-1 pr-4 mb-6 md:mb-0">
              <div
                className={clsx(
                  'transform transition-all duration-1000',
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                )}
              >
                <h2 className="text-xl md:text-2xl font-light mb-4 text-gray-800 shadow-md">
                  DES COULEURS À COUPER LE SOUFFLE...
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Un paysage unique qui passe progressivement de la mer à la montagne avec une palette de couleurs tranchées, qui a attiré les peintres impressionnistes les plus réputés.
                  Si les eaux limpides de la mer contrastent avec les ocres de la côte, le vert des pinèdes se marie avec le bleu profond du ciel de Provence.
                </p>
              </div>
              <div
                className={clsx(
                  'transform transition-all duration-1000 delay-200',
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                )}
              >
                <h2 className="text-xl md:text-2xl font-light mb-4 text-gray-800 shadow-md">
                  DES VACANCES INOUBLIABLES...
                </h2>
                <p className="text-lg text-gray-600">
                  Les plages de sable fin de Saint-Raphaël et Fréjus sont toutes proches, à moins que vous ne préfériez le cadre inoubliable de la baie d'Agay, accessible également à vélo, pour vous délasser dans les eaux chaudes et turquoise de nos rivages.
                </p>
              </div>
            </div>

            {/* Colonne droite avec un bloc de texte */}
            <div className="flex-1 pl-4">
              {/* Image insérée ici */}
              <div className="mb-6 flex justify-center">
                <img
                  src="Galleries\Photo Baie d'Agay bottom page.jpg"
                  alt="Description"
                  className="w-full max-w-md h-auto object-cover rounded-shadow-image"
                />
              </div>
              <div
                className={clsx(
                  'transform transition-all duration-1000 delay-400',
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                )}
              >
                <h2 className="text-xl md:text-2xl font-light mb-4 text-gray-800 shadow-md">
                  UN PETIT COIN DE PARADIS...
                </h2>
                <p className="text-lg text-gray-600">
                  Si vous appréciez les randonnées dans les somptueux décors de l'Estérel, ou encore le VTT vers ces sommets aux panoramas imprenables, les farnientes sur les plages à bronzer, l'expérience du vent dans les voiles, les plongées à la rencontre de la faune sous-marine, les douces siestes dans une chaise-longe près de la piscine, découvrir la gastronomie méditerranéenne, et bien tout cela est ici !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
