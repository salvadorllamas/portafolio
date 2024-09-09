import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, git } from "../assets";
import web3 from "../assets/web3.png";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  source_code_link2,
}) => {
  return (
    // variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    <motion.div >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
          // Habilitar Tilt en dispositivos móviles
          glare: true,
          "max-glare": 0.5,
          transition: true,
          reset: true,
          reverse: false,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0  flex justify-between    card-img_hover gap-5">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="relative black-gradient w-14 h-14 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={web3}
                alt="web"
                className="rounded-full"
                style={{ transition: "transform 0.3s" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
            </div>

            {source_code_link2 && (
              <div
                onClick={() => window.open(source_code_link2, "_blank")}
                className="relative black-gradient w-14 h-14 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={git}
                  alt="github"
                  className="rounded-full"
                  style={{ transition: "transform 0.3s" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]  md:h-28">
            {description}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
     {/* variants={textVariant()} */}
      <motion.div>
        <p className={`${styles.sectionSubText} uppercase`}>Mis trabajos</p>
        <h2 className={styles.sectionHeadText}>Proyectos.</h2>
      </motion.div>
      <div className="w-full flex">
      {/* variants={fadeIn("", "", 0.1, 1)} */}
        <motion.p
         
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Los siguientes proyectos demuestran mis habilidades y experiencia a
          través de ejemplos prácticos de mi trabajo. Cada proyecto se describe
          brevemente e incluye enlaces a los repositorios de código y demos en
          vivo. Estos ejemplos reflejan mi capacidad para aprender rápidamente,
          trabajar con diversas tecnologías y colaborar en equipo para gestionar
          proyectos de manera eficaz.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
