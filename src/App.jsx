import React, { useEffect, useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import { useProgress } from "@react-three/drei";
import Preloader from "./sections/Preloader";
import ServicesNew from "./sections/ServicesNew";
import { AnimatePresence } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);
  const [wordsFinished, setWordsFinished] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (progress === 100) {
      setIsReady(true);
    }
  }, [progress]);

  // Fallback timeout to ensure page loads if Drei progress indicator gets stuck
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isReady && wordsFinished) {
      setLoading(false);
      // Refresh ScrollTrigger to recalculate trigger points after layout stabilizes
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 1000);
    }
  }, [isReady, wordsFinished]);

  // Disable scroll while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setWordsFinished(true)} />}
      </AnimatePresence>
      <div
        className={`${
          isReady ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <Navbar />
        <Hero loading={loading} />
        <ServiceSummary />
        <Services />
        <About />
         <Works />
        {/* <Projects /> */}
        <ContactSummary />
        <ServicesNew />
        <Contact />
      </div>
    </ReactLenis>
  );
};

export default App;
