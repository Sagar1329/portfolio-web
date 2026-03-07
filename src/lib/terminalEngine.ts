import { getAvailableCommands, runKnownCommand } from "./commands";
import type { CommandExecutionResult, SupportedCommand } from "../types/terminal";

const normalize = (value: string) => value.trim().toLowerCase();

export const executeCommand = (rawCommand: string): CommandExecutionResult => {
  const command = normalize(rawCommand);

  if (!command) {
    return { type: "output", lines: [] };
  }

  const commands = getAvailableCommands();

  if (!commands.includes(command)) {
    return {
      type: "output",
      lines: ["command not found: type 'help' to see available commands"],
      isError: true,
    };
  }

  return runKnownCommand(command as SupportedCommand);
};

export const getAutocompleteSuggestion = (value: string): string | null => {
  const normalized = normalize(value);

  if (!normalized) {
    return null;
  }

  return getAvailableCommands().find((command) => command.startsWith(normalized)) ?? null;
};
