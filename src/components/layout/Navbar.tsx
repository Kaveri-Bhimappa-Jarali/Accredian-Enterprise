"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";

const navLinks = [
  { name: "Programs", href: "programs", hasDropdown: true },
  { name: "About Us", href: "about" },
  { name: "Why Accredian", href: "why-choose-us" },
  { name: "Testimonials", href: "testimonials" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sectionIds = useMemo(() => navLinks.map(link => link.href), []);
  const activeSection = useActiveSection(sectionIds, 120);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2"
          aria-label="Accredian Enterprise Home"
        >
          <div className="bg-primary text-primary-foreground font-bold text-xl px-2 py-1 rounded">
            accredian
          </div>
          <span className="text-foreground font-semibold text-lg hidden sm:block">
            Enterprise
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <Link
                key={link.name}
                href={`#${link.href}`}
                className={cn(
                  "text-sm font-medium transition-colors flex items-center gap-1",
                  isActive ? "text-primary font-semibold" : "text-foreground/80 hover:text-primary"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-4 h-4" aria-hidden="true" />}
              </Link>
            );
          })}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" className="text-foreground">
            Log in
          </Button>
          <Button>Enquire Now</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-foreground rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg lg:hidden overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-2" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <Link
                    key={link.name}
                    href={`#${link.href}`}
                    className={cn(
                      "text-base font-medium py-3 px-4 rounded-md flex justify-between items-center transition-colors",
                      isActive ? "bg-primary/10 text-primary font-semibold" : "text-foreground hover:bg-secondary"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-4 h-4" aria-hidden="true" />}
                  </Link>
                );
              })}
              <div className="flex flex-col gap-3 mt-4 px-2">
                <Button variant="outline" className="w-full justify-center">
                  Log in
                </Button>
                <Button className="w-full justify-center">Enquire Now</Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
