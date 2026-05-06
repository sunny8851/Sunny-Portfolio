import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "Email",
    value: "sunnyr29811@gmail.com",
    href: "mailto:sunnyr29811@gmail.com",
    color: "#6366f1",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.38 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6.07 6.07l.9-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: "Phone",
    value: "+91-9958693592",
    href: "tel:+919958693592",
    color: "#06b6d4",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    label: "WhatsApp",
    value: "+91-9958693592",
    href: "https://wa.me/919958693592?text=Hello%20Sunny!",
    color: "#25d366",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/sunny-kumar-ray",
    href: "https://www.linkedin.com/in/sunny-kumar-ray/",
    color: "#0a66c2",
  },
];

interface FormData {
  username: string;
  email: string;
  Mobile: string;
  message: string;
}
interface FormErrors {
  username: string;
  email: string;
  Mobile: string;
  message: string;
}

const initialValues: FormData = { username: "", email: "", Mobile: "", message: "" };
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState<FormData>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({ username: "", email: "", Mobile: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const validate = (values: FormData): FormErrors => {
    const errs: FormErrors = { username: "", email: "", Mobile: "", message: "" };
    if (!values.username.trim()) errs.username = "Name is required";
    if (!values.email.trim()) errs.email = "Email is required";
    else if (!emailRegex.test(values.email)) errs.email = "Invalid email format";
    if (!values.Mobile.trim()) errs.Mobile = "Phone number is required";
    else if (values.Mobile.length !== 10) errs.Mobile = "Enter a valid 10-digit number";
    if (!values.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    const hasErrors = Object.values(validationErrors).some(Boolean);
    if (hasErrors) return;

    setStatus("sending");
    try {
      await emailjs.send(
        "service_utaov18",
        "template_019u19s",
        { username: formData.username, email: formData.email, Mobile: formData.Mobile, message: formData.message },
        "9T_eDZ8YhD8nTACAG"
      );
      setStatus("success");
      setFormData(initialValues);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="Contact" className="py-24 bg-bg-primary relative overflow-hidden">
      <div
        className="orb w-96 h-96"
        style={{ background: "#a855f7", bottom: "-10%", right: "-5%" }}
      />
      <div
        className="orb w-72 h-72"
        style={{ background: "#06b6d4", top: "10%", left: "-5%" }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-mono text-sm tracking-widest uppercase mb-2">
            Get in touch
          </p>
          <h2 className="section-title gradient-text">Contact Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4 mb-4" />
          <p className="text-slate-400 max-w-md mx-auto text-sm">
            Open to new opportunities, collaborations, or just a friendly chat. Drop a message!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="glass-card p-6 mb-2">
              <h3 className="text-lg font-bold text-white mb-2">Let's work together</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I'm currently open to full-time roles, freelance projects, and exciting collaborations.
                Whether you have a question, a project idea, or just want to say hi — I'd love to hear from you!
              </p>
            </div>

            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, x: 4 }}
                className="glass-card p-4 flex items-center gap-4 card-hover group cursor-pointer"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, color: item.color }}
                >
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-slate-500 mb-0.5">{item.label}</div>
                  <div className="text-sm text-slate-300 group-hover:text-white transition-colors truncate">
                    {item.value}
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-auto text-slate-600 group-hover:text-slate-400 group-hover:translate-x-1 transition-all flex-shrink-0"
                >
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass-card p-6 sm:p-8"
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-3xl mb-4">
                  ✅
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400 text-sm mb-6">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-outline text-sm"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="text-lg font-bold text-white mb-6">Send a Message</h3>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      className={`form-input ${errors.username ? "!border-red-500/60 !bg-red-500/5" : ""}`}
                      type="text"
                      name="username"
                      placeholder="Sunny Kumar Ray"
                      value={formData.username}
                      onChange={handleChange}
                    />
                    {errors.username && (
                      <p className="text-xs text-red-400 mt-1">{errors.username}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      className={`form-input ${errors.Mobile ? "!border-red-500/60 !bg-red-500/5" : ""}`}
                      type="tel"
                      name="Mobile"
                      placeholder="9958693592"
                      maxLength={10}
                      value={formData.Mobile}
                      onChange={handleChange}
                    />
                    {errors.Mobile && (
                      <p className="text-xs text-red-400 mt-1">{errors.Mobile}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    className={`form-input ${errors.email ? "!border-red-500/60 !bg-red-500/5" : ""}`}
                    type="email"
                    name="email"
                    placeholder="hello@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    className={`form-input resize-none h-28 ${errors.message ? "!border-red-500/60 !bg-red-500/5" : ""}`}
                    name="message"
                    placeholder="Tell me about your project or just say hi..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-400 mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full justify-center"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="animate-spin relative z-10" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-slate-600 text-sm">
            Designed & built by{" "}
            <span className="gradient-text font-semibold">Sunny Kumar Ray</span>{" "}
            · {new Date().getFullYear()} · All rights reserved
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

