import React from "react";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <div
      className="py-6 px-6 
                 bg-gradient-to-br from-gray-900 to-gray-950 
                 rounded-xl shadow-lg mb-12 md:mx-24 mx-16"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between text-center md:text-left gap-4">
        {/* النص */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Have a project in mind?
          </h2>
          <p className="text-gray-300 max-w-2xl text-sm md:text-base">
            Let’s plan milestones, budgets, and a performance budget.
          </p>
        </div>

        {/* الزرار */}
        <button
          onClick={() => navigate("/contact")}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 
                     bg-red-600 hover:bg-red-700 text-gray-950 font-semibold 
                     rounded-full shadow-md transition w-fit self-center md:self-auto"
        >
          Get in touch
        </button>
      </div>
    </div>
  );
}
