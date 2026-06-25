"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
};

const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

const GlobalStyles = `
.introduction {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 99;
  background-color: #141516;
}

.introduction svg {
  position: absolute;
  top: 0;
  width: 100%;
  height: calc(100% + 300px);
}

.introduction svg path {
  fill: #141516;
}

.introduction p {
  display: flex;
  color: white;
  font-size: 42px;
  align-items: center;
  position: absolute;
  z-index: 1;
}

.introduction p span {
  display: block;
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
  margin-right: 10px;
}
`;

const words = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "안녕하세요",
  "你好",
  "السلام عليكم",
  "नमस्ते",
  "مرحبًا",
  "Hallo",
];

export default function Index({ onComplete }) {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) {
      const timer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 1000); // 1 second delay on the final greeting before loader starts to move up
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150,
    );
    return () => clearTimeout(timer);
  }, [index, onComplete]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <>
        <style>{GlobalStyles}</style>
      <motion.div
        variants={slideUp}
        initial="initial"
        exit="exit"
        className="introduction"
      >
        {dimension.width > 0 && (
          <>
            <motion.p variants={opacity} initial="initial" animate="enter">
              <span></span>
              {words[index]}
            </motion.p>
            <svg>
              <motion.path
                variants={curve}
                initial="initial"
                exit="exit"
              ></motion.path>
            </svg>
          </>
        )}
      </motion.div>
    </>
  );
}
