import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

import { Menu, X, Github, Linkedin } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { route: "Home", link: "/" },
    { route: "About", link: "/about" },
    { route: "Projects", link: "/projects" },
  ];

  const socialLinks = [
    {
      icon: Github,
      link: "https://github.com/amarjeeettt",
      label: "GitHub Profile",
    },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/amarjeet-singh-8a768a202/",
      label: "LinkedIn Profile",
    },
  ];

  return (
    <header className="navbar-header">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { delay: 0.1, duration: 0.6, ease: "easeInOut" },
        }}
      >
        <Link to="/" className="text-2xl font-bold inline-flex tracking-tight">
          <span>ajs</span>
          <span className="text-red-600">.dev</span>
        </Link>
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
        {navItems.map((item, index) => (
          <motion.div
            key={item.route}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                delay: 0.2 + index * 0.1,
                duration: 0.6,
                ease: "easeInOut",
              },
            }}
          >
            <NavLink
              key={item.route}
              to={item.link}
              className={({ isActive }) =>
                cn(
                  "relative transition-colors duration-200 group hover:text-red-600",
                  isActive ? "text-red-600" : ""
                )
              }
            >
              {({ isActive }) => (
                <>
                  {item.route}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-red-600 rounded-full transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </>
              )}
            </NavLink>
          </motion.div>
        ))}

        {/* Social Icons for Desktop*/}
        <div className="flex items-center gap-4 pl-4 border-l border-gray-200 dark:border-gray-700">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  delay: 0.5 + index * 0.1,
                  duration: 0.6,
                  ease: "easeInOut",
                },
              }}
            >
              <social.icon className="h-5 w-5" />
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="relative lg:hidden">
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { delay: 0.3, duration: 0.6, ease: "easeInOut" },
              }}
            >
              <Button
                variant="ghost"
                size="icon"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center"
              >
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <Menu
                    className={cn(
                      "absolute h-5 w-5 transition-all duration-300",
                      isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                    )}
                  />
                  <X
                    className={cn(
                      "absolute h-5 w-5 transition-all duration-300",
                      isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                    )}
                  />
                </div>
              </Button>
            </motion.div>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            sideOffset={8}
            className="w-56 p-2 border-none shadow-lg rounded-xl"
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.route}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: index * 0.1,
                      duration: 0.6,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <NavLink
                    key={item.route}
                    to={item.link}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "block w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                        isActive &&
                          "bg-gray-50 dark:bg-gray-800/30 text-red-600",
                        "hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-red-600 dark:hover:text-red-500"
                      )
                    }
                  >
                    {item.route}
                  </NavLink>
                </motion.div>
              ))}

              {/* Social Links for Mobile */}
              <div className="mt-2 pt-2 border-t border-gray-100 dark:border-gray-800">
                <div className="px-4 py-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Connect
                </div>
                <div className="flex gap-2 px-4 py-2">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center h-9 w-9 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                      aria-label={social.label}
                      initial={{ scale: 0 }}
                      animate={{
                        scale: 1,
                        transition: {
                          delay: 0.3 + index * 0.1,
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        },
                      }}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}
