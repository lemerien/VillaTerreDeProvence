import { useInView } from 'react-intersection-observer';
import { clsx } from 'clsx';
import { IconFeature } from '../shared/IconFeature';

const features = [
  { id: 1, icon: 'src/components/shared/Icones/Villaicon.jpg', label: '158 m²' },
  { id: 2, icon: 'src/components/shared/Icones/Gardenicon.jpg', label: '1 400 m²' },
  { id: 3, icon: 'src/components/shared/Icones/Poolicon.jpg', label: 'Piscine' },
  { id: 4, icon: 'src/components/shared/Icones/Bedroom icon.jpg', label: '4 Chambres' },
  { id: 5, icon: 'src/components/shared/Icones/Bathroom icon.jpg', label: '4 Douches' },
  { id: 6, icon: 'src/components/shared/Icones/ACicon.jpg', label: 'A/C' },
  { id: 7, icon: 'src/components/shared/Icones/Parkingicon.jpg', label: 'Parking' },
  { id: 8, icon: 'src/components/shared/Icones/Wifiicon.jpg', label: 'Wifi & LAN' },
  { id: 9, icon: 'src/components/shared/Icones/Towelsicon.jpg', label: 'Serviettes' },
  { id: 10, icon: 'src/components/shared/Icones/iconsea.jpg', label: '9 min' },
  { id: 11, icon: 'src/components/shared/Icones/iconmontain.jpg', label: '3 min' },
  { id: 12, icon: 'src/components/shared/Icones/Salesicon.JPG', label: '- 20 % discount' }
];

export function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12">
          La Villa
        </h2>
        <div className="border-b-2 border-gray-300 mb-8" />
        <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-6">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={clsx(
                'transform transition-all duration-1000',
                inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
                { 'delay-200': index % 2, 'delay-400': index % 3 }
              )}
            >
              <IconFeature icon={feature.icon} label={feature.label} />
            </div>         
          ))}
        </div>
       
       
{/* YouTube Link Section */}
<div className="mt-12 text-center">
  <h3 className="text-3xl md:text-4xl font-light text-center mb-2"> {/* Réduction de `mb-4` à `mb-2` */}
    Video Jardin Exotique
  </h3>
  <div className="border-b-2 border-gray-300 mb-8" />

 {/* YouTube Iframe Section */}
 <div className="mt-4 flex justify-center"> {/* Réduction de `mt-8` à `mt-4` */}
  <iframe
    width="672"
    height="378"
    src="https://www.youtube.com/embed/UN4Ka4Wfwu0?si=c3oc1yrrp365d_tF"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>

  <a
    href="https://www.youtube.com/watch?v=UN4Ka4Wfwu0" // Replace with your YouTube video link
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 hover:underline"
  >
    Cliquez pour voir sur YouTube
  </a>
</div>

<div className="border-b-2 border-gray-300 mb-8" />
      </div>
    </section>
  );
}