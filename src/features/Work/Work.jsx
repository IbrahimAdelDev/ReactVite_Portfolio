import Navbar from '../../components/Navbar/Navbar.jsx';
import Contact from '../../components/Contact.jsx';
import Footer from '../../components/footer/Footer.jsx';
import bgHeroImage from '../../assets/images/bg-portfolio.png'; 
import ProjectsGrid from '../../components/Workpage_Components/FIlter.jsx';

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

import {
  HeroSectionStyle,
} from './Work.style.js';
import './Work.css';

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

const Work = () => {
  return (
    <>
      <section
        className={`pb-6 select-none relative bg-cover bg-center bg-no-repeat w-full min-h-lvh`}
        style={{backgroundImage: `url(${bgHeroImage})`}}
      >
        <Navbar />
        <div className={`${HeroSectionStyle} pb-12 pt-20 md:pt-20 px-10 z-10`}>
          <ProjectsGrid />
        </div>
        <div className='hidden md:flex bg-gray-700 w-fit mx-auto mb-0 py-4 px-8 rounded-full'>
          <Contact className={`hidden md:flex`} />
        </div>
        <Footer className={`flex md:hidden`} />
      </section>
    </>
  );
};

export default Work;
