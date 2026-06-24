import { useState } from "react";
import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import gsap from "gsap";

const GlobalStyles = `
.modalContainer{
    height: 350px;
    width: 400px;
    position: absolute;
    top: 6000px;
    background-color: white;
    overflow: hidden;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modalSlider{
    height: 100%;
    width: 100%;
    position: absolute;
    transition: top 0.5s cubic-bezier(0.76, 0, 0.24, 1);
}

.modal{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal img{
    height: auto;
}

.cursor, .cursorLabel{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #455CE9;
    color: white;
    position: absolute;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 300;
    pointer-events: none;
}

.cursorLabel{
    background-color: transparent;
}
.project{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 50px 100px 50px 100px;
    border-top: 1px solid rgb(201, 201, 201);
    cursor: pointer;
    transition: all 0.2s;
}
.project:last-of-type{
    border-bottom: 1px solid rgb(201, 201, 201);
}

.project:hover{
    opacity: 0.5;
}

.project:hover h2{
    transform: translateX(-10px);
}

.project:hover p{
    transform: translateX(10px);
}

.project h2{
    font-size: 60px;
    margin: 0px;
    font-weight: 400;
    transition: all 0.4s;
}

.project p{
    transition: all 0.4s;
    font-weight: 300;
}
    .main{
    display: flex;
    align-items: center;
    justify-content: center;
}

.body{
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
    .modalContainer{
        height: 200px;
        width: 250px;
        top: 6000px;
    }

    .cursor, .cursorLabel{
        width: 50px;
        height: 50px;
        font-size: 12px;
        display: none;
    }

    .project{
        flex-direction: column;
        align-items: flex-start;
        padding: 30px 20px;
    }

    .project h2{
        font-size: 32px;
        margin-bottom: 10px;
    }

    .project p{
        font-size: 14px;
    }

    .projectTitle{
        width: 100%;
        margin-bottom: 15px;
    }
}

@media (max-width: 480px) {
    .modalContainer{
        height: 160px;
        width: 200px;
        display: none;
    }

    .cursor, .cursorLabel{
        display: none;
    }

    .project{
        flex-direction: column;
        align-items: flex-start;
        padding: 20px 15px;
    }

    .project h2{
        font-size: 24px;
        margin-bottom: 8px;
    }

    .project p{
        font-size: 12px;
    }

    .projectTitle{
        width: 100%;
        margin-bottom: 12px;
    }

    .body{
        width: 95vw;
    }
}`

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const Modal = ({ modal, projectList }) => {
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    let xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    let yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      xMoveContainer(clientX);
      yMoveContainer(clientY + window.scrollY - 6800);
      xMoveCursor(clientX);
      yMoveCursor(clientY + window.scrollY - 6800);
      xMoveCursorLabel(clientX);
      yMoveCursorLabel(clientY + window.scrollY - 6800);
      console.log(clientX, clientY + window.scrollY);
    });
  }, []);

  return (
    <>
        <style>{GlobalStyles}</style>,
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="modalContainer"
      >
        <div style={{ top: index * -100 + "%" }} className="modalSlider">
          {projectList.map((project, index) => {
            const { src, color } = project;
            return (
              <div
                className="modal"
                style={{ backgroundColor: color }}
                key={`modal_${index}`}
              >
                <img
                  src={`/assets/projects/${src}`}
                  width={300}
                  height={0}
                  alt="image"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        className="cursor"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        className="cursorLabel"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        View
      </motion.div>
    </>
  );
};

const Project = ({ title, link, desc, index, setModal }) => {
  return (
    <>
      <style>{GlobalStyles}</style>
      <div
        onMouseEnter={() => {
          setModal({ active: true, index });
        }}
        onMouseLeave={() => {
          setModal({ active: false, index });
        }}
        className="project"
        onClick={() => window.open(link, "_blank")}
        style={{ cursor: "pointer" }}
      >
        <div className="projectTitle">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <p>Design & Development</p>
      </div>
    </>
  );
};

const projectList = [
  {
    title: "Art N Vogue - Ongoing",
    src: "artnvogue.png",
    desc: "Designing and Developing A luxury art brand Web Application that can convince the user to place the order.",
    color: "#8C8C8C",
    link: "https://art-n-vogue.vercel.app",
  },
  {
    title: "UB Traders - Coming Soon",
    src: "UBtrade.png",
        desc: "Designing and Developing A luxury art brand Web Application that can convince the user to place the order.",

    color: "#EFE8D3",
    link: "#",
  },
  {
    title: "Universal Baraka",
    src: "universal-baraka.png",
        desc: "Designing and Developing A luxury art brand Web Application that can convince the user to place the order.",

    color: "#000000",
    link: "https://www.universalbaraka.tech/",
  },

  {
    title: "Medilab",
    src: "medilab.png",
        desc: "Designing and Developing A luxury art brand Web Application that can convince the user to place the order.",

    color: "#706D63",
    link: "https://mediscan-genai.vercel.app/",
  },
  {
    title: "Medisense",
    src: "medisense.png",
        desc: "Designing and Developing A luxury art brand Web Application that can convince the user to place the order.",
    color: "#000000",
    link: "https://medisense-genai.vercel.app/",
  },
];

export default function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
      <style>{GlobalStyles}</style>
      <main className="main">
        <div className="body">
          {projectList.map((project, index) => {
            return (
              <Project
                index={index}
                title={project.title}
                desc={project.desc}
                link={project.link}
                setModal={setModal}
                key={index}
              />
            );
          })}
        </div>
        <Modal modal={modal} projectList={projectList} />
      </main>
    </>
  );
}
