import React from 'react';

const arrayavaliacao = [
  {
    nome: 'CLEONICE dallepiane',
    nota: 5,
    comentario: 'Muito competente!',
  },
  {
    nome: 'Augusto Freitas',
    nota: 5,
    comentario:
      'Profissional muito competente! Possui ideias e projetos inovadores que auxiliam no desenvolver de qualquer obra.',
  },
  {
    nome: 'Giovana F Maroski',
    nota: 5,
    comentario:
      'Excelente profissional! Ótimo atendimento, trabalho de qualidade e competente.',
  },
  {
    nome: 'Richard Mantovani',
    nota: 5,
    comentario:
      'Ótima profissional, super competente e muito atenciosa! Voltarei a fechar negócios. Indico.',
  },
  {
    nome: 'Studio Suelen dos Santos',
    nota: 5,
    comentario:
      'Adorei o trabalho dessa engenheira, muito competente e comprometida super indico a profissional.',
  },
  {
    nome: 'Sonia Donatto',
    nota: 5,
    comentario:
      'Excelente profissional, responsável, correta, prestativa, recomendo.',
  },
  {
    nome: 'Claudia Pletsch',
    nota: 5,
    comentario:
      'Excelente profissional !! Indico ela pelos trabalhos desenvolvidos na área, é capacitada e muito dedicada fazendo com que cada Projetos seja único a seus clientes. Para quem esta em busca de um Engenheiro em Ijuí e região super recomendo a Sabrina Schreiber.',
  },
];

function Avaliacoes() {
  return (
    <div
      className="flex space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-16 overflow-hidden group -mt-10 sm:-mt-16 md:-mt-20"
      id="services"
    >
      <div className="flex space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-16 gap-2 sm:gap-4 mb-8 animate-loop-scroll">
        {arrayavaliacao.map((arrayavaliacao, index) => (
          <div
            key={index}
            className="box-content w-64 sm:w-72 md:w-80 lg:w-96 p-2 sm:p-4 bg-gray-200 rounded-lg shadow-lg"
          >
            <p className="font-bold text-base sm:text-lg md:text-xl">
              {arrayavaliacao.nome}
            </p>
            <p className="text-yellow-500 text-sm sm:text-base md:text-lg">
              Nota: {arrayavaliacao.nota} ⭐⭐⭐⭐⭐
            </p>
            <p className="italic text-sm sm:text-base">
              {arrayavaliacao.comentario}
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              {arrayavaliacao.data}
            </p>
          </div>
        ))}
      </div>
      <div
        className="flex space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-16 gap-2 sm:gap-4 mb-8 animate-loop-scroll"
        aria-hidden="true"
      >
        {arrayavaliacao.map((arrayavaliacao, index) => (
          <div
            key={index}
            className="box-content w-64 sm:w-72 md:w-80 lg:w-96 p-2 sm:p-4 bg-gray-200 rounded-lg shadow-lg"
          >
            <p className="font-bold text-base sm:text-lg md:text-xl">
              {arrayavaliacao.nome}
            </p>
            <p className="text-yellow-500 text-sm sm:text-base md:text-lg">
              Nota: {arrayavaliacao.nota} ⭐⭐⭐⭐⭐
            </p>
            <p className="italic text-sm sm:text-base">
              {arrayavaliacao.comentario}
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              {arrayavaliacao.data}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Avaliacoes;
