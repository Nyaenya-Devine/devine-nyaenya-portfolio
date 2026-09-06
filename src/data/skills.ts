/**
 * Technical skills, grouped and labelled honestly. Labels indicate context —
 * they deliberately do not claim expert mastery of everything.
 */

export type Proficiency = "Core focus" | "Working knowledge" | "Familiar / labs";

export type Skill = {
  name: string;
  level: Proficiency;
  note?: string;
};

export type SkillGroup = {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "security",
    title: "Cybersecurity",
    description:
      "Where I focus most of my time — designing and testing controls rather than only reading about them.",
    skills: [
      { name: "Security engineering", level: "Core focus" },
      { name: "Application security", level: "Core focus" },
      { name: "Authentication & authorization", level: "Core focus", note: "RBAC, least privilege, separation of duties" },
      { name: "Threat modeling", level: "Core focus", note: "Assets, attackers, controls, detection" },
      { name: "Tamper-evident logging & audit integrity", level: "Core focus", note: "Hash chains, HMAC" },
      { name: "Vulnerability assessment", level: "Working knowledge", note: "In authorized labs" },
      { name: "Linux security & privilege escalation", level: "Working knowledge", note: "Lab environments" },
      { name: "Network security & analysis", level: "Working knowledge" },
      { name: "Security testing & automation", level: "Working knowledge" },
      { name: "SOC / defensive security concepts", level: "Familiar / labs", note: "Detection rules, alerting, SIEM shipping" },
      { name: "AI security / securing AI agents", level: "Working knowledge", note: "Identity & privilege abuse in agentic systems" },
      { name: "Secure software development", level: "Core focus" },
    ],
  },
  {
    id: "development",
    title: "Programming & Development",
    description:
      "The tools I build with. Python for security tooling and labs; TypeScript/Next.js for product surfaces.",
    skills: [
      { name: "Python", level: "Core focus", note: "Security tooling, labs, stdlib-only projects" },
      { name: "TypeScript", level: "Working knowledge", note: "Next.js apps" },
      { name: "JavaScript", level: "Working knowledge" },
      { name: "Next.js / React", level: "Working knowledge", note: "App Router, full-stack" },
      { name: "SQL", level: "Working knowledge", note: "SQLite / relational data" },
      { name: "HTML & CSS", level: "Working knowledge" },
      { name: "Git & GitHub", level: "Core focus", note: "Commits, PRs, CI workflows" },
    ],
  },
  {
    id: "tools",
    title: "Security Tools & Platforms",
    description:
      "Hands-on in controlled lab environments — used to learn, not run against systems I don't own.",
    skills: [
      { name: "Kali Linux", level: "Working knowledge", note: "Lab platform" },
      { name: "Linux", level: "Core focus", note: "Daily driver for security work" },
      { name: "Nmap", level: "Working knowledge", note: "Recon & scanning in labs" },
      { name: "Metasploit", level: "Working knowledge", note: "Exploitation in controlled labs" },
      { name: "Wireshark", level: "Working knowledge", note: "Packet analysis" },
      { name: "tcpdump", level: "Working knowledge", note: "CLI capture/analysis" },
    ],
  },
];

/** Compact, ordered list of "how I work" principles for the methodology strip. */
export const methodology = [
  { step: "Build", detail: "Ship a working control, not a slide." },
  { step: "Test", detail: "Prove the property with automated tests." },
  { step: "Break", detail: "Attack my own design to find failure modes." },
  { step: "Learn", detail: "Fix root causes and document honestly." },
  { step: "Secure", detail: "Harden, re-test, and raise the bar." },
] as const;
