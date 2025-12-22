import { about } from "../data";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-[#0f172a] border-b border-slate-700">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                {/* Brand */}
                <a
                    href="#about"
                    className="text-lg font-bold text-white hover:text-sky-400 transition"
                >
                    {about.name}
                </a>

                {/* Navigation */}
                <nav className="hidden md:flex gap-6 text-sm text-slate-300">
                    <a href="#about" className="hover:text-white">About</a>
                    <a href="#skills" className="hover:text-white">Skills</a>
                    <a href="#projects" className="hover:text-white">Projects</a>
                    <a href="#experience" className="hover:text-white">Experience</a>
                    <a href="#education" className="hover:text-white">Education</a>
                    <a href="#contact" className="hover:text-white">Contact</a>
                </nav>

                {/* CTA */}
                <a
                    href="#contact"
                    className="text-sm px-4 py-2 border border-slate-500 rounded-lg text-slate-200 hover:bg-slate-700 transition"
                >
                    Hire Me
                </a>
            </div>
        </header>
    );
};

export default Header;
