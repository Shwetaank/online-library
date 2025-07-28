"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  Award,
  Heart,
  Globe,
  Shield,
  Zap,
  CheckCircle,
  Star,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const AboutPage = () => {
  const stats = [
    {
      icon: BookOpen,
      label: "Books Available",
      value: "10,000",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      label: "Active Members",
      value: "5,00+",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Award,
      label: "Years of Service",
      value: "5+",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Globe,
      label: "Countries Served",
      value: "15+",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Reading",
      description:
        "We believe reading transforms lives and opens minds to new possibilities and perspectives.",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description:
        "Your privacy and data security are our top priorities in everything we do.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We continuously evolve our platform to provide the best reading experience possible.",
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "Building a vibrant community of readers who share knowledge and recommendations.",
    },
  ];

  const features = [
    "Advanced search and filtering",
    "Personalized recommendations",
    "Mobile-responsive design",
    "Secure user authentication",
    "Real-time availability tracking",
    "Reading progress analytics",
    "Community reviews and ratings",
    "Multi-format book support",
  ];

  const team = [
    {
      name: "Aarav Mehta",
      role: "Chief Librarian",
      bio: "With over 18 years of experience in library science, Aarav specializes in transforming traditional libraries into digital knowledge hubs.",
      image: "/Mehta.png",
    },
    {
      name: "Neha Iyer",
      role: "Technology Director",
      bio: "A passionate full-stack developer, Neha leads our tech team to build secure, scalable, and user-friendly systems.",
      image: "/Iyer.png",
    },
    {
      name: "Rohan Kapoor",
      role: "Community Manager",
      bio: "Focused on building inclusive reader communities, Rohan fosters engagement through book clubs, events, and forums.",
      image: "/Kapoor.png",
    },
    {
      name: "Sneha Banerjee",
      role: "UX Designer",
      bio: "Sneha creates intuitive and accessible interfaces that enhance the reading experience for users of all ages.",
      image: "/Banerjee.png",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }),
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <motion.div
          className="container mx-auto px-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
            📚 About LibraryMS
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Revolutionizing
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              Library Management
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            We&apos;re on a mission to make reading more accessible, enjoyable,
            and connected.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Join Our Community
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full mb-4`}
                  >
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
              🎯 Our Mission
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Empowering Readers Worldwide
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 text-justify">
              Our mission is to democratize access to knowledge and literature
              by providing a modern, user-friendly platform that connects
              readers with books they love.
            </p>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/placeholder.svg"
              alt="Modern Library"
              width={40}
              height={40}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <Star className="h-8 w-8 text-yellow-500" />
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    4.9/5
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    User Rating
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <motion.div
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              💎 Our Values
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-justify">
              Our core values guide every decision we make and every feature we
              build.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-4 mx-auto">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-justify">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <motion.div
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
              👥 Our Team
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Meet the People Behind LibraryMS
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-justify">
              Our diverse team of librarians, developers, and designers work
              together to create the best reading experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={100}
                      height={100}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-justify">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <motion.div
          className="container mx-auto px-4 text-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Reading Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of readers who have already discovered their next
            favorite book with LibraryMS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Get Started Free
              </Button>
            </Link>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Browse Books
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
