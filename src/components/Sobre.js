import React from 'react';
import img14 from './img/img14.png';
import img1 from './img/img15.jpeg';
import logo1 from './img/logo1.jpeg';
import { motion, useScroll } from 'framer-motion';
import './Font.css';
import { ReactComponent as WhatsApp } from './wppblack2.svg';

const SobreMotion: Variants = {
  offscreen: {
    x: 10,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'easeOut',
      duration: 0.5,
    },
  },
};

function Sobre() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      variants={SobreMotion}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div
        className="container max-xl mx-auto flex flex-col md:flex-row items-center p-4"
        id="sobre"
      >
        {/* Coluna Esquerda */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full">
            <img
              src={img14}
              alt="Logo"
              className="object-cover rounded-lg w-full h-auto"
            />
            <div className="absolute top-20 left-0 sm:top-24 md:top-40">
              <img
                src={logo1}
                alt="Logo"
                className="object-cover rounded-lg h-16 sm:h-24 md:h-40"
              />
            </div>
          </div>
        </div>

        {/* Coluna Direita */}
        <div className="w-full md:w-1/2 flex flex-col justify-center relative">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center mb-6 Quemsomos">
            QUEM SOMOS
          </h1>
          <p className="leading-relaxed text-balance text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">
            A <strong>Sabrina Schreiber Engenharia</strong> é especializada em
            soluções técnicas e projetos de engenharia civil. Atuamos com
            regularização imobiliária, consultoria e assessoria técnica, sempre
            com ética, imparcialidade e transparência. Desenvolvemos projetos
            arquitetônicos, elétricos, hidráulicos e de drenagem pluvial, além
            de serviços de retificação de áreas e loteamentos. Nossa equipe atua
            com foco em segurança, eficiência e inovação, seguindo as normas
            técnicas e priorizando as necessidades de cada cliente.
          </p>
          <div className="mt-4 ml-4 relative z-20">
            <a
              href="https://wa.me/message/TLIN42U6POA2H1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-2 px-4 rounded flex items-center space-x-2"
            >
              <WhatsApp className="w-6 h-6" />
              <span>
                Está com dúvidas? Entre em contato conosco pelo WhatsApp
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Sobre;
