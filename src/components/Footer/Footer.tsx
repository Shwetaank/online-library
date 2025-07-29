"use client";

import React, { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import {
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Heart,
  ArrowRight,
} from "lucide-react";

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/spmorey" },
  { icon: Twitter, href: "https://x.com/Sin_Greed___" },
  { icon: Instagram, href: "https://www.instagram.com/shwetaank_/" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/shwetank-morey-a35484257",
  },
  { icon: Github, href: "https://github.com/Shwetaank" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Book Catalog", href: "/" },
  { name: "My Dashboard", href: "/dashboard" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

const services = [
  "Book Borrowing",
  "Digital Library",
  "Reading Recommendations",
  "Book Reservations",
  "Study Rooms",
  "Research Assistance",
];

const ModernFooter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Subscription failed.");

      toast.success("Subscribed successfully!");
      setEmail("");
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div {...fadeInUp} className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-500" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                LibraryMS
              </h1>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed text-justify">
              Your one-stop solution to borrow, read, and reserve books online.
              Stay connected with your reading goals.
            </p>
            <div className="flex space-x-10">
              {socials.map(({ icon: Icon, href }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400 hover:text-blue-500 transition"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div {...fadeInUp} className="space-y-3">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div {...fadeInUp} className="space-y-3">
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-gray-400 hover:text-blue-400 flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div {...fadeInUp} className="space-y-4">
            <h3 className="text-lg font-semibold">Subscribe</h3>
            <p className="text-sm text-gray-400">
              Get book updates and library news in your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <Input
                type="email"
                placeholder="Email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-r-none text-white bg-gray-800 border-gray-600 placeholder-gray-400"
              />
              <Button
                type="submit"
                disabled={loading}
                className="rounded-l-none bg-blue-600 hover:bg-blue-700"
              >
                {loading ? "..." : <Mail className="h-4 w-4" />}
              </Button>
            </form>

            <div className="text-sm space-y-1 text-gray-400 pt-4">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-500" />
                <a href="tel:+919421317759">+91 9421317759</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-500" />
                <a href="mailto:spmorey87@gmail.com">spmorey87@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-500" />
                <span>Pune, Maharashtra</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Separator className="bg-gray-700" />
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-2 md:space-y-0">
        <motion.div {...fadeInUp} className="flex items-center gap-1">
          <span>© {currentYear} LibraryMS. Built with</span>
          <a
            href="https://shwet.tech/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Shwet's website"
          >
            <Heart className="h-4 w-4 text-red-500 hover:scale-110 transition-transform" />
          </a>

          <span>for readers.</span>
        </motion.div>
        <motion.div {...fadeInUp} className="flex space-x-6">
          <Link href="/privacy" className="hover:text-blue-400">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-blue-400">
            Terms
          </Link>
          <Link href="/cookies" className="hover:text-blue-400">
            Cookies
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};

export default ModernFooter;
