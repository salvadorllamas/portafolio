import React, { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMediaQueryChange);
    } else {
      // Compatibilidad con navegadores antiguos
      mediaQuery.addListener(handleMediaQueryChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      } else {
        mediaQuery.removeListener(handleMediaQueryChange);
      }
    };
  }, []);

  const techList = technologies.map((technology, index) => {
    return (
      <div className="w-28 h-28 text-center mt-3" key={index}>
        {isMobile ? (
          <img src={technology.icon} alt={technology.name} />
        ) : (
          <BallCanvas icon={technology.icon} />
        )}

        <span className="font-bold select-none">{technology.name}</span>
      </div>
    );
  });

  return (
    <div className="flex flex-row flex-wrap justify-center gap-8">
      {techList}
    </div>
  );
};

export default SectionWrapper(Tech, "");
