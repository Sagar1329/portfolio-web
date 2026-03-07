import { useEffect, useMemo, useRef, useState } from "react";
import CommandInput from "./CommandInput";
import CommandOutput from "./CommandOutput";
import { executeCommand, getAutocompleteSuggestion } from "../../lib/terminalEngine";
import type { HistoryEntry } from "../../types/terminal";

const PROMPT = "sagar@portfolio:~$";

const STARTUP_LINES = [
  "   _____                         _  __",
  "  / ___/____ _____ _____ ______| |/ /",
  "  \\__ \\/ __ `/ __ `/ __ `/ ___/   / ",
  " ___/ / /_/ / /_/ / /_/ / /  /   |  ",
  "/____/\\__,_/\\__, /\\__,_/_/  /_/|_|  ",
  "            /____/                    ",
  "",
  "Sagar K Developer Terminal v1.0",
  "Type 'help' to see available commands",
];

const createId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

const Terminal = () => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const terminalScrollRef = useRef<HTMLDivElement | null>(null);

  const suggestion = useMemo(() => getAutocompleteSuggestion(input), [input]);

  useEffect(() => {
    setHistory([
      {
        id: createId(),
        prompt: "",
        command: "",
        lines: STARTUP_LINES,
        animate: true,
        isSystem: true,
      },
    ]);
  }, []);

  useEffect(() => {
    const node = terminalScrollRef.current;
    if (!node) {
      return;
    }

    node.scrollTo({ top: node.scrollHeight, behavior: "smooth" });
  }, [history, input]);

  const submitCommand = () => {
    const raw = input;
    const command = raw.trim();

    if (!command) {
      setInput("");
      return;
    }

    setCommandHistory((prev) => [...prev, command]);
    setHistoryIndex(null);

    const result = executeCommand(command);

    if (result.type === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: createId(),
        prompt: PROMPT,
        command,
        lines: result.lines ?? [],
        isError: result.isError,
        animate: true,
      },
    ]);

    setInput("");
  };

  const navigateHistory = (direction: "up" | "down") => {
    if (commandHistory.length === 0) {
      return;
    }

    if (direction === "up") {
      const nextIndex = historyIndex === null ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);
      return;
    }

    if (historyIndex === null) {
      return;
    }

    const nextIndex = historyIndex + 1;

    if (nextIndex >= commandHistory.length) {
      setHistoryIndex(null);
      setInput("");
      return;
    }

    setHistoryIndex(nextIndex);
    setInput(commandHistory[nextIndex]);
  };

  const applyAutocomplete = () => {
    if (!suggestion) {
      return;
    }

    setInput(suggestion);
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-3 md:px-6 py-6 md:py-10">
      <div className="rounded-xl border border-emerald-900/70 bg-[#030807] shadow-[0_0_40px_rgba(16,185,129,0.12)] overflow-hidden">
        <header className="px-4 md:px-6 py-3 border-b border-emerald-900/60 bg-[#04100d] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <p className="font-mono text-xs md:text-sm text-emerald-300">Sagar K Developer Terminal v1.0</p>
          <p className="font-mono text-[11px] md:text-xs text-emerald-500">Type 'help' to see available commands</p>
        </header>

        <div ref={terminalScrollRef} className="h-[70vh] min-h-[420px] overflow-y-auto p-4 md:p-6 font-mono space-y-4">
          {history.map((entry) => (
            <div key={entry.id} className="space-y-1">
              {!entry.isSystem ? (
                <div className="text-emerald-400 text-sm md:text-base">
                  <span>{entry.prompt}</span> <span className="text-emerald-200">{entry.command}</span>
                </div>
              ) : null}

              <CommandOutput lines={entry.lines} isError={entry.isError} animate={entry.animate} />
            </div>
          ))}

          <CommandInput
            prompt={PROMPT}
            value={input}
            suggestion={suggestion}
            onChange={setInput}
            onSubmit={submitCommand}
            onNavigateHistory={navigateHistory}
            onAutocomplete={applyAutocomplete}
          />
        </div>
      </div>
    </section>
  );
};

export default Terminal;
