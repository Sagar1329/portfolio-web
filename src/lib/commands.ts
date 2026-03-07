import { about, contact, experience, freelanceWork, projects, skills } from "../data";
import type { CommandExecutionResult, SupportedCommand } from "../types/terminal";

const AVAILABLE_COMMANDS: SupportedCommand[] = [
  "help",
  "about",
  "skills",
  "experience",
  "projects",
  "contact",
  "resume",
  "clear",
];

const toBullets = (items: string[]) => items.map((item) => `- ${item}`);

export const getAvailableCommands = (): string[] => AVAILABLE_COMMANDS;

export const runKnownCommand = (command: SupportedCommand): CommandExecutionResult => {
  switch (command) {
    case "help":
      return {
        type: "output",
        lines: [
          "Available commands:",
          ...AVAILABLE_COMMANDS.map((item) => `  - ${item}`),
          "",
          "Tip: Use ArrowUp/ArrowDown for history and Tab for autocomplete.",
        ],
      };

    case "about":
      return {
        type: "output",
        lines: [
          `${about.name} - ${about.role}`,
          `${about.location} | Experience: ${about.experience}`,
          "",
          about.description,
          "",
          ...toBullets(about.highlights),
        ],
      };

    case "skills":
      return {
        type: "output",
        lines: [
          "Frontend:",
          ...toBullets(skills.frontend),
          "",
          "Backend:",
          ...toBullets(skills.backend),
          "",
          "Databases:",
          ...toBullets(skills.databases),
          "",
          "DevOps and Tools:",
          ...toBullets(skills.devops_tools),
          "",
          "Other:",
          ...toBullets(skills.other),
        ],
      };

    case "experience": {
      const companyLines = experience.flatMap((item) => [
        `${item.role} | ${item.company} | ${item.duration}`,
        ...toBullets(item.details),
        "",
      ]);

      const freelanceLines = freelanceWork.flatMap((item) => [
        `${item.client} | ${item.role} | ${item.period}`,
        ...toBullets(item.details),
        "",
      ]);

      return {
        type: "output",
        lines: ["Professional Experience:", "", ...companyLines, "Freelance Clients:", "", ...freelanceLines],
      };
    }

    case "projects":
      return {
        type: "output",
        lines: projects.flatMap((project) => {
          const links = [project.liveUrl, project.githubUrl, project.playstoreUrl].filter(Boolean) as string[];
          return [
            `${project.title} (${project.period}) [${project.status}]`,
            `Tech: ${project.tech.join(", ")}`,
            project.description,
            ...(links.length > 0 ? ["Links:", ...toBullets(links)] : []),
            "",
          ];
        }),
      };

    case "contact":
      return {
        type: "output",
        lines: [
          `Email: ${contact.email}`,
          `Phone: ${contact.phone}`,
          `GitHub: ${contact.github}`,
          `LinkedIn: ${contact.linkedin}`,
        ],
      };

    case "resume":
      return {
        type: "output",
        lines: [
          "Resume:",
          `${import.meta.env.BASE_URL}SagarResume.pdf`,
          "Open the link above to download the latest resume.",
        ],
      };

    case "clear":
      return {
        type: "clear",
      };

    default:
      return {
        type: "output",
        lines: ["command not found: type 'help' to see available commands"],
        isError: true,
      };
  }
};
