interface Props {
  onClose: () => void;
}

const NewsLetterSuccess: React.FC<Props> = () => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row relative animate-in fade-in duration-500">
        <button className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <button className="sr-only">Close</button>
        </button>

        {/* Left side with geometric pattern */}
        <div className="w-full h-[250px] md:h-auto md:w-[45%] relative overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 400 400"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="400" height="400" fill="#4339F2" />
            {/* Geometric shapes */}
            <circle cx="300" cy="50" r="80" fill="#FF773D" />
            <rect x="50" y="50" width="100" height="100" fill="white" />
            <path d="M0 200L100 100H0V200Z" fill="#FF773D" />
            <rect x="200" y="200" width="120" height="120" fill="#FF773D" />
            <path d="M100 300L200 200L100 200V300Z" fill="white" />
            <rect
              x="50"
              y="250"
              width="60"
              height="60"
              fill="#FF773D"
              opacity="0.8"
            />
            <circle cx="150" cy="350" r="40" fill="white" opacity="0.9" />
            {/* Decorative lines */}
            <line
              x1="0"
              y1="380"
              x2="400"
              y2="380"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="10 5"
            />
            <line
              x1="20"
              y1="350"
              x2="380"
              y2="350"
              stroke="#FF773D"
              strokeWidth="3"
              strokeDasharray="15 10"
            />
          </svg>
        </div>

        {/* Right side with content */}
        <div className="w-full md:w-[55%] p-6 md:p-12 flex flex-col justify-center bg-white">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Successfully Subscribed!
            </h2>
            <p className="text-lg text-gray-600">
              Thank you for subscribing to our newsletter. You'll receive our
              next update on Monday.
            </p>
            <p className="text-sm text-gray-500">
              You can always unsubscribe using the link in our emails.
            </p>
            <div className="pt-4">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-700 underline"
              >
                Personal Data Charter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
