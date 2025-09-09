import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "Ibrahimadel.dev@gmail.com",
    href: "mailto:Ibrahimadel.dev@gmail.com",
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    value: "mo-abdelsalam-frontend",
    href: "https://www.linkedin.com/in/ibrahimadeldev/",
  },
  {
    icon: <Github size={18} />,
    label: "GitHub",
    value: "IbrahimAdelDev",
    href: "https://github.com/IbrahimAdelDev",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "Damietta, Egypt",
    extra: "Response: 24–48h",
    href: "https://maps.google.com/?q=Damietta,Egypt",
  },
];

const chips = [
  "Project Inquiry",
  "Consultation",
  "Mentorship",
  "Collaboration",
];

export default function ContactDetails() {
  return (
    <div className="space-y-6">
      {/* Intro text */}
      <p className="text-gray-300 text-sm">
        Tell me about your idea, timeline, and goal. I usually reply within
        <span className="text-white font-medium"> 24-48 hours.</span>
      </p>

      {/* Contact cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactInfo.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 p-4 rounded-xl 
                       bg-gray-900/40 backdrop-blur-md border border-gray-700/30 
                       shadow-md"
          >
            <span className="text-red-400 mt-0.5">{item.icon}</span>
            <div>
              <p className="text-xs text-gray-400">{item.label}</p>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white font-medium hover:text-red-400 transition"
              >
                {item.value}
              </a>
              {item.extra && (
                <p className="text-xs text-gray-400 mt-0.5">{item.extra}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Chips */}
      <div className="flex flex-wrap gap-3">
        {chips.map((chip, idx) => (
          <span
            key={idx}
            className="px-4 py-1.5 rounded-full border border-gray-600/40 
                       text-gray-200 text-sm hover:border-red-400 
                       hover:text-red-400 transition cursor-pointer"
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}
