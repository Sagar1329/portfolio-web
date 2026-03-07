export type SupportedCommand =
  | "help"
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "contact"
  | "resume"
  | "clear";

export interface CommandExecutionResult {
  type: "output" | "clear";
  lines?: string[];
  isError?: boolean;
}

export interface HistoryEntry {
  id: string;
  prompt: string;
  command: string;
  lines: string[];
  isError?: boolean;
  animate?: boolean;
  isSystem?: boolean;
}
