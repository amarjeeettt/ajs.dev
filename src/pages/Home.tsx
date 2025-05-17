import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Mail, Download } from "lucide-react";

export default function Home() {
  const sendEmail = () => {
    const email = import.meta.env.VITE_CONTACT_EMAIL;
    window.location.href = `mailto:${email}`;
  };

  const previewPDF = () => {
    window.open("/resume/Amarjeet-Singh-Resume.pdf", "_blank");
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[calc(90vh-88px)] text-center">
      {/* Greeting */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { delay: 0.1, duration: 0.8, ease: "easeInOut" },
        }}
        className="w-full sm:w-4/5 lg:w-3/4 mb-2"
      >
        <h1 className="font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Hi, I&apos;m{" "}
          <motion.span
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { delay: 0.6, duration: 0.6, ease: "easeInOut" },
            }}
            className="text-red-600 inline-block"
          >
            Amarjeet Singh
          </motion.span>
        </h1>
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { delay: 1.2, duration: 0.8, ease: "easeInOut" },
        }}
        className="w-full overflow-hidden mb-6"
      >
        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black sm:whitespace-nowrap md:whitespace-normal leading-tight">
          <motion.span
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { delay: 0.7, duration: 0.8, ease: "easeInOut" },
            }}
            className="text-red-600 inline"
          >
            Software
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { delay: 1.6, duration: 0.8, ease: "easeInOut" },
            }}
            className="inline"
          >
            Engineer
          </motion.span>
        </h2>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { delay: 2.2, duration: 0.8, ease: "easeInOut" },
        }}
        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
          }}
        >
          <Button
            variant="outline"
            onClick={sendEmail}
            className="button-outline"
          >
            <Mail className="h-4 sm:h-5 w-4 sm:w-5" />
            <span className="hidden sm:inline">amarjeet060730@gmail.com</span>
            <span className="sm:hidden">Email Me</span>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: { delay: 2.6, duration: 0.8, ease: "easeInOut" },
          }}
        >
          <Button onClick={previewPDF} className="button-primary">
            <Download className="h-4 sm:h-5 w-4 sm:w-5" />
            <span>Download CV</span>
          </Button>
        </motion.div>
      </motion.div>
    </main>
  );
}
