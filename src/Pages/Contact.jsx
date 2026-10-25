import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaTimes,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    type: "success", // "success" | "error"
    title: "",
    message: "",
  });

  const showToast = (type, title, message) => {
    setToast({ show: true, type, title, message });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 4500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      showToast(
        "error",
        "Missing Information",
        "Please fill in your name, email, and message.",
      );
      return;
    }

    setLoading(true);

    const serviceId =
      import.meta.env.VITE_SERVICE_ID || import.meta.env.SERVICE_ID || "";
    const templateId =
      import.meta.env.VITE_TEMPLATE_ID ||
      import.meta.env.TEMPLATE_ID ||
      "dnas06k";
    const publicKey =
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY ||
      import.meta.env.EMAILJS_PUBLIC_KEY ||
      "ULyISDR9B1LfvNY59";

    const templateParams = {
      from_name: formData.name,
      email: formData.email,
      phone: formData.phone || "Not provided",
      message: formData.message,
    };

    try {
      if (!serviceId) {
        throw new Error("SERVICE_ID is not configured in .env");
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      showToast(
        "success",
        "Message Sent Successfully!",
        "Thanks for reaching out! I will review your message and get back to you shortly.",
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      showToast(
        "error",
        "Delivery Failed",
        error.message.includes("SERVICE_ID")
          ? "Please configure your SERVICE_ID in the .env file."
          : "Could not send email right now. Please email directly at rishishrivastav28@gmail.com",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full dark:bg-black bg-white dark:text-white text-black py-20 px-[5vw] transition-colors duration-300 relative"
    >
      {/* ── Floating Theme-Matched Toast Notification ── */}
      {toast.show && (
        <div className="fixed bottom-8 right-8 z-50 animate-bounce-short">
          <div
            className={`
              flex items-start gap-4 p-5 rounded-2xl backdrop-blur-xl border shadow-2xl max-w-md transition-all duration-300
              ${
                toast.type === "success"
                  ? "dark:bg-black/90 bg-white/95 dark:border-green-500/30 border-green-500/40 shadow-[0_10px_30px_rgba(74,222,128,0.15)]"
                  : "dark:bg-black/90 bg-white/95 dark:border-red-500/30 border-red-500/40 shadow-[0_10px_30px_rgba(239,68,68,0.15)]"
              }
            `}
          >
            {/* Status Icon */}
            <div className="mt-0.5 flex-shrink-0">
              {toast.type === "success" ? (
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                  <FaCheckCircle className="text-lg" />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
                  <FaExclamationCircle className="text-lg" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pr-2">
              <h4 className="font-display font-bold text-sm dark:text-white text-black tracking-tight">
                {toast.title}
              </h4>
              <p className="font-body text-xs dark:text-white/70 text-black/70 mt-1 leading-relaxed">
                {toast.message}
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setToast((prev) => ({ ...prev, show: false }))}
              className="text-black/40 dark:text-white/40 hover:text-black hover:dark:text-white transition-colors p-1"
              aria-label="Dismiss notification"
            >
              <FaTimes className="text-xs" />
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* ── Section Header ── */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-yellow-400" />
            <p className="font-body text-[10px] tracking-[0.28em] uppercase dark:text-white/50 text-black/50 font-medium">
              Get In Touch
            </p>
          </div>

          <h2
            className="font-display dark:text-white text-black leading-[0.92] select-none"
            style={{
              fontSize: "clamp(2.4rem, 4.5vw, 4.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            Let&apos;s Build{" "}
            <span
              className="italic font-display dark:text-white/60 text-black/50"
              style={{ fontWeight: 400 }}
            >
              Together.
            </span>
          </h2>

          <p className="font-body dark:text-white/60 text-black/60 text-sm md:text-base max-w-xl">
            Have a project in mind, custom SaaS requirement, or want to discuss
            engineering collaboration? Send a message and let&apos;s connect.
          </p>
        </div>

        {/* ── Two Column Contact Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full">
          {/* ── LEFT: Contact Form (7 cols) ── */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="
                dark:bg-white/[0.03] bg-white
                border dark:border-white/10 border-black/[0.08]
                p-8 md:p-10 rounded-3xl
                shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-none
                backdrop-blur-md
                space-y-6
              "
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block font-body text-xs tracking-wider uppercase dark:text-white/70 text-black/70 mb-2 font-medium">
                    Your Name <span className="text-yellow-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    required
                    className="
                      w-full px-4 py-3.5 rounded-xl font-body text-sm
                      dark:bg-white/[0.05] bg-black/[0.03]
                      dark:text-white text-black
                      border dark:border-white/10 border-black/10
                      focus:outline-none focus:border-yellow-400 dark:focus:border-yellow-400
                      focus:ring-1 focus:ring-yellow-400/50
                      transition-all duration-200
                      placeholder:dark:text-white/20 placeholder:text-black/30
                    "
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-body text-xs tracking-wider uppercase dark:text-white/70 text-black/70 mb-2 font-medium">
                    Email Address <span className="text-yellow-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    required
                    className="
                      w-full px-4 py-3.5 rounded-xl font-body text-sm
                      dark:bg-white/[0.05] bg-black/[0.03]
                      dark:text-white text-black
                      border dark:border-white/10 border-black/10
                      focus:outline-none focus:border-yellow-400 dark:focus:border-yellow-400
                      focus:ring-1 focus:ring-yellow-400/50
                      transition-all duration-200
                      placeholder:dark:text-white/20 placeholder:text-black/30
                    "
                  />
                </div>
              </div>

              {/* Phone (Optional) */}
              <div>
                <label className="block font-body text-xs tracking-wider uppercase dark:text-white/70 text-black/70 mb-2 font-medium">
                  Phone Number{" "}
                  <span className="text-[10px] lowercase text-black/40 dark:text-white/40">
                    (optional)
                  </span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="
                    w-full px-4 py-3.5 rounded-xl font-body text-sm
                    dark:bg-white/[0.05] bg-black/[0.03]
                    dark:text-white text-black
                    border dark:border-white/10 border-black/10
                    focus:outline-none focus:border-yellow-400 dark:focus:border-yellow-400
                    focus:ring-1 focus:ring-yellow-400/50
                    transition-all duration-200
                    placeholder:dark:text-white/20 placeholder:text-black/30
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-body text-xs tracking-wider uppercase dark:text-white/70 text-black/70 mb-2 font-medium">
                  Message <span className="text-yellow-400">*</span>
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, or idea..."
                  required
                  className="
                    w-full px-4 py-3.5 rounded-xl font-body text-sm
                    dark:bg-white/[0.05] bg-black/[0.03]
                    dark:text-white text-black
                    border dark:border-white/10 border-black/10
                    focus:outline-none focus:border-yellow-400 dark:focus:border-yellow-400
                    focus:ring-1 focus:ring-yellow-400/50
                    transition-all duration-200 resize-none
                    placeholder:dark:text-white/20 placeholder:text-black/30
                  "
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="
                  w-full py-4 px-6 rounded-xl font-body text-xs tracking-[0.18em] uppercase font-bold
                  bg-black text-white dark:bg-white dark:text-black
                  hover:opacity-90 active:scale-[0.99]
                  transition-all duration-200 flex items-center justify-center gap-3
                  shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* ── RIGHT: Direct Contact Info (5 cols) ── */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div
              className="
                dark:bg-white/[0.03] bg-white
                border dark:border-white/10 border-black/[0.08]
                p-8 md:p-10 rounded-3xl
                shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-none
                backdrop-blur-md space-y-8 flex-1
              "
            >
              <div>
                <h3 className="font-display font-bold text-xl dark:text-white text-black mb-2">
                  Contact Information
                </h3>
                <p className="font-body text-xs dark:text-white/50 text-black/50 leading-relaxed">
                  Prefer direct communication? Reach out via email, phone, or
                  connected social channels.
                </p>
              </div>

              {/* Contact Item: Email */}
              <a
                href="mailto:rishishrivastav28@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl dark:bg-white/[0.06] bg-black/[0.04] border dark:border-white/10 border-black/10 flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <p className="font-body text-[10px] tracking-wider uppercase dark:text-white/40 text-black/40">
                    Email
                  </p>
                  <p className="font-body text-sm font-semibold dark:text-white text-black group-hover:text-yellow-400 transition-colors">
                    rishishrivastav28@gmail.com
                  </p>
                </div>
              </a>

              {/* Contact Item: Phone */}
              <a
                href="tel:+916354839615"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl dark:bg-white/[0.06] bg-black/[0.04] border dark:border-white/10 border-black/10 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                  <FaPhoneAlt className="text-lg" />
                </div>
                <div>
                  <p className="font-body text-[10px] tracking-wider uppercase dark:text-white/40 text-black/40">
                    Phone / WhatsApp
                  </p>
                  <p className="font-body text-sm font-semibold dark:text-white text-black group-hover:text-green-400 transition-colors">
                    +91 6354839615
                  </p>
                </div>
              </a>

              {/* Contact Item: Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl dark:bg-white/[0.06] bg-black/[0.04] border dark:border-white/10 border-black/10 flex items-center justify-center text-sky-400">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <p className="font-body text-[10px] tracking-wider uppercase dark:text-white/40 text-black/40">
                    Location
                  </p>
                  <p className="font-body text-sm font-semibold dark:text-white text-black">
                    Surat, Gujarat, India
                  </p>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-4 border-t dark:border-white/10 border-black/10">
                <p className="font-body text-[10px] tracking-wider uppercase dark:text-white/40 text-black/40 mb-3">
                  Connect on Social
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      px-4 py-2.5 rounded-xl text-xs font-body font-semibold
                      dark:bg-white/[0.06] bg-black/[0.04] border dark:border-white/10 border-black/10
                      dark:text-white text-black hover:border-yellow-400 hover:text-yellow-400
                      transition-all duration-200 flex items-center gap-2
                    "
                  >
                    <FaGithub />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      px-4 py-2.5 rounded-xl text-xs font-body font-semibold
                      dark:bg-white/[0.06] bg-black/[0.04] border dark:border-white/10 border-black/10
                      dark:text-white text-black hover:border-[#0A66C2] hover:text-[#0A66C2]
                      transition-all duration-200 flex items-center gap-2
                    "
                  >
                    <FaLinkedin />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
