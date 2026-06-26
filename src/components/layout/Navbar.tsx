"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// Types
interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

// Logo Component
const Logo = () => (
  <Link href="/" className="flex items-center gap-2 group">
    {/* Golden/Black circular badge inspired by the reference image */}
    <div className="relative w-10 h-10 rounded-full bg-gradient-to-b from-[#1c1c1e] to-[#050505] border border-amber-500/30 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-amber-400/60 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.25)]">
      {/* Subtle hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
      {/* User brand image logo */}
      <img
        src="/nexyrium.jpeg"
        alt="Nexyrium Logo"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
    </div>
    <span className="font-semibold text-sm tracking-[0.2em] text-zinc-100 group-hover:text-amber-400 transition-colors duration-300 hidden sm:inline-block">
      NEXYRIUM
    </span>
  </Link>
);

// Rollup NavLink Component
const NavLink = ({ href, label, isActive, onClick }: NavLinkProps) => {
  return (
    <Link href={href} onClick={onClick} className="relative block py-1.5 px-3">
      <div className="relative h-[20px] overflow-hidden group">
        <div
          className={cn(
            "flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]",
            "group-hover:-translate-y-1/2"
          )}
        >
          {/* Default state */}
          <span
            className={cn(
              "h-[20px] flex items-center text-sm font-medium tracking-wide transition-colors duration-300",
              isActive ? "text-amber-400 font-semibold" : "text-zinc-400 group-hover:text-amber-300"
            )}
          >
            {label}
          </span>
          {/* Rollup state */}
          <span className="h-[20px] flex items-center text-sm font-semibold tracking-wide text-amber-400">
            {label}
          </span>
        </div>
      </div>

      {/* Active Dot and Glow Indicator */}
      {isActive && (
        <motion.span
          layoutId="activeIndicator"
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
};

// Direct Chat Component (Rolls up to "Let's Talk!")
const DirectChat = () => {
  return (
    <a
      href="https://wa.me/918979952549"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex items-center gap-2 group text-sm font-medium tracking-wide mr-2"
    >
      <div className="relative h-[20px] overflow-hidden">
        <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
          {/* Default */}
          <span className="h-[20px] flex items-center gap-1.5 text-zinc-400 group-hover:text-amber-300 transition-colors duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Direct Chat
          </span>
          {/* Hover rollup */}
          <span className="h-[20px] flex items-center gap-1.5 text-amber-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Let's Talk!
          </span>
        </div>
      </div>
    </a>
  );
};

// Book Consultation Primary CTA Button
const BookConsultation = () => {
  return (
    <a
      href="https://wa.me/918979952549"
      target="_blank"
      rel="noopener noreferrer"
      className="relative px-5 py-2 rounded-full overflow-hidden text-xs sm:text-sm font-semibold tracking-wide text-black bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 hover:from-amber-300 hover:via-amber-100 hover:to-amber-400 transition-all duration-300 shadow-[0_4px_15px_rgba(212,175,55,0.2)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1 group"
    >
      {/* Light reflection sweep */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      <span className="relative z-10">Consult</span>
      <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Why Us", href: "#why-us" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ScrollSpy to highlight the active section
  useEffect(() => {
    const sections = ["services", "process", "why-us", "testimonials", "faq", "contact"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px", // Trigger when the section occupies the viewport center
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Smooth scroll handler
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 100; // Offset for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(targetId);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 sm:px-6 py-4 pointer-events-none"
      >
        <div
          className={cn(
            "w-full max-w-5xl flex items-center justify-between pointer-events-auto transition-all duration-500 ease-out",
            "rounded-full bg-black/40 border border-amber-500/10 backdrop-blur-md shadow-2xl",
            isScrolled
              ? "py-2.5 px-5 bg-[#050505]/85 border-amber-500/20 backdrop-blur-xl shadow-[0_15px_40px_-15px_rgba(0,0,0,0.8),0_1px_2px_rgba(212,175,55,0.15)] scale-[0.98]"
              : "py-4 px-6 scale-100"
          )}
        >
          {/* Logo on the left */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Navigation links (Desktop/Tablet) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-3 bg-zinc-950/20 px-1.5 py-1 rounded-full border border-zinc-800/20">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                href={link.href}
                label={link.label}
                isActive={activeSection === link.href.replace("#", "")}
                onClick={(e) => handleScrollToSection(e, link.href)}
              />
            ))}
          </nav>

          {/* CTA Section on the right */}
          <div className="flex items-center gap-2 sm:gap-4">
            <DirectChat />
            <BookConsultation />
            
            {/* Hamburger Button for Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex md:hidden p-2 rounded-full border border-zinc-800 hover:border-amber-500/30 transition-all bg-zinc-950/40 text-zinc-300 hover:text-amber-400"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[88px] z-40 mx-4 pointer-events-auto md:hidden"
          >
            <div className="w-full bg-[#050505]/95 border border-amber-500/20 backdrop-blur-2xl rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_20px_rgba(212,175,55,0.05)]">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.label}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleScrollToSection(e, link.href)}
                      className={cn(
                        "block py-2.5 px-4 text-base font-medium rounded-xl transition-all border",
                        activeSection === link.href.replace("#", "")
                          ? "text-amber-400 bg-amber-500/5 border-amber-500/20 font-semibold"
                          : "text-zinc-400 border-transparent hover:text-amber-300 hover:bg-white/5"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-6 pt-6 border-t border-zinc-800/80 flex flex-col gap-4">
                <Link
                  href="#contact"
                  onClick={(e) => handleScrollToSection(e, "#contact")}
                  className="flex items-center justify-between py-2.5 px-4 text-sm font-medium text-zinc-300 hover:text-amber-300 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Direct Chat
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <Link
                  href="#contact"
                  onClick={(e) => handleScrollToSection(e, "#contact")}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 text-black font-semibold text-center shadow-[0_4px_15px_rgba(212,175,55,0.15)] flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Book Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
