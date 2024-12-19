"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import parse from "html-react-parser";

const faqs = [
  {
    question: "What is Oitii and how does it work?",
    answer:
      "Oitii is a platform that allows you to post job listings, browse available opportunities, and ensure that only verified job postings are listed — no ghost jobs or fake jobs.",
  },
  {
    question: "How do I post a job on the platform?",
    answer:
      "Once you sign up and log in to your account, purchase a job post, fill in the job details, and publish your listing. After verification, your job post will be listed on the platform.",
  },
  {
    question: "What are the guidelines for posting a job on Oitii?",
    answer:
      "Job posts on Oitii must include clear descriptions, salary, location, a deadline, and a response to applicants, with no re-posting, ghosting, or vague details, and entry-level jobs should not require experience. For more information visit our <a href='/jobs/guidelines' className='text-blue-500' target='_blank' rel='noopener noreferrer'> Guidelines Page </a> our ",
  },
  {
    question:
      "How does Oitii verify that a job post is legitimate and not a fake or ghost job?",
    answer: `Oitii employs a multi-layered verification process to ensure that every job post on our platform is legitimate and not a fake or ghost job. To learn more about how we verify job posts and maintain the integrity of our platform, visit our <a href='/jobs/how-jobs-verified' className='text-blue-500' target="_blank" rel="noopener noreferrer"> How Jobs Are Verified</a> page.`,
  },
  {
    question: "How much does it cost to post a job?",
    answer:
      "You can post your first job for free! After that, a small fee of $10 per post applies.",
  },
  {
    question: "Do I need to create an account to post a job or apply for jobs?",
    answer:
      "Yes, creating an account is required to post a job but you can apply for a job without creating an account.",
  },
  {
    question: "How do I apply for a job on the platform?",
    answer: `You can apply for a job on Oitii either directly through Oitii Apply if the employer allows, or by visiting the job lister's website if they prefer to manage applications there.`,
  },
  {
    question: "What types of job roles can be posted on the platform?",
    answer:
      "You can post jobs in a variety of fields, including engineering, finance, marketing, healthcare, construction, public sector roles, retail, and utilities, ranging from part-time and full-time positions to internships and freelance work. Only jobs within these accepted fields are supported on our platform.",
  },
  {
    question: "In what countries can I use Oitii?",
    answer:
      "Currently, our platform is available in the United States, but we’re expanding to more locations soon! Stay tuned for updates.",
  },
  {
    question: "Is there a mobile app for this platform?",
    answer:
      "Currently, we are working on a mobile app to make the platform more accessible. You can still access the platform through your mobile browser in the meantime.",
  },
];

export default function PostAJobFAQ() {
  return (
    <div className=" flex flex-col justify-center items-baseline md:items-center w-screen relative bg-black text-white py-20 md:py-18 px-5 md:px-2">
      <h1 className="text-4xl font-normal text-left md:text-center mb-12">
        Frequently asked questions
      </h1>
      <div className="flex flex-col min-w-[80%] md:min-w-[60%] md:max-w-[60%]">
        <h2 className="text-3xl font-normal mb-8">General questions</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-zinc-800"
            >
              <AccordionTrigger className="text-left hover:no-underline text-lg md:text-2xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white text-base">
                {parse(faq.answer)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
