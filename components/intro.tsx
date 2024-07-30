// Import necessary dependencies
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { EXTRA_LINKS } from "@/constants";

// Define the Intro component
const Intro = () => {
  return (
    <section id="home" className="text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Welcome to Galah Studio</h1>
        <p className="text-xl text-gray-600 mb-8">
          We are a leading animation studio specializing in high-quality 2D animation and exceptional animation services.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Image
            src="/path/to/your/image.jpg" // Replace with the actual path to your image
            alt="Galah Studio"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <div className="flex justify-center space-x-4 mb-8">
          <Link href={EXTRA_LINKS.Youtube} target="_blank" rel="noreferrer noopener">
            <FaYoutube className="text-3xl text-gray-600 hover:text-red-600" />
          </Link>
          <Link href={EXTRA_LINKS.Instagram} target="_blank" rel="noreferrer noopener">
            <FaInstagram className="text-3xl text-gray-600 hover:text-pink-600" />
          </Link>
          <Link href={EXTRA_LINKS.X} target="_blank" rel="noreferrer noopener">
            <FaTwitter className="text-3xl text-gray-600 hover:text-blue-600" />
          </Link>
          <Link href={EXTRA_LINKS.Behance} target="_blank" rel="noreferrer noopener">
            <FaLinkedin className="text-3xl text-gray-600 hover:text-blue-600" />
          </Link>
        </div>
        <Link
          href={EXTRA_LINKS.CV}
          className="inline-flex items-center text-lg font-semibold text-white bg-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700"
          target="_blank"
          rel="noreferrer noopener"
        >
          Download CV <HiDownload className="ml-2" />
        </Link>
      </div>
    </section>
  );
};

// Export the Intro component
export default Intro;
