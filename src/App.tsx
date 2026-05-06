import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import About from "./About";
import Header from "./Header";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Journey from "./Journey/Journey";
import Achievements from "./Achievements";
import Contact from "./contact/Contact";

function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen flex-col gap-6"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-4xl font-bold gradient-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        SKR
      </motion.div>
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-primary"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
    </motion.div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>
      {!loading && (
        <div className="App bg-bg-primary min-h-screen">
          <Header />
          <main>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Journey />
            <Achievements />
            <Contact />
          </main>
        </div>
      )}
    </>
  );
}

export default App;

