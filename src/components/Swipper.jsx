import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import {
  FaProjectDiagram,
  FaShieldAlt,
  FaDatabase,
  FaBolt,
  FaNetworkWired,
  FaCogs,
  FaMoneyBillWave,
  FaSyncAlt,
  FaDocker,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper-custom.css";

// === Backend + Fullstack Features ===
const Features = [
  {
    title: "API Design & Microservices",
    desc: "Clean REST/GraphQL APIs with scalable microservices.",
    icon: <FaProjectDiagram className="text-red-700 text-4xl" />,
  },
  {
    title: "Auth & Security",
    desc: "JWT, OAuth2, RBAC/ABAC, and OWASP best practices.",
    icon: <FaShieldAlt className="text-red-700 text-4xl" />,
  },
  {
    title: "Databases & ORM",
    desc: "PostgreSQL, MySQL, MongoDB with efficient indexing.",
    icon: <FaDatabase className="text-red-700 text-4xl" />,
  },
  {
    title: "Caching & Performance",
    desc: "Boosting throughput with Redis and query optimization.",
    icon: <FaBolt className="text-red-700 text-4xl" />,
  },
  {
    title: "IoT & Data Pipelines",
    desc: "Ingesting device telemetry and real-time analytics.",
    icon: <FaNetworkWired className="text-red-700 text-4xl" />,
  },
  {
    title: "End-to-End Features",
    desc: "From schema and APIs to UI integration.",
    icon: <FaCogs className="text-red-700 text-4xl" />,
  },
  {
    title: "Payments & Billing",
    desc: "Apple Pay, Stripe, and idempotent order workflows.",
    icon: <FaMoneyBillWave className="text-red-700 text-4xl" />,
  },
  {
    title: "Real-Time UX",
    desc: "Live updates via WebSockets/SSE with optimistic UI.",
    icon: <FaSyncAlt className="text-red-700 text-4xl" />,
  },
  {
    title: "CI/CD & Runtime",
    desc: "Dockerized services, GitHub Actions, zero-downtime deploys.",
    icon: <FaDocker className="text-red-700 text-4xl" />,
  },
];

export default function FeaturesSwiper() {
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
              <div className="min-h-44 flex flex-col items-center text-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-6 hover:scale-[1.02] transition">
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
