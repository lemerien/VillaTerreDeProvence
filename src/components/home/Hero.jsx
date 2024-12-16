import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    image: '/src/components/shared/Photos/Welcome/1 - The Villa South.jpg',
    title: 'Villa Terre de Provence',
    subtitle: 'Vacances nature à Saint-Raphaël'
  },
  {
    id: 2,
    image: '/src/components/shared/Photos/Welcome/2 - Pool wooden beach.jpg',
    title: 'Experience Provence',
    subtitle: 'Votre Paradis'
  },
  {
    id: 3,
    image: '/src/components/shared/Photos/Welcome/4 - Esterel view and Palms.jpg',
    title: 'Votre Spot',
    subtitle: 'en Provence'
  } ,
  {
  id: 4,
image: '/src/components/shared/Photos/Welcome/3 - Zen Garden.jpg',
title: 'Relaxion Détente',
subtitle: '& Bien être'
}  
];

export function Hero() {
  return (
    <div className="relative h-screen">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div className="max-w-3xl px-4">
                  <h1 className="text-4xl md:text-6xl font-light text-white mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white font-light">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button className="text-white border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors">
          Book Your Stay
        </button>
      </div>
    </div>
  );
}