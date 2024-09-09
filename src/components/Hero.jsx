import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Cristal from "./Cristal";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <Cristal>
        <div
          className={`${styles.paddingX} absolute inset-0 top-44 max-w-7xl mx-auto flex 
      flex-row items-start gap-5 `}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40  violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-black font-black`}>
              Hola,Soy <span className="text-[#915eff]"> Salvador</span>
            </h1>
            <p
              className={`${styles.heroSubText} mt-2 text-black font-semibold`}
            >
              Con tres años de experiencia en ingeniería de software.
            </p>
          </div>
        </div>
      </Cristal>
      {/* modelo 3d importado init */}
      {/* <ComputersCanvas /> */}

      {/* modelo 3d importado fin */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[65px] h-[168px] relative flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-full bg-gray-200 mb-1"
            >
              <div className="w-full h-full relative flex justify-center">
                <div className="w-2 h-full bg-white rounded-full"></div>
                <div className="absolute -bottom-1 top-24   -right-5 w-3 h-[60px] rotate-45 bg-white"></div>
                <div className="absolute -bottom-1 top-24   -left-5 w-3 h-[60px] -rotate-45 bg-white"></div>
              </div>
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
