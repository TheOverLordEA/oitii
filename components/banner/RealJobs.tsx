export default function RealJobs() {
  return (
    <section className="w-full py-12 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-pink-100/20 to-purple-200/30 opacity-70" />

      <div className="relative container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col items-center space-y-6 text-center max-w-4xl mx-auto">
          <div className="flex flex-col gap-6 md:gap-8 p-6 lg:p-10">
            <div
              className="uppercase text-center"
              aria-label="Job search tagline"
              role="text"
            >
              <p className="text-gray-700 text-base md:text-xl">
                Apply to{" "}
                <span
                  className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent font-bold"
                  aria-label="real jobs"
                >
                  real jobs
                </span>{" "}
                not{" "}
                <span
                  className="bg-gradient-to-r from-orange-500 to-rose-800 bg-clip-text text-transparent font-bold"
                  aria-label="ghost jobs"
                >
                  ghost jobs
                </span>
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-center text-gray-900">
              Find and Apply to <br className="block md:hidden" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Real Jobs
              </span>{" "}
              <br className="my-2 md:my-0" />
              Authentic Careers
            </h1>

            <div>
              <p
                className="text-gray-600 text-base md:text-xl leading-relaxed text-center max-w-2xl mx-auto 
            tracking-wide"
              >
                Verified opportunities. Zero time wasted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
