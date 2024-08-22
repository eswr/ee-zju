/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/ee-zju",
  trailingSlash: true,
  images: {
    loader: "akamai",
    path: "",
  },
  // assetPrefix: "./",
};

export default nextConfig;
