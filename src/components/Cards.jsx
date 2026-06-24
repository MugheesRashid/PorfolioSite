import React from "react";
import { useTransform, motion, useScroll } from 'motion/react';
import { useRef } from 'react';

const GlobalStyles = `
.cardContainer {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  padding: 0 20px;
}

.cardContainer .card {
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 550px;
  border-radius: 16px;
  overflow: hidden;
  background: #141516;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;
  padding: 50px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  transform-origin: top;
  align-items: center;
}


.cardContainer .card .image-section {
  position: relative;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
  margin-top: 40px;
}

.cardContainer .card .image-section img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.cardContainer .card .content-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
}

.cardContainer .card h2 {
  font-size: 39px;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.5px;
  color: #fff;
}

.cardContainer .card p {
  font-size: 15px;
  line-height: 1.8;
  color: #555;
  margin: 0;
}

.cardContainer .card .divider {
  width: 60px;
  height: 3px;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  margin-bottom: 8px;
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  .cardContainer {
    height: 100vh;
    padding: 0 15px;
  }

  .cardContainer .card {
    grid-template-columns: 1fr;
    height: auto;
    padding: 30px 20px;
    gap: 20px;
  }

  .cardContainer .card .image-section {
    display: none;
  }

  .cardContainer .card h2 {
    font-size: 24px;
    line-height: 1.3;
  }

  .cardContainer .card p {
    font-size: 13px;
    line-height: 1.6;
  }
}

@media (max-width: 480px) {
  .cardContainer {
    padding: 0 10px;
  }

  .cardContainer .card {
    padding: 20px 15px;
    gap: 15px;
  }

  .cardContainer .card h2 {
    font-size: 18px;
    line-height: 1.2;
  }

  .cardContainer .card p {
    font-size: 12px;
    line-height: 1.5;
  }

  .cardContainer .card .divider {
    width: 40px;
    height: 2px;
  }
}`

const Card = ({i, title, description, src, url, color, progress, range, targetScale}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const imageParallax = useTransform(scrollYProgress, [0, 1], [50, -50])
  const scale = useTransform(progress, range, [1, targetScale]);
 
  return (
    <>
      <style>{GlobalStyles}</style>
      <div ref={container} className="cardContainer" style={{opacity: title === "Mark Rammers" ? 0 : 1}}>
        <motion.div 
          style={{backgroundColor: color, scale}} 
          className="card"
        >
          <div className="image-section">
            <motion.div
              style={{y: imageParallax}}
            >
              <img
                src={`${src}`}
                alt={title}
              />
            </motion.div>
          </div>
          
          <div className="content-section">
            <div className="divider"></div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Card