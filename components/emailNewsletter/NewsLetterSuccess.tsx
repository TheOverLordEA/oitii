interface Props {
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const NewsLetterSuccess: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="md:fixed md:inset-0 bg-black/50 md:flex items-center justify-center md:p-4 md:z-50">
      <div className="bg-white rounded-none md:rounded-3xl w-full h-full fixed inset-0 md:h-auto md:max-w-4xl overflow-hidden z-50 flex flex-col md:flex-row md:inset-auto md:relative animate-in fade-in duration-500">
        <button
          className="absolute right-16 md:right-4 top-4 text-white hover:text-gray-700 z-20"
          onClick={onClose}
        >
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
        </button>
        <button className="sr-only">Close</button>

        {/* Left side with geometric pattern */}
        <div className="w-full h-[350px] md:h-auto md:w-[45%] relative overflow-hidden">
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
        <div className="w-[90%] md:w-[55%] p-6 md:p-12 flex flex-col justify-start md:justify-center bg-white">
          <div className="md:space-y-6 space-y-2 max-w-sm md:max-w-md mx-auto flex flex-col justify-start gap-5 md:block">
            <h2
              className="
              text-3xl 
              md:text-4xl 
              font-extrabold 
              text-gray-900 
              tracking-tight 
              md:text-left 
              bg-gradient-to-r 
              from-blue-600 
              to-purple-600 
              bg-clip-text 
              text-transparent 
              pb-1
            "
            >
              Successfully Subscribed!
            </h2>

            <p className="block text-gray-600 text-lg">
              We're excited to keep you informed about
              <span className="font-bold text-black"> new features</span>,
              <span className="font-bold text-black"> innovative tools</span>,
              and
              <span className="font-bold text-black"> exclusive insights </span>
              as they become available.
            </p>

            <span className="block text-lg text-gray-700 mb-2">
              Stay ahead of the curve with our latest updates.
            </span>

            <p
              className="
              text-sm 
              text-gray-500 
              md:text-left 
              italic 
              opacity-80
            "
            >
              You can always unsubscribe using the link in our emails.
            </p>
            {/* <h2
              className="  text-2xl 
              md:text-3xl  font-bold text-gray-900"
            >
              Successfully Subscribed!
            </h2>
            <p
              className=" text-base 
              md:text-lg  text-gray-600"
            >
              Thank you for subscribing to our newsletter. You'll receive our
              next update on Monday.
            </p>
            <p className="text-sm text-gray-500">
              You can always unsubscribe using the link in our emails.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterSuccess;
