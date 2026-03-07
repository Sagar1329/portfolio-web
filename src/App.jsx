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
            className="min-h-screen text-slate-100 soft-grid"
        >
            <Header />

            <main className="max-w-[1500px] mx-auto px-3 md:px-5 py-6 md:py-8 grid grid-cols-1 xl:grid-cols-12 gap-4 md:gap-5">
                <div className="xl:col-span-12">
                    <Hero />
                </div>

                <div className="xl:col-span-4 space-y-4 md:space-y-5 self-start">
                    <Skills />
                </div>

                <div className="xl:col-span-8 space-y-4 md:space-y-5 self-start">
                    <Experience />
                    <Freelance />
                </div>

                <div className="xl:col-span-12">
                    <Projects />
                </div>

                <div className="xl:col-span-12">
                    <Contact />
                </div>
            </main>

            <Footer />
        </motion.div>
    );
}
