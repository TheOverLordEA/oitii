"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function PrivacyPolicy() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const sections = [
    {
      title: "Information We Collect",
      content:
        "We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, and any other information you choose to provide.",
    },
    {
      title: "How We Use Your Information",
      content:
        "We use the information we collect to provide, maintain, and improve our services, to communicate with you, to monitor and analyze trends and usage, and to carry out any other purpose for which the information was collected.",
    },
    {
      title: "Information Sharing and Disclosure",
      content:
        "We may share information about you as follows or as otherwise described in this Privacy Policy: with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.",
    },
    {
      title: "Data Retention",
      content:
        "We store the information we collect about you for as long as is necessary for the purpose(s) for which we originally collected it. We may retain certain information for legitimate business purposes or as required by law.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex md:items-center items-start justify-center p-4 pt-20 md:pt-0">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 py-8 md:my-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-6">Last updated: 10/10/2024</p>
          <div className="space-y-4">
            {sections.map((section, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex justify-between items-center w-full text-left"
                  aria-expanded={expandedSections.includes(section.title)}
                >
                  <h2 className="text-lg font-semibold text-gray-900">
                    {section.title}
                  </h2>
                  {expandedSections.includes(section.title) ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {expandedSections.includes(section.title) && (
                  <p className="mt-2 text-gray-600">{section.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
