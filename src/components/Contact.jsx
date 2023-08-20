import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  //  CODE FOR SHOWING SUCCESS MESSAGE ON TOP OF SCREEN AFTER EMAIL IS SENT
  const showSuccess = () => {
    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000); // Remove the message after 5 seconds (adjust as needed)
  };

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // ===============================================================
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  // HANDLE SUBMIT CODE===================================
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // code for email.js
    emailjs
      .send(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Ali Murad",
          from_email: form.email,
          to_email: "itsaly10@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAIL_API
      )
      .then(
        () => {
          setLoading(false);
          showSuccess();

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong");
          console.error("Email sending failed:", error);
          // Display an error message to the user
        }
      );
  };
  // HANDLE SUBMIT CODE/ ===================================
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-5 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
      {/* CODE FOE SUCCESS MSG POPUP */}
      {showSuccessMessage && (
        <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 opacity-95 text-white p-2 text-center rounded-lg transition-transform duration-1000 ease-out hover:scale-100">
          <p className="text-sm font-bold">
            Thank You So Much for Contacting! I will get back to you as soon as
            possible.
          </p>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
