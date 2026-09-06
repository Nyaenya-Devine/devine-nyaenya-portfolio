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
        <div className="container-page py-12 sm:py-16">
          <SectionHeading
            as="h1"
            eyebrow="Portfolio"
            title="Security projects"
            description="Real implementations over claims. Each project includes the controls, how they were tested, and an honest account of limitations — ordered by depth, starting with Chokepoint."
          />
        </div>
      </div>

      <div className="container-page py-10 sm:py-12">
        <Callout variant="info" title="How to read these">
          Status labels are honest: <strong className="text-ink-high">Live demo</strong> runs,{" "}
          <strong className="text-ink-high">Simulation / lab</strong> models a scenario without
          touching real systems, and <strong className="text-ink-high">Experimental / WIP</strong>{" "}
          didn't fully achieve its vision. Where something is incomplete, I say so — and what it taught.
        </Callout>
        <div className="mt-8">
          <ProjectsGrid />
        </div>
      </div>
    </>
  );
}
