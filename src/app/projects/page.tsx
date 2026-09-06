import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Callout } from "@/components/case-study/CaseSection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Security engineering projects by Devine Nyaenya — Chokepoint (least-privilege access control & tamper-evident audit), Android Reset Lab, and an experimental Android device-management tool. Built, tested, and documented honestly.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <div className="border-b border-line-soft bg-tech">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            as="h1"
            eyebrow="Portfolio"
            title="Security projects"
            description="Real implementations over claims. Each project includes the security controls, how they were tested, and an honest account of limitations. Order reflects depth and security focus, starting with Chokepoint."
          />
        </div>
      </div>

      <div className="container-page py-14">
        <Callout variant="info" title="How to read these">
          Every project links to its source. Status labels are honest:
          &ldquo;Live demo&rdquo; runs, &ldquo;Simulation / lab&rdquo; models a
          scenario without touching real systems, and &ldquo;Experimental /
          WIP&rdquo; did not fully achieve its original vision. Where something is
          incomplete, I say so — and what it taught.
        </Callout>
        <div className="mt-8">
          <ProjectsGrid />
        </div>
      </div>
    </>
  );
}
