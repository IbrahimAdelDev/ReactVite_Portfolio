import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// البيانات
const projects = [
  {
    id: 1,
    title: "Dashboard SA",
    categories: ["Web", "Dashboard"],
    description: "Analytics dashboard for sales tracking",
    date: "2024",
    image:
      "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    github: "https://github.com/username/dashboard-sa",
    demo: "https://dashboard-sa.netlify.app",
    featured: true,
  },
  {
    id: 2,
    title: "Kati",
    categories: ["E-commerce", "Web"],
    description: "Modern e-commerce website",
    date: "2024",
    image:
      "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    github: "https://github.com/username/kati",
    demo: "https://kati.netlify.app",
    featured: true,
  },
  {
    id: 3,
    title: "Mop App",
    categories: ["Mobile"],
    description: "Cross-platform mobile app",
    date: "2024",
    image:
      "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    github: "https://github.com/username/mop-app",
    demo: "https://mopapp-sa.netlify.app",
    featured: true,
  },
  {
    id: 4,
    title: "AI Assistant",
    categories: ["AI", "Web"],
    description: "Smart AI-powered assistant",
    date: "2023",
    image:
      "https://gratisography.com/wp-content/uploads/2024/10/gratisography-virtual-reality-800x525.jpg",
    github: "https://github.com/username/ai-assistant",
    demo: "https://ai-assistant.netlify.app",
  },
  {
    id: 5,
    title: "Finance Tracker",
    categories: ["Mobile", "Finance"],
    description: "App for tracking personal finances",
    date: "2023",
    image:
      "https://gratisography.com/wp-content/uploads/2024/09/gratisography-smartphone-800x525.jpg",
    github: "https://github.com/username/finance-tracker",
    demo: "https://finance-tracker.netlify.app",
  },
  {
    id: 6,
    title: "Portfolio V2",
    categories: ["Web"],
    description: "Personal portfolio website",
    date: "2022",
    image:
      "https://gratisography.com/wp-content/uploads/2024/08/gratisography-computer-800x525.jpg",
    github: "https://github.com/username/portfolio-v2",
    demo: "https://portfolio-v2.netlify.app",
  },
];

const categories = [
  "All",
  "Web",
  "E-commerce",
  "Dashboard",
  "Mobile",
  "AI",
  "Finance",
];

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");
  const [searchTerm, setSearchTerm] = useState("");

  // فلترة العناصر
  let filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  // فلترة بالسيرش
  if (searchTerm.trim() !== "") {
    filteredProjects = filteredProjects.filter((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // ترتيب
  filteredProjects = [...filteredProjects].sort((a, b) => {
    if (sortOrder === "Newest") return b.date.localeCompare(a.date);
    if (sortOrder === "Oldest") return a.date.localeCompare(b.date);
    return 0;
  });

  return (
    <div className="w-full mx-auto px-6 md:px-12 py-8">
      {/* البحث + الترتيب + الكاتيجوريز */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
        {/* Search + Sort */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          {/* سيرش */}
          <input
            type="text"
            placeholder="Search project titles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-1.5 rounded-md border border-gray-600 bg-transparent text-gray-200 placeholder-gray-400 text-sm focus:outline-none focus:border-red-500 w-64"
          />

          {/* Sort Switch */}
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

        {/* الكاتيجوريز */}
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

      {/* السويبر (Featured Projects) */}
      <div className="mb-12">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3500 }}
          pagination={{ clickable: true }}
        >
          {projects
            .filter((p) => p.featured)
            .map((proj) => (
              <SwiperSlide key={proj.id}>
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-800 to-gray-900"
                >
                  {/* الصورة */}
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-64 object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-5">
                    <h3 className="text-white text-xl font-bold">
                      {proj.title}
                    </h3>
                    <p className="text-gray-200 text-sm">{proj.description}</p>
                    <span className="text-red-400 text-sm mt-2 inline-flex items-center gap-1">
                      View →
                    </span>
                  </div>
                </a>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {/* الجريد */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((proj) => (
          <a
            key={proj.id}
            href={proj.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-lg overflow-hidden shadow-md bg-gradient-to-br from-gray-800 to-gray-900 group block transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            {/* الصورة */}
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* الكاتيجوريز فوق */}
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

            {/* المحتوى */}
            <div className="p-3 flex flex-col justify-between min-h-[100px]">
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

              <div className="flex gap-3 text-xs items-center mt-2">
                <span className="flex items-center text-red-500 font-semibold">
                  View
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
