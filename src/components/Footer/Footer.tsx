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

const socials = [Facebook, Twitter, Instagram, Linkedin, Github];

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
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast("Thank you for subscribing to our newsletter!");
      setEmail("");
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div {...fadeInUp} className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  LibraryMS
                </span>
                <div className="text-xs text-gray-400">
                  Modern Library System
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Discover, borrow, and manage your favorite books with our modern
              library management system. Join thousands of readers in their
              literary journey.
            </p>
            <div className="flex space-x-3">
              {socials.map((Icon, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-blue-600 hover:text-white transition-colors"
                    aria-label={Icon.name}
                  >
                    <Icon className="h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div {...fadeInUp} className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div {...fadeInUp} className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm flex items-center group cursor-pointer hover:text-blue-400 transition-colors">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Contact */}
          <motion.div {...fadeInUp} className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <p className="text-gray-300 text-sm">
              Subscribe to our newsletter for book recommendations and library
              updates.
            </p>

            <motion.form
              onSubmit={handleNewsletterSubmit}
              className="space-y-2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 rounded-r-none focus:border-blue-500"
                  required
                />
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 rounded-l-none px-3"
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </motion.form>

            <div className="space-y-2 pt-4 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>info@libraryms.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>123 Library St, Book City</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.div
            {...fadeInUp}
            className="flex items-center space-x-1 text-sm text-gray-400"
          >
            <span>© {currentYear} LibraryMS. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>for book lovers everywhere.</span>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="flex items-center space-x-6 text-sm"
          >
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Cookie Policy
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;
