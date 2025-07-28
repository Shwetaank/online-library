"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  Search,
  ChevronDown,
  ChevronRight,
  BookOpen,
  User,
  CreditCard,
  Settings,
  Shield,
  HelpCircle,
  MessageCircle,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const categories = [
  {
    id: "general",
    name: "📚 General",
    icon: BookOpen,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "account",
    name: "👤 Account",
    icon: User,
    color: "from-green-500 to-green-600",
  },
  {
    id: "borrowing",
    name: "📖 Borrowing",
    icon: BookOpen,
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "technical",
    name: "🛠 Technical",
    icon: Settings,
    color: "from-orange-500 to-orange-600",
  },
  {
    id: "billing",
    name: "💳 Billing",
    icon: CreditCard,
    color: "from-red-500 to-red-600",
  },
  {
    id: "privacy",
    name: "🔒 Privacy",
    icon: Shield,
    color: "from-indigo-500 to-indigo-600",
  },
];

const faqData = [
  // General
  {
    category: "general",
    question: "📖 What is LibraryMS?",
    answer:
      "LibraryMS is a modern digital library that lets you browse, borrow, and read books online across genres.",
  },
  {
    category: "general",
    question: "🚀 How do I get started?",
    answer:
      "Just sign up, verify your email, and start exploring thousands of books instantly!",
  },
  {
    category: "general",
    question: "🎯 Is LibraryMS free to use?",
    answer:
      "Yes! We offer a free tier with access to thousands of books. Premium features are optional.",
  },

  // Account
  {
    category: "account",
    question: "🔐 How do I create an account?",
    answer:
      "Click the 'Sign Up' button, enter your details, and verify your email to get started.",
  },
  {
    category: "account",
    question: "🔑 I forgot my password. What now?",
    answer:
      "Click 'Forgot Password' on the login page and follow the email instructions to reset it.",
  },
  {
    category: "account",
    question: "👤 How can I update my profile?",
    answer:
      "Go to Account Settings and click 'Edit Profile' to change your name, email, or preferences.",
  },

  // Borrowing
  {
    category: "borrowing",
    question: "📘 How do I borrow a book?",
    answer:
      "Find a book, click 'Borrow', and it will appear in your personal library for reading.",
  },
  {
    category: "borrowing",
    question: "⏳ How long can I keep a book?",
    answer:
      "Free users: 14 days | Premium users: 21 days. Extensions allowed if no reservations exist.",
  },
  {
    category: "borrowing",
    question: "🔄 Can I return a book early?",
    answer:
      "Yes! You can return any borrowed book early via your Library dashboard.",
  },

  // Technical
  {
    category: "technical",
    question: "📱 Which devices are supported?",
    answer:
      "LibraryMS works on all modern browsers—desktop, mobile, tablets, and e-readers.",
  },
  {
    category: "technical",
    question: "📴 Can I read books offline?",
    answer:
      "Yes, premium users can download books and read them without internet.",
  },
  {
    category: "technical",
    question: "🧪 Are there accessibility features?",
    answer:
      "Yes! LibraryMS supports text resizing, dark mode, and screen reader compatibility.",
  },

  // Billing
  {
    category: "billing",
    question: "💰 What are the premium prices?",
    answer:
      "$9.99/month or $99/year. Includes offline reading, early releases & more.",
  },
  {
    category: "billing",
    question: "❌ Can I cancel anytime?",
    answer:
      "Yes, go to Account Settings > Billing to cancel. You'll keep access until your term ends.",
  },
  {
    category: "billing",
    question: "💳 What payment methods do you accept?",
    answer: "We accept all major credit/debit cards, PayPal, and UPI payments.",
  },

  // Privacy
  {
    category: "privacy",
    question: "🕵️‍♂️ Is my reading private?",
    answer: "Absolutely. Your activity is private and never shared or sold.",
  },
  {
    category: "privacy",
    question: "🔒 How is my data protected?",
    answer:
      "We use end-to-end encryption and are GDPR compliant to keep your data secure.",
  },
  {
    category: "privacy",
    question: "🧾 Can I delete my account and data?",
    answer:
      "Yes. Visit Account Settings > Privacy to request data deletion at any time.",
  },

  // Features
  {
    category: "features",
    question: "🧠 Can I highlight or take notes while reading?",
    answer:
      "Yes! You can highlight text and add personal notes to any book. They're saved to your account for future reference.",
  },
  {
    category: "features",
    question: "🔖 Can I bookmark pages?",
    answer:
      "Absolutely. Use the bookmark feature to save your spot and jump back anytime.",
  },
  {
    category: "features",
    question: "🗂️ Can I organize my library?",
    answer:
      "Yes! You can categorize, sort, and create custom collections in your personal library.",
  },

  // Community
  {
    category: "community",
    question: "💬 Is there a way to discuss books with other readers?",
    answer:
      "Absolutely! Join our community forums and book clubs to share reviews, insights, and connect with fellow readers.",
  },
  {
    category: "community",
    question: "📚 Are there virtual book clubs?",
    answer:
      "Yes, we host monthly virtual book clubs for members across genres and age groups.",
  },
  {
    category: "community",
    question: "👥 Can I follow other readers?",
    answer:
      "Yes! You can follow users, see their public libraries, and interact with their reviews.",
  },

  // Support
  {
    category: "support",
    question: "📩 How do I contact support if I have issues?",
    answer:
      "Click on the 'Contact Us' section or email us at support@libraryms.com. We typically respond within 24 hours.",
  },
  {
    category: "support",
    question: "📖 Is there a user guide or help center?",
    answer:
      "Yes, check out our Help Center for guides, tips, and troubleshooting steps.",
  },
  {
    category: "support",
    question: "🧑‍💻 Do you offer live chat support?",
    answer: "Yes! Live chat is available 9am–6pm IST, Monday to Saturday.",
  },
];

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getFAQsByCategory = (categoryId: string) => {
    return filteredFAQs.filter((faq) => faq.category === categoryId);
  };

  return (
    <div className="min-h-screen scroll-smooth">
      {/* Hero Section */}
      <section className="py-20 text-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
            ❓ Frequently Asked Questions
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600">
            Need Help? We&#39;ve Got Answers!
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Browse answers by topic or search below. Still stuck? Reach out to
            our support team.
          </p>
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-10 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link href={`#${category.id}`} key={category.id}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
              >
                <Card className="text-center border-0 shadow-md hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-4">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl mb-3`}
                    >
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-medium text-gray-900 dark:text-white text-sm">
                      {category.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {getFAQsByCategory(category.id).length} questions
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          {categories.map((category) => {
            const categoryFAQs = getFAQsByCategory(category.id);
            if (categoryFAQs.length === 0) return null;

            return (
              <div
                key={category.id}
                id={category.id}
                className="mb-16 scroll-mt-28"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 mb-6"
                >
                  <div
                    className={`w-10 h-10 flex items-center justify-center bg-gradient-to-r ${category.color} rounded-lg`}
                  >
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.name}
                  </h2>
                </motion.div>

                <div className="space-y-4">
                  {categoryFAQs.map((faq) => {
                    const index = faqData.indexOf(faq);
                    const isOpen = openItems.includes(index);

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.02 }}
                      >
                        <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                          <Collapsible>
                            <CollapsibleTrigger
                              className="w-full"
                              onClick={() => toggleItem(index)}
                            >
                              <CardContent className="p-6 flex items-center justify-between">
                                <h3 className="font-semibold text-gray-900 dark:text-white text-left">
                                  {faq.question}
                                </h3>
                                {isOpen ? (
                                  <ChevronDown className="h-5 w-5 text-gray-500" />
                                ) : (
                                  <ChevronRight className="h-5 w-5 text-gray-500" />
                                )}
                              </CardContent>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <CardContent className="px-6 pt-0 pb-6">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </CardContent>
                            </CollapsibleContent>
                          </Collapsible>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {filteredFAQs.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No results found
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We couldn&apos;t find any FAQs matching &quot;{searchQuery}
                &quot;. Try a different keyword or contact support.
              </p>
              <Button variant="outline" onClick={() => setSearchQuery("")}>
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <MessageCircle className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our support team is here to help. Reach out and we&apos;ll respond
            within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Contact Support
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Live Chat
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
