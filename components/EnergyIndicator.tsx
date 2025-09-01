
import React from 'react';

interface EnergyIndicatorProps {
  liftedBalls: number;
  maxBalls: number;
}

const EnergyIndicator: React.FC<EnergyIndicatorProps> = ({ liftedBalls, maxBalls }) => {
  const percentage = maxBalls > 0 ? (liftedBalls / maxBalls) * 100 : 0;

  const momentumPercentage = percentage;
  const energyPercentage = percentage;

  return (
    <div className="w-full max-w-sm mx-auto p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-2xl border border-slate-700">
      <h3 className="text-lg font-semibold text-slate-200 mb-4 text-center">Indicadores de Transferência</h3>
      <div className="space-y-4">
        {/* Momentum Bar */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-slate-300">Momento Relativo</span>
            <span className="text-sm font-bold text-teal-400">{Math.round(momentumPercentage)}%</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2.5">
            <div
              className="bg-teal-500 h-2.5 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${momentumPercentage}%` }}
              role="progressbar"
              aria-valuenow={Math.round(momentumPercentage)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Indicador de momento relativo"
            ></div>
          </div>
        </div>

        {/* Kinetic Energy Bar */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-slate-300">Energia Cinética Relativa</span>
            <span className="text-sm font-bold text-lime-400">{Math.round(energyPercentage)}%</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2.5">
            <div
              className="bg-lime-500 h-2.5 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${energyPercentage}%` }}
              role="progressbar"
              aria-valuenow={Math.round(energyPercentage)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Indicador de energia cinética relativa"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyIndicator;
