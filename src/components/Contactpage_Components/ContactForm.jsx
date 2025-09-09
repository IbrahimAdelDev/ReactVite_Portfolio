import React from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    // 1️⃣ يبعتلك إنت
    emailjs
      .sendForm(
        "service_ze9x0o7",     // Service ID
        "template_rbzgbfj",   // Template ID (لازم تعمله في EmailJS عشان يوصلك إنت)
        form,
        "5YdlDBUZ1E5wUQF9g"    // Public Key
      )
      .then(() => {
        // 2️⃣ يبعت للعميل تأكيد
        return emailjs.sendForm(
          "service_ze9x0o7",     // نفس Service ID
          "template_t7zea35",  // Template ID (auto-reply للعميل)
          form,
          "5YdlDBUZ1E5wUQF9g"
        );
      })
      .then(
        () => {
          alert("✅ Message sent & confirmation delivered!");
          form.reset();
        },
        (error) => {
          alert("❌ Failed to send message: " + error.text);
        }
      );
  };

  return (
    <div
      className="max-w-2xl mx-auto p-6 rounded-2xl 
                 bg-gray-900/40 backdrop-blur-md border border-gray-700/30 
                 shadow-md"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Row 1: Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              NAME <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800/30 
                         backdrop-blur-sm border border-gray-600/40 
                         text-white placeholder-gray-400 
                         focus:outline-none focus:border-red-400 
                         transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              EMAIL <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="You@Example.Com"
              className="w-full px-4 py-2 rounded-lg bg-gray-800/30 
                         backdrop-blur-sm border border-gray-600/40 
                         text-white placeholder-gray-400 
                         focus:outline-none focus:border-red-400 
                         transition"
              required
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">
            SUBJECT <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            placeholder="What’s This About?"
            className="w-full px-4 py-2 rounded-lg bg-gray-800/30 
                       backdrop-blur-sm border border-gray-600/40 
                       text-white placeholder-gray-400 
                       focus:outline-none focus:border-red-400 
                       transition"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">
            MESSAGE <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            placeholder="Tell Me A Bit About Scope, Timeline, And Goals..."
            rows="4"
            maxLength={2000}
            className="w-full px-4 py-3 rounded-lg bg-gray-800/30 
                       backdrop-blur-sm border border-gray-600/40 
                       text-white placeholder-gray-400 
                       focus:outline-none focus:border-red-400 
                       transition resize-none"
            required
          />
          <p className="text-xs text-gray-400 mt-2">Max 2000 chars</p>
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 rounded-full bg-red-700 border border-red-700 
                       text-black 
                       hover:bg-red-600 
                       transition-all font-semibold"
          >
            Let’s Talk
          </button>
        </div>
      </form>
    </div>
  );
}
