const steps = [
  {
    number: "1",
    title: "Discover",
    desc: "Goals, audience, flows, and success metrics.",
  },
  {
    number: "2",
    title: "Design System",
    desc: "Components, tokens, and patterns for scale.",
  },
  {
    number: "3",
    title: "Build",
    desc: "SSR/CSR mix, a11y, testing, and CI previews.",
  },
  {
    number: "4",
    title: "Optimize & Ship",
    desc: "CWV budgets, SEO, analytics, and handover.",
  },
];

export default function Process() {
  return (
    <div className="space-y-6 my-10 flex flex-col items-center md:items-start">
      {steps.map((step, i) => (
        <div key={i} className="flex items-start gap-4">
          {/* Number in Circle */}
          <div className="relative text-gray-950 font-bold text-sm">
            <div className="relative flex items-center justify-center 
              w-8 h-8 rounded-full 
              bg-red-600 
              ">
            </div>
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{step.number}</span>
          </div>

          {/* Title and Description */}
          <div>
            <h3 className="text-white font-semibold">{step.title}</h3>
            <p className="text-gray-400 text-sm">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
