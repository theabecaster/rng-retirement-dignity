import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RNG Retirement Dignity",
    short_name: "RNG Dignity",
    description:
      "Education-first retirement and insurance planning for individuals, families, and public servants.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4EDE4",
    theme_color: "#1C3829",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
