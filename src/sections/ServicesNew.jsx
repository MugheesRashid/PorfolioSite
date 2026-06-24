import React from "react";
import { useScroll } from "motion/react"
import { useRef } from 'react';
import Card from "../components/Cards";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";

export const projects = [
  {
    title: "Software Sponsor And Technology Partner - ELMUN II",
    description: "As the Software Sponsor and Technical Partner for ELMUN II, I developed and deployed a comprehensive delegate management system for one of Pakistan’s major private Model United Nations conferences held at the University of Greater Manchester, Islamabad. The platform fully digitized registration, verification, and check-in processes, streamlining operations for organizers and participants alike. By replacing traditional manual attendance tracking and document handling with automated workflows, the system significantly improved efficiency, reduced administrative overhead, and enhanced the overall event management experience.",
    src: "/assets/projects/elmun.png",
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "#141516"
  },
  {
    title: "Head IT - Rove n Rave",
    description: "As Head of IT for Rove n Rave, I developed and deployed a registration and access control system for a large-scale concert event held at Air University, Kamra. Following the successful implementation of the ELMUN delegate management platform, event organizers adopted the same digital infrastructure model to streamline attendee operations. The system enabled secure entry verification, efficient registration handling, and real-time attendee management, ensuring smooth on-ground coordination while significantly reducing manual processes and operational bottlenecks.",
    src: "/assets/projects/rove-n-rave.png",
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#141516"
  },
  {
    title: "Co-Director - MPMUN2026",
    description: "As Co-Director of Registration for MPMUN2026, I managed the complete digital registration workflow, overseeing delegate onboarding, verification, and data management processes. I was responsible for organizing registration operations, maintaining accurate participant records, and ensuring a smooth experience for delegates throughout the registration phase. Although the event was ultimately cancelled due to visa complications affecting international delegates, the registration system and associated processes were successfully completed and fully operational prior to the cancellation.",
    src: "/assets/projects/mpmun2026.png",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#141516"
  },
  {
    title: "Mark Rammers",
    description: "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlESQBk-4vtg06TDz4YdWo1wKD-8BJKuxFGJLwEv-2jw&s=10",
    link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
    color: "#B62429"
  },
]

const ServicesNew = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })
  const items = [
    'just imagin, I code',
    'just imagin, I code',
    'just imagin, I code',
    'just imagin, I code',
    'just imagin, I code',
  ]

  const getHeight = () => {
    if (typeof window !== 'undefined') {
      const isMobile = window.innerWidth <= 768;
      const isSmallMobile = window.innerWidth <= 480;
      if (isSmallMobile) return `${projects.length * 140}vh`;
      if (isMobile) return `${projects.length * 130}vh`;
      return `${projects.length * 100}vh`;
    }
    return `${projects.length * 100}vh`;
  };

  return (
    <section ref={container} style={{position: "relative", height: getHeight()}} className="min-h-screen mt-[10vh] md:mt-[20vh] bg-[#E5E5E0] rounded-t-2xl md:rounded-t-4xl">
      <Marquee items={items} />
      <AnimatedHeaderSection
        subTitle={"Behind the scene, Beyond the screen"}
        title={"Legacy"}
        text={"A collection of leadership roles, technical contributions, and operational successes across diverse events and initiatives."}
        textColor={"text-black"}
        withScrollTrigger={true}
      />

        {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
    </section>
  )
}

export default ServicesNew;