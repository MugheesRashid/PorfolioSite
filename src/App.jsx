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

const App = () => {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (progress === 100) {
      setIsReady(true);
    }
  }, [progress]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      <div
        className={`${
          isReady ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <AnimatePresence>{loading && <Preloader />}</AnimatePresence>
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
