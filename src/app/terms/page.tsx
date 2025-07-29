"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Scale,
  UserCheck,
  AlertTriangle,
  Shield,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// 📅 Format current date
const getFormattedDate = () => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date().toLocaleDateString("en-US", options);
};

// 🎞️ Animation config
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
  },
  viewport: { once: true },
};

const TermsPage: React.FC = () => {
  const lastUpdated = getFormattedDate();

  const sections = [
    {
      icon: UserCheck,
      title: "✅ Acceptance of Terms",
      content: [
        "By accessing LibraryMS, you agree to be bound by these terms.",
        "You must be at least 13 years old to use our service.",
        "If you disagree with any part of these terms, you may not use our service.",
        "We may update these terms at any time with or without notice.",
        "Continued use of the service constitutes your acceptance of any changes.",
      ],
    },
    {
      icon: FileText,
      title: "📚 Use of Service",
      content: [
        "LibraryMS is intended for educational and personal use only.",
        "You may borrow, return, and reserve books as per your membership level.",
        "Sharing your login credentials is strictly prohibited.",
        "You are responsible for all activity under your account.",
        "We reserve the right to suspend accounts for misuse or fraud.",
      ],
    },
    {
      icon: Scale,
      title: "🧑‍⚖️ User Responsibilities",
      content: [
        "Provide accurate and up-to-date registration details.",
        "Return physical/digital materials within the due date.",
        "Report lost/damaged items immediately.",
        "Respect other users and library staff.",
        "Use the system ethically and within applicable laws.",
      ],
    },
    {
      icon: AlertTriangle,
      title: "🚫 Prohibited Activities",
      content: [
        "Tampering with the system to bypass borrowing limits.",
        "Uploading malicious files or content.",
        "Using bots or scraping the library content.",
        "Harassment, hate speech, or abusive behavior.",
        "Any activity that violates copyright laws or local regulations.",
      ],
    },
    {
      icon: Shield,
      title: "🛡️ Intellectual Property",
      content: [
        "All content is protected by applicable copyright laws.",
        "The LibraryMS logo and branding are proprietary assets.",
        "Users may not copy, modify, or redistribute platform content.",
        "Permitted usage is restricted to personal study and research.",
        "Contact us if you believe your intellectual property has been infringed.",
      ],
    },
    {
      icon: Mail,
      title: "📩 Limitation of Liability",
      content: [
        "Service is provided 'as is' without warranties.",
        "We are not liable for service interruptions or data loss.",
        "Our liability is limited to any fees paid in the last 12 months.",
        "We are not responsible for third-party content or linked services.",
        "Some jurisdictions may not allow these exclusions or limitations.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <motion.section
        className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        {...fadeUp}
      >
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
            📋 Terms of Service
          </Badge>
          <motion.h1
            className="text-4xl lg:text-6xl font-bold mb-6"
            {...fadeUp}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Terms of
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">Service</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 mb-4"
            {...fadeUp}
          >
            Please review the following terms before using LibraryMS.
          </motion.p>
          <motion.p
            className="text-sm text-gray-500 dark:text-gray-400"
            {...fadeUp}
          >
            Last updated: {lastUpdated}
          </motion.p>
        </div>
      </motion.section>

      {/* Terms Sections */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-4xl grid gap-8">
          {sections.map((section, index) => (
            <motion.div key={index} {...fadeUp}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                      <section.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      {section.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div {...fadeUp}>
            <Card className="mt-8 border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  ❓ Questions About These Terms?
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>📬 Contact us:</p>
                  <ul className="space-y-2">
                    <li>📧 Email: spmorey87@gmail.com</li>
                    <li>📞 Phone: +91 9421317759</li>
                    <li>📫 Address: 123 Library Lane, Pune ,India </li>
                  </ul>
                  <p className="text-sm">
                    ⏱️ Response time: within 5 business days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Footer */}
      <motion.section
        className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-center"
        {...fadeUp}
      >
        <div className="container mx-auto px-4">
          <Scale className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            🚀 Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            By registering, you agree to these terms. Join thousands of
            satisfied LibraryMS users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                ✍️ Create Account
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                📞 Contact Legal Team
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default TermsPage;
