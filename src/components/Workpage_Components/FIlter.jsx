import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Portfolio from "./../../assets/images/projrcts/portfolio.png";
import Facebook from "./../../assets/images/projrcts/facebook.png";
import CP from "./../../assets/images/projrcts/cpp.jpg";
import E_learning from "./../../assets/images/projrcts/elearning.png";
import Hprep from "./../../assets/images/projrcts/hprep.png";
import ReactTeachHub from "./../../assets/images/projrcts/teachhub.png";
import GuessMyNumber from "./../../assets/images/projrcts/guess.png";
import TeachHubApi from "./../../assets/images/projrcts/teachhubapi.png";

const projects = [
  {
    id: 1,
    title: "Portfolio App",
    categories: ["Frontend", "Web"],
    description: "Personal portfolio application",
    date: "2025",
    image: Portfolio,
    github: "https://github.com/IbrahimAdelDev/ReactVite_Portfolio",
    demo: "https://ibrahimadelportfolio.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "TeachHub-Api(Node.js)",
    categories: ["Web", "Backend"],
    description: "A RESTful API for the TeachHub platform",
    date: "2025",
    image: TeachHubApi,
    github: "https://github.com/IbrahimAdelDev/Node.js-TeachHub",
    demo: "https://node-js-teachhub.onrender.com/api-docs/",
    featured: true,
  },
  {
    id: 3,
    title: "Problem Solving Analytics",
    categories: ["Problem Solving", "Backend", "Other"],
    description: "Analytics dashboard for competitive programming",
    date: "2024",
    image: CP,
    github: "https://github.com/IbrahimAdelDev/CP4",
    demo: "https://codeforces.com/profile/Ibrahimadel",
    featured: true,
  },
  {
    id: 4,
    title: "E-Learning Platform",
    categories: ["Web", "Frontend"],
    description: "Smart AI-powered assistant",
    date: "2023",
    image: E_learning,
    github: "https://github.com/IbrahimAdelDev/Native_Frontend_E-learning",
    demo: "https://e-learning-one-kappa.vercel.app",
    featured: true,
  },
  {
    id: 5,
    title: "Landing Page",
    categories: ["Web", "Frontend"],
    description: "Landing page from Homains training",
    date: "2025",
    image: Hprep,
    github: "https://github.com/IbrahimAdelDev/Angular_Preparing-For-Project",
    demo: "https://h-prep.vercel.app",
    featured: true,
  },
  {
    id: 6,
    title: "React Teach Hub",
    categories: ["Web", "Frontend"],
    description: "Educational platform for teachers (DEPI)",
    date: "2025",
    image: ReactTeachHub,
    github: "https://github.com/IbrahimAdelDev/React-TeachHub",
    demo: "https://react-teach-hub.vercel.app",
    featured: true,
  },
  {
    id: 7,
    title: "Guess My Number",
    categories: ["Web", "Frontend", "Game"],
    description: "A fun number guessing game",
    date: "2024",
    image: GuessMyNumber,
    github: "https://github.com/IbrahimAdelDev/guessmynumber",
    demo: "https://guessmynumber-jonas.vercel.app",
    featured: true,
  },
  {
    id: 8,
    title: "Facebook Login",
    categories: ["frontend", "Web", "Other"],
    description: "Facebook login integration example",
    date: "2022",
    image: Facebook,
    github: "https://github.com/IbrahimAdelDev/Facebook_Login",
    demo: "https://facebook-login-demo.vercel.app",
    featured: true,
  },
];

const categories = [
  "All",
  "Backend",
  "Frontend",
  "Web",
  // "E-commerce",
  "Dashboard",
  "Problem Solving",
  "IOT",
  "Game",
  "Other",
];

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");
  const [searchTerm, setSearchTerm] = useState("");

  let filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  if (searchTerm.trim() !== "") {
    filteredProjects = filteredProjects.filter((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  filteredProjects = [...filteredProjects].sort((a, b) => {
    if (sortOrder === "Newest") return b.date.localeCompare(a.date);
    if (sortOrder === "Oldest") return a.date.localeCompare(b.date);
    return 0;
  });

  const extractDomain = (url) => {
    try {
      return new URL(url).hostname.replace("www.", "");
    } catch {
      return url;
    }
  };

  return (
    <div className="w-full mt-4 md:mt-0 mx-auto px-6 md:px-12 py-8">
      {/* Search + Sort + Categories */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-4 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <input
            type="text"
            placeholder="Search project"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-1.5 rounded-md border border-gray-600 bg-transparent text-gray-200 placeholder-gray-400 text-sm focus:outline-none focus:border-red-500 w-64"
          />

          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-xs">Sort</span>
            <div className="flex rounded-full border border-gray-600 overflow-hidden">
              {["Newest", "Oldest"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => setSortOrder(opt)}
                  className={`px-4 py-1.5 text-sm transition ${
                    sortOrder === opt
                      ? "bg-red-700 text-white"
                      : "bg-transparent text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 text-sm rounded-full border transition ${
                activeCategory === cat
                  ? "bg-red-700 text-white border-red-700"
                  : "bg-transparent text-gray-300 border-gray-600 hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <Swiper
          modules={[Pagination, Autoplay, FreeMode]}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1.5 },
            640: { slidesPerView: 1.8 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 3.2 },
          }}
          loop={true}
          freeMode={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={1000}
        >
          {projects
            .filter((p) => p.featured)
            .map((proj) => (
              <SwiperSlide key={proj.id}>
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-800 to-gray-900 group"
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-32 md:h-36 object-cover transition-transform duration-500 group-hover:scale-105 relative z-10"
                  />

                  {/* Domain */}
                  <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full z-20">
                    {extractDomain(proj.demo)}
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent z-20">
                    <h3 className="text-white text-sm md:text-base font-bold">{proj.title}</h3>
                    <p className="text-gray-200 text-xs line-clamp-2">{proj.description}</p>
                    <div className="mt-2 flex items-center justify-between relative">
                      <span className="text-red-700 text-sm font-semibold inline-flex items-center gap-1 relative">
                        View
                        {/* Red Glow */}
                        <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-red-500/50 to-white/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition duration-700 -z-10"></span>
                        <span className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all">
                          →
                        </span>
                      </span>
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 text-xs hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {/* Grid */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((proj) => (
          <a
            key={proj.id}
            href={proj.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-lg overflow-hidden shadow-md bg-gradient-to-br from-gray-800 to-gray-900 group block transform transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute top-2 left-2 flex gap-1 flex-wrap">
              {proj.categories.map((cat, idx) => (
                <span
                  key={idx}
                  className="bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>

            <div className="p-3 flex flex-col justify-between min-h-[100px] relative">
              <div>
                <h3 className="text-white text-base font-semibold mb-1">
                  {proj.title}
                </h3>
                <p className="text-gray-400 text-xs flex items-center gap-2">
                  {proj.description}
                  <span className="w-1 h-1 rounded-full bg-red-500 inline-block"></span>
                  {proj.date}
                </p>
              </div>

              <div className="flex gap-3 text-xs items-center mt-2 relative">
                <span className="flex items-center text-red-500 font-semibold relative">
                  View
                  <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-24 h-24 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition duration-700 -z-10"></span>
                  <span className="ml-1 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub
                </a>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
