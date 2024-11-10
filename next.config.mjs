/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.pixabay.com"], // Add the external domain here
  },

  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|ico)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
