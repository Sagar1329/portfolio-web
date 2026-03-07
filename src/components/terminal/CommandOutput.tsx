import { useEffect, useMemo, useState } from "react";

interface CommandOutputProps {
  lines: string[];
  isError?: boolean;
  animate?: boolean;
}

const URL_PATTERN = /(https?:\/\/[^\s]+)/g;

const renderWithLinks = (line: string) => {
  const parts = line.split(URL_PATTERN);

  return parts.map((part, index) => {
    if (/^https?:\/\//.test(part)) {
      return (
        <a
          key={`${part}-${index}`}
          href={part}
          target="_blank"
          rel="noreferrer"
          className="text-emerald-300 underline decoration-emerald-700 hover:text-emerald-200"
        >
          {part}
        </a>
      );
    }

    return <span key={`${part}-${index}`}>{part}</span>;
  });
};

const CommandOutput = ({ lines, isError = false, animate = false }: CommandOutputProps) => {
  const [visibleCount, setVisibleCount] = useState(animate ? 0 : lines.length);

  useEffect(() => {
    if (!animate) {
      setVisibleCount(lines.length);
      return;
    }

    setVisibleCount(0);

    const timer = window.setInterval(() => {
      setVisibleCount((current) => {
        if (current >= lines.length) {
          window.clearInterval(timer);
          return current;
        }

        return current + 1;
      });
    }, 28);

    return () => window.clearInterval(timer);
  }, [animate, lines]);

  const visibleLines = useMemo(() => lines.slice(0, visibleCount), [lines, visibleCount]);

  if (visibleLines.length === 0) {
    return null;
  }

  return (
    <div className={`whitespace-pre-wrap text-sm md:text-base ${isError ? "text-red-400" : "text-emerald-300"}`}>
      {visibleLines.map((line, index) => (
        <div key={`${line}-${index}`}>{renderWithLinks(line)}</div>
      ))}
    </div>
  );
};

export default CommandOutput;
