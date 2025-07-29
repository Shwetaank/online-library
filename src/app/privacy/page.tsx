"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Eye, Lock, Database, UserCheck, Mail } from "lucide-react";
import Link from "next/link";

// Dynamic Date
const lastUpdated = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

// Motion Configs
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const sections = [
  {
    icon: Database,
    title: "📦 Information We Collect",
    content: [
      "🧾 Account information (name, email address, password)",
      "📚 Reading preferences and borrowing history",
      "💻 Device information and IP address",
      "📊 Usage analytics and interaction data",
      "📬 Communication preferences and feedback",
    ],
  },
  {
    icon: Eye,
    title: "🔍 How We Use Your Information",
    content: [
      "📖 Provide and improve our library services",
      "🤖 Personalize book recommendations",
      "📢 Send important account notifications",
      "📈 Analyze usage patterns to enhance user experience",
      "⚖️ Comply with legal obligations and prevent fraud",
    ],
  },
  {
    icon: Shield,
    title: "🛡️ Information Sharing",
    content: [
      "🚫 We never sell your personal information to third parties",
      "📄 Data may be shared with service providers under strict agreements",
      "⚖️ Legal compliance may require disclosure in specific circumstances",
      "📊 Anonymous, aggregated data may be used for research purposes",
      "🔕 You can opt out of non-essential data sharing at any time",
    ],
  },
  {
    icon: Lock,
    title: "🔐 Data Security",
    content: [
      "🔒 Industry-standard encryption for data transmission and storage",
      "🛠️ Regular security audits and vulnerability assessments",
      "🔑 Secure authentication and access controls",
      "💾 Data backup and disaster recovery procedures",
      "👨‍🏫 Employee training on data protection best practices",
    ],
  },
  {
    icon: UserCheck,
    title: "🧑‍⚖️ Your Rights",
    content: [
      "📥 Access and download your personal data",
      "✏️ Correct inaccurate or incomplete information",
      "🗑️ Delete your account and associated data",
      "📭 Opt out of marketing communications",
      "🔁 Request data portability to another service",
    ],
  },
  {
    icon: Mail,
    title: "📫 Contact Us",
    content: [
      "📧 Email our privacy team at spmorey87@gmail.com",
      "🔧 Submit requests through your account settings",
      "🏢 Mail us at 123 Library Street, Book City, BC 12345",
      "⏱️ Response time: Within 30 days for most requests",
      "🚨 Emergency privacy concerns: Contact us immediately",
    ],
  },
];

const PrivacyPage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="min-h-screen bg-white dark:bg-gray-900"
    >
      {/* Hero Section */}
      <motion.section
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      >
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
            🔒 Privacy Policy
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Privacy
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">Matters to Us</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-justify">
            We&rsquo;re committed to protecting your personal information and
            being transparent about how we collect, use, and share your data.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: {lastUpdated}
          </p>
        </div>
      </motion.section>

      {/* Sections */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-4xl grid gap-8">
          {sections.map(({ icon: Icon, title, content }, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                      {title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-justify">
                    {content.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Additional Info */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <Card className="mt-4 border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
              <CardContent className="p-8 prose dark:prose-invert prose-p:leading-relaxed prose-p:text-justify">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  📝 Important Notes
                </h3>
                <p>
                  <strong>👶 Children&rsquo;s Privacy:</strong> Our service is
                  not intended for children under 13. We do not knowingly
                  collect personal information from them.
                </p>
                <p>
                  <strong>🌍 International Users:</strong> If you&rsquo;re
                  accessing our service from outside the U.S., your information
                  may be transferred and processed in the United States.
                </p>
                <p>
                  <strong>🔁 Policy Updates:</strong> We may revise this privacy
                  policy from time to time. We&rsquo;ll notify you about any
                  significant changes.
                </p>
                <p>
                  <strong>🔗 Third-Party Links:</strong> Our service may include
                  links to third-party websites. We&rsquo;re not responsible for
                  their privacy practices.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        variants={fadeUp}
        transition={{ duration: 0.7 }}
        className="py-16 bg-gradient-to-r from-blue-600 to-purple-600"
      >
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            🧐 Questions About Your Privacy?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto text-justify">
            We&rsquo;re here to help. Contact our privacy team if you have any
            questions or concerns about how we handle your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                ✉️ Contact Privacy Team
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                ⚙️ Manage Your Data
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default PrivacyPage;
