
import React from 'react';

const VectorExplanation: React.FC = () => {
  return (
    <div className="w-full max-w-sm mx-auto mt-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-slate-700 animate-fade-in-scale">
      <h3 className="text-md font-semibold text-teal-400 mb-3 text-center border-b border-slate-700 pb-2">
        Legenda dos Vetores de Força
      </h3>
      <ul className="space-y-2 text-sm">
        <li className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-yellow-400 mr-3 border border-yellow-300"></span>
          <div>
            <strong className="font-semibold text-slate-200">Fg (Força da Gravidade):</strong>
            <span className="text-slate-400"> Atração da Terra sobre a esfera.</span>
          </div>
        </li>
        <li className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-sky-500 mr-3 border border-sky-400"></span>
           <div>
            <strong className="font-semibold text-slate-200">Ft (Força de Tensão):</strong>
            <span className="text-slate-400"> Força exercida pelo fio.</span>
          </div>
        </li>
        <li className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-red-500 mr-3 border border-red-400"></span>
           <div>
            <strong className="font-semibold text-slate-200">F (Força de Impacto - Recebido):</strong>
            <span className="text-slate-400"> Força de contato na colisão.</span>
          </div>
        </li>
        <li className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-orange-500 mr-3 border border-orange-400"></span>
           <div>
            <strong className="font-semibold text-slate-200">F (Força de Impacto - Transmitido):</strong>
            <span className="text-slate-400"> Reação que propaga o momento.</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default VectorExplanation;
