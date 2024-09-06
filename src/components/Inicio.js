import React from 'react';
import img18 from './img/img18.jpeg';
import background from './img/background.jpeg';
import logo2 from './img/logo2.jpeg';
import projeto from './img/projeto4.jpg';
import { motion, useScroll } from 'framer-motion';
import { img } from 'framer-motion/client';

const right = {
  offscreen: { opacity: 0, x: -100 },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
};

const left = {
  offscreen: { opacity: 0, x: 100 },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
};

function Inicio() {
  return (
    <div
      className="flex justify-center items-center bg-fixed bg-no-repeat bg-center bg-cover h-screen"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    ></div>
  );
}

export default Inicio;
