import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper-custom.css";

export default function FeaturesSwiper(props) {

  const Features = props.features;
  
  return (
    <div className="py-8 bg-gradient-to-br from-gray-900 to-gray-950 rounded-md">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          Featured Work
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          className="w-full"
        >
          {Features.map((feature, i) => (
            <SwiperSlide key={i}>
              <div className="min-h-52 flex flex-col items-center text-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-6 hover:scale-[1.02] transition">
                {/* Icon */}
                <div className="mb-4">{feature.icon}</div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mt-2">{feature.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
