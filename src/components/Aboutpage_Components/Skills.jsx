import {
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaPhp,
  FaLock,
  FaCode,
  FaNetworkWired,
  FaTrophy,
  FaProjectDiagram,
  FaChalkboardTeacher,
  FaUsers,
  FaCloud,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiLaravel,
  SiPython,
  SiC,
  SiCplusplus,
} from "react-icons/si";

const skills = {
  "Back-End": [
    { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
    { name: "Express", icon: <FaNodeJs className="text-green-300" /> },
    { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
    { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
    { name: "RESTful APIs", icon: <FaNodeJs className="text-green-300" /> },
    { name: "Auth & Security", icon: <FaLock className="text-red-400" /> },
    { name: "System Design", icon: <FaProjectDiagram className="text-yellow-400" /> },
  ],
  Databases: [
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "MySQL", icon: <FaDatabase className="text-blue-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-400" /> },
  ],
  "Front-End": [
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "HTML5", icon: <FaCode className="text-orange-400" /> },
    { name: "CSS3", icon: <FaCode className="text-blue-400" /> },
    { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiJavascript className="text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-400" /> },
    { name: "BEM", icon: <FaCode className="text-gray-400" /> },
  ],
  "DevOps & Tools": [
    { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
    { name: "Linux", icon: <FaLinux className="text-yellow-500" /> },
    { name: "Cloud (AWS, Azure)", icon: <FaCloud className="text-gray-300" /> },
  ],
  "Computer Science": [
    { name: "Data Structures & Algorithms", icon: <FaCode className="text-gray-300" /> },
    { name: "OOP", icon: <FaCode className="text-gray-300" /> },
    { name: "Networking (CCNA)", icon: <FaNetworkWired className="text-teal-400" /> },
  ],
  "Problem Solving": [
    { name: "C", icon: <SiC className="text-blue-500" /> },
    { name: "C++", icon: <SiCplusplus className="text-indigo-500" /> },
    { name: "Python", icon: <SiPython className="text-yellow-400" /> },
    { name: "Competitive Programming", icon: <FaTrophy className="text-yellow-500" /> },
  ],
  "Soft Skills": [
    { name: "Agile & Scrum", icon: <FaProjectDiagram className="text-pink-400" /> },
    { name: "Mentoring", icon: <FaChalkboardTeacher className="text-green-400" /> },
    { name: "Team Collaboration", icon: <FaUsers className="text-blue-400" /> },
  ],
};

export default function Skills() {
  return (
    <div className="space-y-10">
      {Object.entries(skills).map(([category, items], idx) => (
        <div key={idx}>
          {/* Category Title */}
          <h3 className="text-md font-bold text-white mb-5 border-b border-gray-700 pb-2">
            {category}
          </h3>

          {/* Skill Boxes */}
          <div className="flex flex-wrap gap-3">
            {items.map((skill, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-gray-800 to-gray-900 text-gray-300 text-[0.9rem] rounded-md shadow-md hover:from-gray-700 hover:to-gray-800 hover:scale-[1.03] transition"
              >
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
