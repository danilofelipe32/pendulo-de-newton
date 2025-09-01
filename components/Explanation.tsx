
import React from 'react';

const Explanation: React.FC = () => {
  return (
    <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-2xl border border-slate-700 space-y-4">
      <h2 className="text-2xl font-bold text-teal-400 border-b-2 border-teal-400/30 pb-2">Como Funciona?</h2>
      <p className="text-slate-300 leading-relaxed">
        O Pêndulo de Newton é um dispositivo que demonstra a <strong className="font-semibold text-slate-100">conservação do momento</strong> e da <strong className="font-semibold text-slate-100">energia</strong>.
      </p>
      <div className="space-y-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-200">Conservação de Momento</h3>
          <p className="text-slate-400">
            Quando uma esfera em movimento colide com as esferas paradas, seu momento (massa × velocidade) é transferido através delas. Em uma colisão elástica ideal, o momento total antes e depois da colisão é o mesmo.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-200">Conservação de Energia</h3>
          <p className="text-slate-400">
            A energia cinética (energia do movimento) da primeira esfera também é transferida. A esfera do lado oposto sobe a uma altura quase igual à altura da qual a primeira foi solta, demonstrando que a energia foi conservada.
          </p>
        </div>
      </div>
       <p className="text-slate-300 leading-relaxed pt-2">
        Se você levantar <strong className="font-semibold text-teal-400">duas</strong> esferas, o momento e a energia combinados delas são transferidos, fazendo com que <strong className="font-semibold text-teal-400">duas</strong> esferas do lado oposto se movam.
      </p>
    </div>
  );
};

export default Explanation;