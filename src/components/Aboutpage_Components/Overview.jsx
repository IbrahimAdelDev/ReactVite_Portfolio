const highlights = [
  { subtitle: "IoT Systems Integration & Data Pipelines" },
  { subtitle: "Authentication & Security (JWT, Role-based Access)" },
  { subtitle: "Databases (MongoDB, PostgreSQL, MySQL)" },
  { subtitle: "Cloud & Scalability (Docker, AWS, Microservices)" },
  {
    subtitle:
      "Agile & Scrum Practices with growing experience in cross functional teamwork & mentoring",
  },
];

export default function Highlights() {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
      {/* Full Width */}
      <div className="col-span-1 sm:col-span-2 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-white mb-2">
          I turn ideas into secure, scalable backends.
        </h3>
        <p className="text-gray-400 text-sm text-justify">
          From real-time APIs and authentication systems to IoT integrations
          and data pipelines, I focus on reliability, performance, and clean
          architecture.
        </p>
      </div>

      {/* Remaining Highlights */}
      {highlights.map((item, idx) => (
        <div
          key={idx}
          className="flex items-start p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg"
        >
          <div className="mr-3 mt-1">
            <span className="inline-flex items-center justify-center w-2 h-2 bg-red-500 rounded-full shadow"></span>
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-300 text-justify">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
