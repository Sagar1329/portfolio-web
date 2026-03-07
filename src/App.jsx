import { motion } from "framer-motion";

import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Freelance from "./components/Freelance";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function App() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen text-slate-900 soft-grid"
        >
            <Header />

            <main className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-16 space-y-8 md:space-y-10">
                <Hero />
                <Skills />
                <Experience />
                <Freelance />
                <Projects />
                <Contact />
            </main>

            <Footer />
        </motion.div>
    );
}
