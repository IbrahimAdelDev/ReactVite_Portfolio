const backendHighlights = [
  {
    title: "APIs & Microservices",
    desc: "REST & GraphQL APIs with scalable microservice design.",
    tag: "Scalable"
  },
  {
    title: "Auth & Security",
    desc: "JWT, OAuth2, RBAC, and OWASP practices for safe systems.",
    tag: "Hardened"
  },
  {
    title: "Databases",
    desc: "MongoDB, PostgreSQL, MySQL with indexing & query tuning.",
    tag: "Optimized"
  },
  {
    title: "IoT Pipelines",
    desc: "Telemetry ingestion, processing, and real-time dashboards.",
    tag: "Real-Time"
  },
  {
    title: "Payments & E-Commerce",
    desc: "Apple Pay, Stripe, and resilient checkout workflows.",
    tag: "Transactions"
  },
  {
    title: "Cloud & DevOps",
    desc: "Docker, AWS, and CI/CD pipelines with zero-downtime deploys.",
    tag: "Cloud-Native"
  },
  {
    title: "Performance",
    desc: "Caching, load balancing, and code-split strategies.",
    tag: "Fast"
  },
  {
    title: "Architecture",
    desc: "Clean code, SOLID principles, and maintainable systems.",
    tag: "Clean"
  },
  {
    title: "Agile & Mentoring",
    desc: "Cross-functional teamwork, Scrum sprints, and peer coaching.",
    tag: "Teamwork"
  },
];

export default function BackendHighlights() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:pb-10">
      {backendHighlights.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col justify-between p-4 rounded-xl 
                     bg-gray-900/40 backdrop-blur-md border border-gray-700/30
                     shadow-md hover:scale-[1.02] transition"
        >
          {/* Title */}
          <h3 className="text-white font-semibold text-lg mb-2">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-sm flex-1">{item.desc}</p>

          {/* Tag as badge */}
          <span
            className="w-fit mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full 
                       bg-red-500/10 border border-red-500/40 text-red-400 text-xs font-medium"
          >
            {/* Red dot inside the badge */}
            <span className="w-2 h-2 bg-red-700 rounded-full"></span>
            {item.tag}
          </span>
        </div>
      ))}
    </div>
  );
}
