"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    const form = e.currentTarget;

    const serviceId =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_5fip37e";
    const templateId =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_9ze6qks";
    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "iOiY0Tc-XP_bAxiO-";

    try {
      // Primary attempt using sendForm
      await emailjs.sendForm(serviceId, templateId, form, {
        publicKey: publicKey,
      });

      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully. ✨",
      });
      form.reset();
    } catch (error: any) {
      console.error("EmailJS sendForm failed, attempting direct send:", error);

      // Fallback attempt using emailjs.send with explicit parameters
      try {
        const formData = new FormData(form);
        const nameVal = (formData.get("name") || formData.get("from_name")) as string;
        const emailVal = (formData.get("email") || formData.get("from_email")) as string;
        const subjectVal = formData.get("subject") as string;
        const messageVal = formData.get("message") as string;

        await emailjs.send(
          serviceId,
          templateId,
          {
            name: nameVal,
            from_name: nameVal,
            email: emailVal,
            from_email: emailVal,
            reply_to: emailVal,
            subject: subjectVal,
            message: messageVal,
          },
          publicKey
        );

        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. ✨",
        });
        form.reset();
      } catch (fallbackErr: any) {
        console.error("EmailJS direct send failed:", fallbackErr);
        setStatus({
          type: "error",
          message:
            "Failed to send email. Please verify your EmailJS Service ID & Template in EmailJS Dashboard.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      {/* Ambient Background Light */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/10 dark:bg-purple-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              Get In Touch
            </div>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-on-surface">
              Let's Build Something{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400">
                Extraordinary
              </span>
            </h2>

            <p className="text-on-surface-variant max-w-2xl text-base md:text-lg leading-relaxed">
              Have a project in mind, a question, or an opportunity? Feel free to reach out!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info Card */}
          <ScrollReveal delay={0.1}>
            <div className="glass-card p-8 md:p-10 rounded-[2rem] border border-neutral-200/80 dark:border-white/10 h-full flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-on-surface">
                  Contact Details
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  I'm always open to discussing new web development projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="space-y-6 pt-4">
                  {/* Email */}
                  <a
                    href="mailto:aktermollika49@gmail.com"
                    className="flex items-center gap-4 group p-3.5 rounded-2xl bg-neutral-100/80 dark:bg-white/5 border border-neutral-200/80 dark:border-white/10 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                        Email
                      </p>
                      <p className="text-sm font-bold text-on-surface group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        aktermollika49@gmail.com
                      </p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-neutral-100/80 dark:bg-white/5 border border-neutral-200/80 dark:border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                        Location
                      </p>
                      <p className="text-sm font-bold text-on-surface">
                        Mestre, Italy
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-neutral-200/60 dark:border-white/10">
                <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-4">
                  Connect With Me
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/mollika123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-neutral-100 dark:bg-white/10 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-on-surface hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-500/50 hover:scale-110 transition-all"
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-neutral-100 dark:bg-white/10 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-on-surface hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-500/50 hover:scale-110 transition-all"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form Card */}
          <ScrollReveal delay={0.2}>
            <div className="glass-card p-8 md:p-10 rounded-[2rem] border border-neutral-200/80 dark:border-white/10">
              <form onSubmit={sendEmail} className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant px-1">
                    Your Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full rounded-xl bg-neutral-100/80 dark:bg-white/5 border border-neutral-200 dark:border-white/10 p-3.5 text-sm text-on-surface placeholder:text-neutral-400 dark:placeholder:text-neutral-500 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant px-1">
                    Your Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full rounded-xl bg-neutral-100/80 dark:bg-white/5 border border-neutral-200 dark:border-white/10 p-3.5 text-sm text-on-surface placeholder:text-neutral-400 dark:placeholder:text-neutral-500 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant px-1">
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    placeholder="Project Inquiry / Collaboration"
                    required
                    className="w-full rounded-xl bg-neutral-100/80 dark:bg-white/5 border border-neutral-200 dark:border-white/10 p-3.5 text-sm text-on-surface placeholder:text-neutral-400 dark:placeholder:text-neutral-500 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant px-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    rows={4}
                    required
                    className="w-full rounded-xl bg-neutral-100/80 dark:bg-white/5 border border-neutral-200 dark:border-white/10 p-3.5 text-sm text-on-surface placeholder:text-neutral-400 dark:placeholder:text-neutral-500 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {status.type && (
                  <div
                    className={`p-4 rounded-xl border flex items-center gap-3 text-sm font-medium ${
                      status.type === "success"
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                        : "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 shrink-0" />
                    )}
                    <span>{status.message}</span>
                  </div>
                )}
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}