const Footer = () => {
    return (
        <footer className="py-8">
            <div className="max-w-6xl mx-auto px-4 md:px-6 text-center text-sm text-slate-400">
                <p>{new Date().getFullYear()} Sagar K. Built with React, Tailwind, and Framer Motion.</p>
            </div>
        </footer>
    );
};

export default Footer;
