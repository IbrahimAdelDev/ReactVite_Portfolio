const experiences = [
  {
    role: "Backend Developer Intern",
    company: "Homains",
    date: "Nov 2024 – Feb 2025 · Remote",
    points: [
      "Developed responsive interfaces for the Lernova project by converting Figma designs into clean React.js + Tailwind code.",
      "Deployed 10+ updates to GitHub repos ensuring seamless UI improvements and bug fixes.",
      "Worked in Agile Scrum environment, participating in sprints and daily stand-ups."
    ]
  },
  {
    role: "Full-Stack Intern",
    company: "Uneeq Interns",
    date: "Sep 2024 – Nov 2024 · Remote",
    points: [
      "Developed an LMS backend using Node.js & MongoDB with authentication and middleware for authorization.",
      "Integrated Cloudinary for file storage and management.",
      "Built an authentication system for 100+ users with JWT security and profile management.",
      "Developed a fully responsive e-commerce website with Laravel, managing 50+ product listings."
    ]
  },
  {
    role: "Summer Training",
    company: "Information Technology Institute (ITI)",
    date: "Aug 2024 – Oct 2024 · Egypt",
    points: [
      "Developed an e-commerce website using Laravel & Bootstrap.",
      "Built an admin dashboard for managing 100+ products and categories.",
      "Applied security best practices, eliminating SQL Injection & XSS vulnerabilities."
    ]
  },
  {
    role: "Software Engineering Scholar",
    company: "ALX Program",
    date: "Jul 2023 – Nov 2024 · Remote",
    points: [
      "Developed frontend for a social media platform using React.js integrated with Node.js & MongoDB backend for 1,000+ users.",
      "Built frontend for an E-learning platform to support 200+ students solving coding challenges.",
      "Implemented core C projects (Simple Shell, custom printf, variadic functions).",
      "Collaborated remotely in a 12-month intensive software engineering program."
    ]
  }
];

export default function Experience() {
  return (
    <div className="relative border-l-2 border-gray-700 ml-6">
      {experiences.map((exp, index) => (
        <div key={index} className="mb-10 ml-6 relative">

          <span className="absolute -left-7 top-2 w-2 h-2 bg-red-500 rounded-full shadow"></span>

          {/* Card */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-5">
            {/* Date + Role */}
            <div className="flex flex-col sm:flex-row justify-between items-start mb-1">
              <h3 className="text-base font-semibold text-white">{exp.role}</h3>
              <span className="text-xs text-gray-400 whitespace-nowrap m-auto sm:ml-4">
                {exp.date}
              </span>
            </div>

            {/* Company */}
            <span className="block text-sm text-gray-300 mb-2">{exp.company}</span>

            <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm pl-1">
              {exp.points.map((point, i) => (
                <li key={i} className="text-justify">{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
