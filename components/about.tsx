// client-side component
"use client";

// Import necessary dependencies and components.
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

// Define the About component.
const About = () => {
  // Use the useSectionInView custom hook to track when the "About" section is in view.
  const { ref } = useSectionInView("About");

  // Return the About section, which uses framer-motion for animations.
  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      {/* Display the section heading for "About us." */}
      <SectionHeading>About Us</SectionHeading>

      {/* Display a paragraph with information about Galah Studio's background and focus. */}
      <p className="mb-3">
        Galah Studio is dedicated to crafting exquisite <b className="font-medium">animation shows and commercials</b>. Our team of experienced filmmakers and animators brings stories to life with creativity and passion. We also specialize in producing high-quality <b className="font-medium">live-action commercials</b>, ensuring top-notch visual storytelling in every project.
      </p>

      {/* Display another paragraph about the studio's philosophy and approach. */}
      <p>
        Our focus is on delivering visually stunning and emotionally engaging content. We believe in the power of storytelling and strive to create works that resonate with audiences. Whether it's an animation show or a live-action commercial, our goal is to captivate and inspire.
      </p>
    </motion.section>
  );
};

// Export the About component.
export default About;
