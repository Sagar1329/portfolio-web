import { motion } from "framer-motion";

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function App() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-[#0f172a] text-slate-100"
        >
            <Header />

            <main className="max-w-6xl mx-auto px-4 py-16 space-y-16">
                <Hero />
                <Skills />
                <Projects />
                <Experience />
                <Education />
                <Contact />
            </main>

            <Footer />
        </motion.div>
    );
}
