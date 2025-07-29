"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Settings, BarChart3, Target, Shield, Cookie } from "lucide-react";
import { toast } from "sonner";

const COOKIE_STORAGE_KEY = "cookie-preferences";

const defaultPreferences = {
  essential: true,
  analytics: false,
  marketing: false,
  personalization: false,
};

type PreferenceType = keyof typeof defaultPreferences;

const cookieTypes: {
  icon: React.ElementType;
  title: string;
  description: string;
  required: boolean;
  type: PreferenceType;
  examples: string[];
}[] = [
  {
    icon: Shield,
    title: "🛡️ Essential Cookies",
    description: "Required for basic site functionality and security.",
    required: true,
    type: "essential",
    examples: [
      "Authentication and login status",
      "Session management",
      "Security tokens",
      "Language settings",
    ],
  },
  {
    icon: BarChart3,
    title: "📊 Analytics Cookies",
    description: "Help us understand how visitors use our website.",
    required: false,
    type: "analytics",
    examples: [
      "Page views and interactions",
      "Popular content detection",
      "Performance tracking",
    ],
  },
  {
    icon: Target,
    title: "🎯 Marketing Cookies",
    description: "Used to deliver personalized advertisements.",
    required: false,
    type: "marketing",
    examples: [
      "Ad targeting",
      "Social media integration",
      "Campaign effectiveness",
    ],
  },
  {
    icon: Settings,
    title: "⚙️ Personalization Cookies",
    description: "Customize your experience based on your preferences.",
    required: false,
    type: "personalization",
    examples: ["Theme preferences", "Search history", "Book recommendations"],
  },
];

const CookiesPage = () => {
  const [preferences, setPreferences] = useState(defaultPreferences);
  const [showBanner, setShowBanner] = useState(false);

  const lastUpdated = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_STORAGE_KEY);
    if (stored) {
      setPreferences(JSON.parse(stored));
    } else {
      setShowBanner(true);
    }
  }, []);

  const handlePreferenceChange = (type: PreferenceType, value: boolean) => {
    if (type === "essential") return;
    const updated = { ...preferences, [type]: value };
    setPreferences(updated);
    localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(updated));
  };

  const savePreferences = () => {
    localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(preferences));
    toast.success("💾 Preferences saved. Your choices are respected.");
    setShowBanner(false);
  };

  const acceptAll = () => {
    const allEnabled = {
      essential: true,
      analytics: true,
      marketing: true,
      personalization: true,
    };
    setPreferences(allEnabled);
    localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(allEnabled));
    toast.success("🎉 All cookies accepted. Enjoy the full experience!");
    setShowBanner(false);
  };

  const rejectOptional = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false,
      personalization: false,
    };
    setPreferences(essentialOnly);
    localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(essentialOnly));
    toast.success("🚫 Optional cookies rejected.");
    setShowBanner(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {showBanner && (
        <div
          role="dialog"
          aria-label="Cookie preferences"
          aria-live="polite"
          className="fixed bottom-4 inset-x-4 z-50 bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in"
        >
          <div className="text-sm text-gray-800 dark:text-gray-200">
            🍪 We use cookies to improve your experience. Manage your
            preferences.
          </div>
          <div className="flex gap-2">
            <Button onClick={acceptAll}>Accept All</Button>
            <Button variant="outline" onClick={rejectOptional}>
              Essential Only
            </Button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 animate-fade-in">
        <div className="container mx-auto px-4">
          <Badge className="bg-blue-100 text-blue-800 mb-4 animate-pulse">
            🍪 Cookie Policy
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            🔧 Manage Your Cookie Preferences
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-lg">
            Choose how we use cookies to improve your experience.
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            📅 Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Cookie Settings */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          {cookieTypes.map(
            ({ icon: Icon, title, description, examples, required, type }) => (
              <div
                key={type}
                className="animate-fade-in shadow-md border-0 transition-all hover:scale-[1.01]"
              >
                <Card>
                  <CardHeader className="flex flex-row justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                        <Icon className="text-white w-5 h-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white">
                          {title}
                        </CardTitle>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {required && <Badge variant="secondary">Required</Badge>}
                      <Switch
                        checked={preferences[type]}
                        disabled={required}
                        onCheckedChange={(val: boolean) =>
                          handlePreferenceChange(type, val)
                        }
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 pb-4">
                    <ul className="list-disc pl-6 text-sm text-gray-600 dark:text-gray-300">
                      {examples.map((ex, i) => (
                        <li key={i}>{ex}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            )
          )}

          <div className="flex justify-center gap-4 pt-4 animate-fade-in">
            <Button onClick={savePreferences}>💾 Save Preferences</Button>
            <Button variant="outline" onClick={acceptAll}>
              ✅ Accept All
            </Button>
            <Button variant="outline" onClick={rejectOptional}>
              ❌ Essential Only
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <Cookie className="h-16 w-16 text-white mx-auto mb-6 animate-bounce" />
          <h2 className="text-3xl font-bold text-white mb-4">
            ❓ Questions About Cookies?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            If you have any questions about our use of cookies or this policy,
            please don&apos;t hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" passHref>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100 transition-all"
              >
                📩 Contact Support
              </Button>
            </Link>
            <Link href="/privacy" passHref>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent transition-all"
              >
                🔒 Privacy Policy
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiesPage;
