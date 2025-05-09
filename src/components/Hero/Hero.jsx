import React, { useEffect } from "react";
import { MENULINKS, personalData, TYPED_STRINGS } from "../../../constants";
import styles from "./Hero.module.scss";
import Profiles from "../Profiles/Profiles";
import Button from "../Button/Button";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <>
      <section
        id={MENULINKS[0].ref}
        className={`w-full flex md:items-center py-8 h-container 2xl:container mx-auto xl:px-20 md:px-12 px-4 h-screen relative ${styles.fadecontent} `}
      >
        <img
          src="/hero.svg"
          alt="Hero"
          className="absolute top-[0] h-[100%] object-cover"
        />
        <div className="flex flex-col pt-40 md:pt-0 select-none">
          <div className={`${styles.intro} flex gap-3`}>
            <h5 className="font-mono font-medium text-indigo-light">
              Hi, my name is
            </h5>
            <img
              src="./waving_hand.gif"
              className="relative bottom-1"
              width={30}
              alt=""
            />
          </div>
          <h1
            className={`${styles.heroName} text-white text-6xl font-semibold`}
          >
            <span className={`relative ${styles.emphasize} staggered-reveal`}>
              Supakun
            </span>
            <span className={`${styles.intro1}`}> Thata </span>
          </h1>
          <p
            className={`${styles.intro1} pt-6 text-3xl text-gray-light-3 font-mono leading-relaxed`}
          >
            <Typewriter
              options={{ strings: TYPED_STRINGS, autoStart: true, loop: true }}
            />
          </p>
          <div className={`${styles.intro2}`}>
            <Profiles />
          </div>
          <div className={`${styles.intro3} flex gap-8 pt-4`}>
            <Button href={`#${MENULINKS[5].ref}`} classes="link" type="primary">
              CONTACT ME
            </Button>
            <Button
              href={personalData.resume}
              target="_blank"
              classes="link"
              type="secondary"
            >
              GET RESUME
            </Button>
          </div>
        </div>
        <div
          className={`${styles.intro} absolute invisible w-4/12 lg:visible lg:right-12 2xl:right-16`}
        >
          <div className={`${styles.blob}`}></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
