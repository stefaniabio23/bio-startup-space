/** @type {import('next').NextConfig} */

// Static (GitHub Pages) build is opt-in via env so local `next dev` keeps the
// editable API routes. In CI we set STATIC_EXPORT=1 and BASE_PATH=/bio-startup-space.
const isStatic = process.env.STATIC_EXPORT === "1"
const basePath = process.env.BASE_PATH || ""

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  ...(isStatic
    ? {
        output: "export",
        basePath,
        assetPrefix: basePath || undefined,
        trailingSlash: true,
        // surfaced to the client so data fetches can prefix the Pages subpath
        env: { NEXT_PUBLIC_BASE_PATH: basePath, NEXT_PUBLIC_STATIC: "1" },
      }
    : {}),
}

export default nextConfig
