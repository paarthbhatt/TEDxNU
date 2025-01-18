import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const sponsors = [
  { id: 1, name: 'Sponsor 1', image: 'https://via.placeholder.com/400x200/f3f4f6/666666?text=Sponsor+1' },
  { id: 2, name: 'Sponsor 2', image: 'https://via.placeholder.com/400x200/f3f4f6/666666?text=Sponsor+2' },
  { id: 3, name: 'Sponsor 3', image: 'https://via.placeholder.com/400x200/f3f4f6/666666?text=Sponsor+3' },
  { id: 4, name: 'Sponsor 4', image: 'https://via.placeholder.com/400x200/f3f4f6/666666?text=Sponsor+4' },
];

export default function SponsorSlider() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      spaceBetween={40}
      slidesPerView={3}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      className="w-full"
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 3, spaceBetween: 40 },
      }}
    >
      {sponsors.map((sponsor) => (
        <SwiperSlide key={sponsor.id}>
          <motion.div 
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ y: -10 }}
          >
            <img
              src={sponsor.image}
              alt={sponsor.name}
              className="w-full h-56 object-cover rounded-xl"
            />
            <h3 className="text-center mt-6 text-xl font-bold text-ted-black">{sponsor.name}</h3>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}