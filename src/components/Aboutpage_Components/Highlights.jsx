const highlights = [
  { subtitle: "Delivered secure RESTful APIs and microservices powering 60+ projects across fintech, e-commerce, and SaaS platforms." },
  { subtitle: "Optimized MongoDB and PostgreSQL queries, improving response times for high-traffic apps and large IoT data streams." },
  { subtitle: "Integrated IoT systems in multiple domains, designing pipelines to collect, process, and visualize real-time sensor data." },
  { subtitle: "Implemented authentication & authorization with JWT, OAuth2, and role-based access for 100+ active users." },
  { subtitle: "Deployed scalable backends using Docker and AWS, with CI/CD pipelines ensuring reliable releases." },
  { subtitle: "Enforced security best practices, preventing SQLi/XSS vulnerabilities and ensuring data protection." },
  { subtitle: "Collaborated in Agile/Scrum teams, contributing to sprints, stand-ups, and mentoring peers." },
  { subtitle: "Strong focus on clean architecture and SOLID principles to deliver maintainable, production-grade systems." },
  { subtitle: "Implemented payment processing solutions, including Apple Pay and complex checkout flows." },
];

export default function Highlights() {
  return (
    <div className="grid gap-4 grid-cols-1">
      {highlights.map((item, idx) => (
        <div
          key={idx}
          className="flex items-start p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg"
        >
          <div className="mr-3">
            <span className="inline-flex items-center justify-center w-2 h-2 bg-red-500 rounded-full shadow"></span>
          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="text-[0.9rem] text-gray-300">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
