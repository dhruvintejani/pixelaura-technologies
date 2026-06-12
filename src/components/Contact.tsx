import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { emailjsConfig } from "@/utils/emailjs";
import emailjs from "@emailjs/browser";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = "Please enter your full name (min. 2 characters).";
  }
  if (!values.email.trim()) {
    errors.email = "Please enter a valid email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }
  return errors;
}

const WHATSAPP_NUMBER = "919913871759";
const WHATSAPP_MSG = encodeURIComponent(
  "Hello! I came across PixelAura Technologies and I'd love to discuss a project.",
);

export default function Contact() {
  const { ref, isInView } = useScrollReveal(0.08);
  const formRef = useRef<HTMLFormElement>(null);

  const [values, setValues] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (touched[name]) {
      const newErrors = validate({ ...values, [name]: value });
      setErrors((prev) => ({
        ...prev,
        [name]: newErrors[name as keyof FormErrors],
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    const newErrors = validate(values);
    setErrors((prev) => ({
      ...prev,
      [name]: newErrors[name as keyof FormErrors],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const allTouched = {
      name: true,
      email: true,
      message: true,
    };

    setTouched(allTouched);

    const formErrors = validate(values);
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) return;

    setSubmitting(true);

    try {
      const templateParams = {
        name: values.name,
        time: new Date().toLocaleString(),
          source: "PixelAura Website",
        message: `Email: ${values.email}

${values.message}`,

        from_name: values.name,
        from_email: values.email,
        reply_to: values.email,

        to_email: "dhruvintejani.work@gmail.com",
      };

      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey,
      );

      setSubmitting(false);
      setSubmitted(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitting(false);
      alert("Failed to send message. Please try again.");
    }
  };

  const resetForm = () => {
    setValues({ name: "", email: "", message: "" });
    setErrors({});
    setTouched({});
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-28 lg:py-25 bg-[#f5f1ea]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          ref={ref}
          className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start"
        >
          {/* LEFT: Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="section-label">Contact</span>
              <span className="w-8 h-px bg-[#b89b5e]" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="font-serif-display text-[#1f1f1f] mb-6"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                lineHeight: 1.15,
              }}
            >
              Let's build something
              <br />
              <span className="italic text-[#1e2a39]">
                remarkable together.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.22 }}
              className="text-[#555555] text-sm leading-relaxed font-sans-body font-light max-w-sm mb-10"
            >
              Have a project in mind? Looking for a dedicated developer to bring
              your idea to life? Drop a message — every enquiry is taken
              seriously.
            </motion.p>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.32 }}
              className="flex flex-col gap-5 mb-8"
            >
              <a
                href="tel:9913871759"
                className="group flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full border border-[#e7e2db] bg-[#faf9f6] flex items-center justify-center text-[#1e2a39] group-hover:bg-[#1e2a39] group-hover:text-[#faf9f6] group-hover:border-[#1e2a39] transition-all duration-300 flex-shrink-0">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-[#555555] font-sans-body uppercase tracking-widest mb-0.5">
                    Phone
                  </p>
                  <p className="text-sm font-semibold text-[#1f1f1f] font-sans-body group-hover:text-[#1e2a39] transition-colors duration-300">
                    +91 99138 71759
                  </p>
                </div>
              </a>

              <a
                href="mailto:dhruvintejani.work@gmail.com"
                className="group flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full border border-[#e7e2db] bg-[#faf9f6] flex items-center justify-center text-[#1e2a39] group-hover:bg-[#1e2a39] group-hover:text-[#faf9f6] group-hover:border-[#1e2a39] transition-all duration-300 flex-shrink-0">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-[#555555] font-sans-body uppercase tracking-widest mb-0.5">
                    Email
                  </p>
                  <p className="text-sm font-semibold text-[#1f1f1f] font-sans-body group-hover:text-[#1e2a39] transition-colors duration-300 break-all">
                    dhruvintejani.work@gmail.com
                  </p>
                </div>
              </a>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.42 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#25D366] text-white text-sm font-semibold font-sans-body tracking-wide hover:bg-[#1ebe5d] transition-colors duration-300 shadow-[0_4px_16px_rgba(37,211,102,0.25)]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </motion.a>
          </div>

          {/* RIGHT: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="p-8 lg:p-10 lg:mt-10 rounded-2xl border border-[#e7e2db] bg-[#faf9f6]">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#1e2a39] flex items-center justify-center mb-6">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#faf9f6"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3
                      className="font-serif-display text-2xl text-[#1f1f1f] mb-3"
                      style={{ fontFamily: "'DM Serif Display', serif" }}
                    >
                      Message Received
                    </h3>
                    <p className="text-sm text-[#555555] font-sans-body font-light mb-8 max-w-xs leading-relaxed">
                      Thank you for reaching out. I'll review your message and
                      get back to you within 24 hours.
                    </p>
                    <button
                      onClick={resetForm}
                      className="text-xs cursor-pointer font-semibold text-[#1e2a39] font-sans-body tracking-wide uppercase border-b border-[#1e2a39]/30 hover:border-[#b89b5e] hover:text-[#b89b5e] transition-colors duration-300 pb-0.5"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    noValidate
                    className="flex flex-col gap-6"
                  >
                    <div className="mb-2">
                      <h3
                        className="font-serif-display text-xl text-[#1f1f1f] mb-1"
                        style={{ fontFamily: "'DM Serif Display', serif" }}
                      >
                        Send a message
                      </h3>
                      <p className="text-xs text-[#555555] font-sans-body font-light">
                        All fields are required.
                      </p>
                    </div>

                    {/* Name */}
                    <FormField
                      label="Your Name"
                      name="name"
                      type="text"
                      value={values.name}
                      error={touched.name ? errors.name : undefined}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="John Smith"
                    />

                    {/* Email */}
                    <FormField
                      label="Email Address"
                      name="email"
                      type="email"
                      value={values.email}
                      error={touched.email ? errors.email : undefined}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="john@example.com"
                    />

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#1f1f1f] font-sans-body tracking-wide uppercase">
                        Message
                      </label>
                      <div
                        className={`relative rounded-xl border transition-all duration-250 ${
                          touched.message && errors.message
                            ? "border-red-400/60 bg-red-50/30"
                            : "border-[#e7e2db] bg-[#f5f1ea] focus-within:border-[#1e2a39]/30 focus-within:bg-white"
                        }`}
                      >
                        <textarea
                          name="message"
                          value={values.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Tell me about your project, timeline, and goals..."
                          rows={5}
                          className="w-full bg-transparent px-4 py-3.5 text-sm text-[#1f1f1f] font-sans-body placeholder:text-[#b0a99a] outline-none resize-none"
                        />
                      </div>
                      <AnimatePresence>
                        {touched.message && errors.message && (
                          <FieldError message={errors.message} />
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={submitting}
                      whileHover={submitting ? {} : { y: -2 }}
                      whileTap={submitting ? {} : { scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 flex items-center justify-center gap-3 px-8 py-4 bg-[#1e2a39] text-[#faf9f6] rounded-full text-sm font-semibold tracking-wider uppercase font-sans-body transition-all duration-300 hover:bg-[#2a3a4d] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <svg
                            className="animate-spin"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              strokeOpacity="0.25"
                            />
                            <path
                              d="M12 2a10 10 0 0 1 10 10"
                              strokeLinecap="round"
                            />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path
                              d="M5 12h14M12 5l7 7-7 7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

type FormFieldProps = {
  label: string;
  name: string;
  type: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder: string;
};

function FormField({
  label,
  name,
  type,
  value,
  error,
  onChange,
  onBlur,
  placeholder,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-[#1f1f1f] font-sans-body tracking-wide uppercase">
        {label}
      </label>
      <div
        className={`relative rounded-xl border transition-all duration-250 ${
          error
            ? "border-red-400/60 bg-red-50/30"
            : "border-[#e7e2db] bg-[#f5f1ea] focus-within:border-[#1e2a39]/30 focus-within:bg-white"
        }`}
      >
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className="w-full bg-transparent px-4 py-3.5 text-sm text-[#1f1f1f] font-sans-body placeholder:text-[#b0a99a] outline-none"
        />
      </div>
      <AnimatePresence>
        {error && <FieldError message={error} />}
      </AnimatePresence>
    </div>
  );
}

function FieldError({ message }: { message: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="flex items-center gap-1.5 text-xs text-red-500 font-sans-body font-medium"
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      {message}
    </motion.p>
  );
}
