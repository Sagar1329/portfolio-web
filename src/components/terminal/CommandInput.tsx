import { useMemo } from "react";

interface CommandInputProps {
  prompt: string;
  value: string;
  suggestion: string | null;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onNavigateHistory: (direction: "up" | "down") => void;
  onAutocomplete: () => void;
}

const CommandInput = ({
  prompt,
  value,
  suggestion,
  onChange,
  onSubmit,
  onNavigateHistory,
  onAutocomplete,
}: CommandInputProps) => {
  const suggestionSuffix = useMemo(() => {
    if (!suggestion || !value) {
      return "";
    }

    if (!suggestion.startsWith(value.toLowerCase())) {
      return "";
    }

    return suggestion.slice(value.length);
  }, [suggestion, value]);

  return (
    <div className="flex items-center gap-2 text-sm md:text-base leading-6">
      <span className="text-emerald-400 shrink-0">{prompt}</span>

      <div className="relative flex-1 min-w-0">
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              onSubmit();
              return;
            }

            if (event.key === "ArrowUp") {
              event.preventDefault();
              onNavigateHistory("up");
              return;
            }

            if (event.key === "ArrowDown") {
              event.preventDefault();
              onNavigateHistory("down");
              return;
            }

            if (event.key === "Tab") {
              event.preventDefault();
              onAutocomplete();
            }
          }}
          autoFocus
          spellCheck={false}
          autoCapitalize="off"
          autoComplete="off"
          className="w-full bg-transparent border-0 outline-none text-emerald-300 font-mono caret-transparent"
          aria-label="Terminal command input"
        />

        {suggestionSuffix ? (
          <span className="absolute top-0 left-0 pointer-events-none text-emerald-700 font-mono">
            <span className="invisible">{value}</span>
            {suggestionSuffix}
          </span>
        ) : null}

        <span className="absolute top-0 pointer-events-none text-emerald-400 animate-[blink_1s_steps(2,start)_infinite]" style={{ left: `${value.length}ch` }}>
          _
        </span>
      </div>
    </div>
  );
};

export default CommandInput;
