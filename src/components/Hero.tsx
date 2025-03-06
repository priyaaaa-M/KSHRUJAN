import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const Hero = () => {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070',
      title: 'Empowering Youth',
      subtitle: 'For a Brighter Future',
    },
    {
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2071',
      title: 'Building Tomorrow',
      subtitle: 'Through Education Today',
    },
    {
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070',
      title: 'Creating Change',
      subtitle: 'One Life at a Time',
    },
  ];

  return (
    <div className="relative h-screen">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-60" />
              </div>
              <div className="relative h-full flex items-center justify-center text-center px-4">
                <div className="max-w-4xl">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-3xl text-white mb-12 font-light">
                    {slide.subtitle}
                  </p>
                  <button className="bg-[#94DEA5] text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#7BC98E] transition-all transform hover:scale-105">
                    Explore Programs
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;