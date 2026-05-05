import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import CardPromocao from './CardPromocao';

const Promocao = () => {
  const dadosPromo = [
    { id: 1, destino: "Itapiranga para Urucará", img: "/urucara.jpg", desconto: "20% OFF", de: "R$ 350", por: "R$ 280" },
    { id: 2, destino: "Manaus para Parintins", img: "/parintins2.jpg", desconto: "15% OFF", de: "R$ 180", por: "R$ 153" },
    { id: 3, destino: "Tefé para Manaus", img: "/manaus3.jpg", desconto: "10% OFF", de: "R$ 290", por: "R$ 261" },
    { id: 4, destino: "Manaus para Anori", img: "/anori.jpg", desconto: "25% OFF", de: "R$ 400", por: "R$ 300" },
  ];

  return (
    <section id="promocoes" className="py-20 text-white overflow-hidden bg-transparent">

      <style dangerouslySetInnerHTML={{ __html: `
        #promocoes .swiper-button-next, 
        #promocoes .swiper-button-prev {
          color: #ffffff !important;
        }
        #promocoes .swiper-pagination-bullet-active {
          background: #ffffff !important;
        }
      `}} />

      <div className="container mx-auto px-6">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold italic drop-shadow-lg">
            Promoções <span className="text-sky-600">Imperdíveis!</span>
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {dadosPromo.map((promo) => (
            <SwiperSlide key={promo.id}>
              <CardPromocao {...promo} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Promocao;