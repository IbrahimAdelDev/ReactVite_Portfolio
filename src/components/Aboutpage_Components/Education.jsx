const education = [
  {
    degree: "Bachelor’s Degree in Electronics & Communications Engineering",
    school: "Port Said University",
    date: "2021 – 2026 (Expected)",
    location: "Egypt",
  },
];

export default function Education() {
  return (
    <div className="space-y-4">
      {education.map((edu, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row justify-between items-start bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-md p-5"
        >
          {/* Left Side */}
          <div>
            <h3 className="text-md font-semibold text-white">{edu.degree}</h3>
            <span className="block text-gray-300 text-sm mt-1">
              {edu.school} — {edu.location}
            </span>
          </div>

          {/* Right Side */}
          <span className="text-sm text-gray-400 whitespace-nowrap ml-0 sm:ml-4">
            {edu.date}
          </span>
        </div>
      ))}
    </div>
  );
}
