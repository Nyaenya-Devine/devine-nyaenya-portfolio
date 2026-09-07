import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — Cybersecurity & Security Engineering`,
    short_name: site.firstName,
    description: site.summary,
    start_url: "/",
    display: "standalone",
    background_color: "#070C09",
    theme_color: "#070C09",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
    ],
  };
}
