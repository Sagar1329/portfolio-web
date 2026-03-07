import { useState } from "react";
import { Menu, X } from "lucide-react";
import { about } from "../data";

const navLinks = [
    { label: "Home", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Freelance", href: "#freelance" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 backdrop-blur-lg border-b border-slate-200/80 bg-white/85">
            <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                <a href="#about" className="text-lg font-heading font-bold tracking-wide text-slate-900">
                    {about.name}
                </a>

                <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
                    {navLinks.map((item) => (
                        <a key={item.href} href={item.href} className="hover:text-sky-600 transition-colors">
                            {item.label}
                        </a>
                    ))}
                </nav>

                <a
                    href="#contact"
                    className="hidden md:inline-flex px-4 py-2 rounded-full border border-sky-200 text-sky-700 hover:bg-sky-50 transition"
                >
                    Let us talk
                </a>

                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="md:hidden p-2 rounded-md border border-slate-300 text-slate-700"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
            </div>

            {isOpen && (
                <nav className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm border-t border-slate-200 bg-white">
                    {navLinks.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="py-2 text-slate-700 hover:text-sky-600 transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Header;
