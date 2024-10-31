"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { User, Rocket, Building2, Bell, Linkedin } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
// import { createClient } from "@/utils/supabase/server";
import { createClient } from "@/utils/supabase/client";

// import type { SubscriberType } from "@/types/newsletter";
type EmailState = {
  personalEmail: string;
  businessEmail: string;
};

type ErrorState = {
  personalError: boolean;
  businessError: boolean;
};

type ErrorMessage = {
  personalError: string;
  businessError: string;
};

async function subscribeEmailPersonal(email: string) {
  const supabase = await createClient();

  try {
    // First, check if email already exists
    const { data: existingEmail, error: searchError } = await supabase
      .from("user_subscribers")
      .select("email")
      .eq("email", email)
      .single();

    if (searchError && searchError.code !== "PGRST116") {
      throw new Error("Error checking email existence");
    }

    if (existingEmail) {
      return {
        success: false,
        message: "This email is already subscribed",
      };
    }

    // If email doesn't exist, insert it
    const { data, error: insertError } = await supabase
      .from("user_subscribers")
      .insert([{ email }]);

    if (insertError) {
      throw new Error("Error subscribing email");
    }

    return {
      success: true,
      message: "Successfully subscribed to newsletter",
    };
  } catch (error) {
    return {
      success: false,
      message: (error as Error)?.message,
    };
  }
}

async function subscribeEmailBusiness(email: string) {
  const supabase = await createClient();

  try {
    // First, check if email already exists
    const { data: existingEmail, error: searchError } = await supabase
      .from("business_subscribers")
      .select("email")
      .eq("email", email)
      .single();

    if (searchError && searchError.code !== "PGRST116") {
      throw new Error("Error checking email existence");
    }

    if (existingEmail) {
      return {
        success: false,
        message: "This email is already subscribed",
      };
    }

    // If email doesn't exist, insert it
    const { data, error: insertError } = await supabase
      .from("business_subscribers")
      .insert([{ email }]);

    if (insertError) {
      throw new Error("Error subscribing email");
    }

    return {
      success: true,
      message: "Successfully subscribed to newsletter",
    };
  } catch (error) {
    return {
      success: false,
      message: (error as Error)?.message,
    };
  }
}

export default function ComingSoonHome() {
  const [formData, setFormData] = useState<EmailState>({
    personalEmail: "",
    businessEmail: "",
  });

  const [showError, setShowError] = useState<ErrorState>({
    personalError: false,
    businessError: false,
  });

  const [showErrorMessage, setShowErrorMessage] = useState<ErrorMessage>({
    personalError: "",
    businessError: "",
  });
  const [showSuccessfulUser, setShowSuccessfulUser] = useState(false);

  const [showSuccessfulBusiness, setShowSuccessfulBusiness] = useState(false);

  const [isLoadingPersonal, setIsLoadingPersonal] = useState(false);

  const [isLoadingBusiness, setIsLoadingBusiness] = useState(false);

  const handleInputChangePersonalEmail = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      personalEmail: e.target.value,
    });
  };

  const handleInputChangeBusinessEmail = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      businessEmail: e.target.value,
    });
  };

  const handleSubmitEmailPersonal = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoadingPersonal(true);
    const result = await subscribeEmailPersonal(formData.personalEmail);

    if (!result.success) {
      setIsLoadingPersonal(false);
      setFormData({
        ...formData,
        personalEmail: "",
      });
    }
    setIsLoadingPersonal(false);
    setFormData({
      ...formData,
      personalEmail: "",
    });
    console.log(result);
  };

  const handleSubmitEmailBusiness = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoadingBusiness(true);
    const result = await subscribeEmailBusiness(formData.businessEmail);
    console.log(result);
    if (!result.success) {
      setFormData({
        ...formData,
        businessEmail: "",
      });
      setIsLoadingBusiness(false);
    }

    setFormData({
      ...formData,
      personalEmail: "",
    });
    setIsLoadingBusiness(false);
  };

  return (
    <div className="min-h-[600px] bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-xl p-6 md:p-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20 -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100 rounded-full filter blur-3xl opacity-20 -ml-32 -mb-32" />

      {/* Main content */}
      <div className="relative flex-grow flex flex-col justify-center items-center text-center mt-8 md:mt-12">
        <div className="w-full max-w-3xl">
          {/* Header Section */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center space-x-2 mb-6">
              <Rocket className="w-8 h-8 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-1 rounded-full">
                Launching Next Week
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Our platform features are being rolled out progressively.
            </h2>

            <p className="text-xl md:text-2xl font-medium text-slate-700 mb-4 max-w-2xl mx-auto">
              Subscribe to our newsletter and follow us on social media to stay
              in the loop with the latest updates!
            </p>
          </div>

          {/* Enhanced Tabs Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <Tabs defaultValue="jobseeker" className="w-full max-w-xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-100 rounded-lg">
                <TabsTrigger
                  value="jobseeker"
                  className="flex items-center justify-center space-x-2 py-1 data-[state=active]:bg-white data-[state=active]:text-blue-700"
                  // onClick={() => setType("user")}
                >
                  <User className="w-4 h-4" />
                  <span>Professionals</span>
                </TabsTrigger>
                <TabsTrigger
                  value="employer"
                  className="flex items-center justify-center space-x-2 py-1 data-[state=active]:bg-white data-[state=active]:text-blue-700"
                  // onClick={() => setType("business")}
                >
                  <Building2 className="w-4 h-4" />
                  <span>Enterprise</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="jobseeker">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Apply to real jobs not Ghost jobs
                    </h3>
                    <div className="flex items-center justify-center space-x-2">
                      <Bell className="w-4 h-4 text-blue-500" />
                      <span>Get notified when new features launch</span>
                    </div>
                  </div>

                  <form
                    onSubmit={handleSubmitEmailPersonal}
                    className="space-y-4"
                  >
                    <div className="flex flex-col md:flex-row gap-3">
                      <Input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.personalEmail}
                        onChange={handleInputChangePersonalEmail}
                        className="flex-grow bg-slate-50 border-slate-200"
                        required
                      />
                      <Button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
                      >
                        {isLoadingPersonal ? (
                          <>
                            {" "}
                            <svg
                              aria-hidden="true"
                              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                              />
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                              />
                            </svg>
                            <span className="sr-only">Loading...</span>{" "}
                            Loading...{" "}
                          </>
                        ) : (
                          "Subscribe Now"
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
              </TabsContent>

              <TabsContent value="employer">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Discover Top Talent at Unbeatable Value
                    </h3>
                    <div className="flex items-center justify-center space-x-2">
                      <Bell className="w-4 h-4 text-blue-500" />
                      <span>Get notified when new features launch</span>
                    </div>
                  </div>

                  <form
                    onSubmit={handleSubmitEmailBusiness}
                    className="space-y-6 w-full max-w-2xl mx-auto"
                  >
                    <div className="flex flex-col md:flex-row gap-3">
                      <div className="flex-grow">
                        <Input
                          type="email"
                          name="email"
                          placeholder="Enter your corporate email"
                          value={formData.businessEmail}
                          onChange={handleInputChangeBusinessEmail}
                          className="w-full bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        // disabled={status === "loading"}
                        className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 transition-colors duration-200"
                      >
                        {isLoadingBusiness ? (
                          <>
                            <svg
                              aria-hidden="true"
                              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                              />
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                              />
                            </svg>
                            <span className="sr-only">Loading...</span>{" "}
                            Loading...{" "}
                          </>
                        ) : (
                          "Subscribe Now"
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Social Media Section */}
          <div className="mt-12 space-y-6">
            <div className="flex flex-col items-center space-y-3">
              <p className="text-slate-600">
                Stay updated with our latest announcements
              </p>
              <Button
                variant="outline"
                className="bg-white hover:bg-slate-50 text-slate-800 border-slate-200 flex items-center space-x-2"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/oitii/",
                    "_blank"
                  )
                }
              >
                <Linkedin className="w-5 h-5 text-blue-600" />
                <span>Follow us on LinkedIn</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
