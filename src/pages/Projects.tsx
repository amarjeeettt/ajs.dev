import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function Projects() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[calc(90vh-88px)] text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { delay: 0.1, duration: 0.8, ease: "easeInOut" },
        }}
        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black sm:whitespace-nowrap md:whitespace-normal leading-tight"
      >
        <span className="text-red-600">Projects</span>{" "}
        <motion.span
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { delay: 0.6, duration: 0.6, ease: "easeInOut" },
          }}
          className="text-gray-800"
        >
          Section
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { delay: 0.9, duration: 0.8, ease: "easeInOut" },
        }}
        className="text-lg font-light text-gray-600 my-6 md:my-8 max-w-md mx-auto"
      >
        I&apos;m currently building this section of my portfolio.
        <br />
        Check back soon to see my latest work.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { delay: 1.4, duration: 0.8, ease: "easeInOut" },
        }}
        className="transition-transform duration-200 ease-in-out hover:scale-105"
      >
        <Link to="/">
          <Button className="bg-red-600 hover:bg-red-600/90 text-white font-semibold py-2 px-6 gap-2">
            <Home className="h-4 w-4" />
            <span>Back to Home</span>
          </Button>
        </Link>
      </motion.div>
    </main>
  );
}
