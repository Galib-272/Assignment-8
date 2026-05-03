/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "lh3.googleusercontent.com",  // ✅ Google profile pictures
      "api.dicebear.com",            // ✅ Fallback avatars
      "ui-avatars.com",              // ✅ Another fallback
    ],
  },
};

export default nextConfig;