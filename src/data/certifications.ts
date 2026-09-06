/**
 * Training & certifications. Security-relevant credentials are grouped first and
 * visually prioritized; broader learning is listed separately and never presented
 * as equally important. Only credentials the owner has reported are included.
 */

export type Credential = {
  title: string;
  issuer: string;
  /** Highlighted security/technical credentials are promoted in the UI. */
  priority: "featured" | "technical" | "additional";
  topics?: string[];
};

export const featuredCredentials: Credential[] = [
  {
    title: "Ethical Hacker",
    issuer: "Cisco Networking Academy",
    priority: "featured",
    topics: ["Offensive security mindset", "Exploitation lifecycle", "Defensive controls"],
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    priority: "featured",
    topics: ["Security fundamentals", "Threats & defenses", "Security domains"],
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    priority: "featured",
    topics: ["Python foundations", "Scripting for automation"],
  },
];

export const technicalCredentials: Credential[] = [
  {
    title: "Python Essentials 2",
    issuer: "Cisco / OpenEDG style curriculum",
    priority: "technical",
    topics: ["Intermediate Python", "Modules, OOP, error handling"],
  },
  {
    title: "Python Programming",
    issuer: "Online training",
    priority: "technical",
    topics: ["Applied programming", "Automation"],
  },
  {
    title: "Coding with AI",
    issuer: "Online training",
    priority: "technical",
    topics: ["AI-assisted development", "Prompting & verification"],
  },
  {
    title: "Create AI Agents with Copilot Studio",
    issuer: "Microsoft / online training",
    priority: "technical",
    topics: ["Agent building", "Automation design"],
  },
  {
    title: "AI for Beginners",
    issuer: "Online training",
    priority: "technical",
    topics: ["AI fundamentals", "Capabilities & limits"],
  },
];

export const additionalCredentials: Credential[] = [
  { title: "Data Entry", issuer: "Online training", priority: "additional" },
  { title: "Microeconomics", issuer: "Online training", priority: "additional" },
  {
    title: "Introduction to Greenhouse Gas Accounting for IT",
    issuer: "Online training",
    priority: "additional",
  },
];
