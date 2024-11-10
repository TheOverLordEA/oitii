import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oitii | terms of service",
  description:
    "Learn how we collect, use, and protect your personal information. Our Privacy Policy explains your data rights and our commitment to safeguarding your privacy.",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Terms of Service
      </h1>

      <h2 className="text-xl font-semibold text-gray-700 mb-6">
        AGREEMENT TO TERMS
      </h2>

      <p className="text-gray-600 mb-6 leading-relaxed">
        These Terms of Service ("Agreement") constitute a legally binding
        agreement between you, whether personally or on behalf of an entity you
        represent, and Oitii.com ("Company," "we," "us," or "our"), concerning
        your access to and use of the Oitii.com website, as well as any other
        media form, media channel, mobile website, or mobile application related
        to, linked to, or otherwise connected to Oitii.com (collectively, the
        "Site").
      </p>

      <p className="text-gray-600 mb-8 leading-relaxed">
        You agree that by accessing the Site, you have read, understood, and
        agree to be bound by all of these Terms of Service. If you do not agree
        with all of these Terms of Service, then you are expressly prohibited
        from using the Site and you must discontinue use immediately.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mb-6">
        USER REPRESENTATIONS
      </h2>

      <p className="text-gray-600 mb-4">
        By using the Site, you represent and warrant that:
      </p>

      <ol className="list-decimal list-outside ml-6 space-y-3 text-gray-600 mb-8">
        <li className="leading-relaxed">
          All registration information you submit will be true, accurate,
          current, and complete;
        </li>
        <li className="leading-relaxed">
          You will maintain the accuracy of such information and promptly update
          such registration information as necessary;
        </li>
        <li className="leading-relaxed">
          You have the legal capacity and you agree to comply with these Terms
          of Service;
        </li>
        <li className="leading-relaxed">
          Not a minor in the jurisdiction in which you reside
        </li>
        <li className="leading-relaxed">
          You will not access the Site through automated or non-human means,
          whether through a bot, script, or otherwise;
        </li>
      </ol>

      <p className="text-gray-600 leading-relaxed">
        If you provide any information that is untrue, inaccurate, not current,
        or incomplete, we have the right to suspend or terminate your account
        and refuse any and all current or future use of the Site (or any portion
        thereof).
      </p>
    </div>
  );
}
