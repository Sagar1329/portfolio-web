const Footer = () => {
    return (
        <footer className="border-t border-slate-700 py-6">
            <div className="max-w-6xl mx-auto px-4 text-center text-sm text-slate-400">
                <p>© {new Date().getFullYear()} Sagar K</p>
                <p className="mt-1">Built with React, Tailwind CSS, and Vite</p>
            </div>
        </footer>
    );
};

export default Footer;
