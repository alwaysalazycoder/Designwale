import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDoubleDown, BsChevronDown } from "react-icons/bs";
import me from "../assests/logo.svg";

const Home = () => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 100, {
      duration: 2,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectsCount = () => {
    animate(0, 250, {
      duration: 2,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  let animations = {
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
        delay: 1,
      },
    },
  };
  return (
    <>
      <div id="home">
        <section className="homesection">
          <div className="sectiondiv">
            <motion.h1
              initial={{
                x: "-100%",
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                delay: 2,
              }}
            >
              Hi, We Are <br /> Design Wale
            </motion.h1>
            <div className="writer">
              <Typewriter
                options={{
                  strings: [
                    "A Designer...",
                    "A Video Editor...",
                    "A Graphic Designer...",
                    "A Digital Marketer...",
                  ],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "typewriterpara",
                }}
              />
            </div>

            <div className="contact-bundle">
              <a href="mailto:imintrouble0117@gmail.com" className="temp">
                <button>Contact</button>
              </a>
              <a href="#work">
                Projects <BsArrowUpRight />{" "}
              </a>
            </div>

            <aside>
              <div>
                <article className="increase">
                  <p>
                    +
                    <motion.span
                      ref={clientCount}
                      whileInView={animationClientsCount}
                    >
                      100
                    </motion.span>
                  </p>
                  <span className="bold">Clients</span>
                </article>
                <article>
                  <p>
                    +
                    <motion.span
                      ref={projectCount}
                      whileInView={animationProjectsCount}
                    >
                      250
                    </motion.span>
                  </p>
                  <span className="bold">Projects Done</span>
                </article>
              </div>
            </aside>
          </div>
        </section>

        <div className="down-arrow">
          <BsChevronDown/>
        </div>

        <section className="main-page-logo-section">
          <img src={me} alt="Say" className="main-page-logo" />
        </section>
      </div>
    </>
  );
};

export default Home;
