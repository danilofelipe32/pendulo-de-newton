
import React from 'react';

interface ControlsProps {
  totalBalls: number;
  liftedBalls: number;
  maxBalls: number;
  isAnimating: boolean;
  showVectors: boolean;
  onTotalBallCountChange: (count: number) => void;
  onBallCountChange: (count: number) => void;
  onShowVectorsChange: (show: boolean) => void;
  onStart: () => void;
  onReset: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  totalBalls,
  liftedBalls,
  maxBalls,
  isAnimating,
  showVectors,
  onTotalBallCountChange,
  onBallCountChange,
  onShowVectorsChange,
  onStart,
  onReset,
}) => {
  return (
    <div className="w-full max-w-sm mx-auto mt-8 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-2xl border border-slate-700">
      <div className="mb-6">
        <label htmlFor="total-balls-select" className="block mb-2 text-sm font-medium text-slate-300">
          Total de Esferas:
        </label>
        <select
          id="total-balls-select"
          value={totalBalls}
          onChange={(e) => onTotalBallCountChange(parseInt(e.currentTarget.value, 10))}
          disabled={isAnimating}
          className="w-full p-2 bg-slate-700 border border-slate-600 rounded-lg text-slate-200 focus:ring-2 focus:ring-teal-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="ball-slider" className="block mb-2 text-sm font-medium text-slate-300">
          Esferas Levantadas: <span className="font-bold text-teal-400 text-lg">{liftedBalls}</span>
        </label>
        <input
          id="ball-slider"
          type="range"
          min="1"
          max={maxBalls}
          value={liftedBalls}
          onChange={(e) => onBallCountChange(parseInt(e.currentTarget.value, 10))}
          disabled={isAnimating}
          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer disabled:cursor-not-allowed [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-teal-400 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:bg-teal-400 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-none"
        />
      </div>

       <div className="mb-6">
        <label
          htmlFor="vectors-toggle"
          className={`flex justify-between items-center ${isAnimating ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
        >
          <span className="text-sm font-medium text-slate-300">Mostrar Vetores de Força</span>
          <div className="relative">
            <input
              id="vectors-toggle"
              type="checkbox"
              className="sr-only peer"
              checked={showVectors}
              onChange={(e) => onShowVectorsChange(e.currentTarget.checked)}
              disabled={isAnimating}
            />
            <div className="w-11 h-6 bg-slate-700 rounded-full peer peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-offset-slate-800 peer-focus:ring-teal-500 peer-checked:bg-teal-500 transition-colors"></div>
            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5"></div>
          </div>
        </label>
      </div>
      
      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={onStart}
          disabled={isAnimating}
          className="w-full px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg shadow-lg hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-75 transition-all duration-300 disabled:bg-slate-600 disabled:text-slate-400 disabled:cursor-not-allowed disabled:shadow-none"
        >
          Iniciar
        </button>
        <button
          onClick={onReset}
          disabled={!isAnimating}
          className="w-full px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg shadow-lg hover:from-amber-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75 transition-all duration-300 disabled:bg-slate-600 disabled:text-slate-400 disabled:cursor-not-allowed disabled:shadow-none"
        >
          Resetar
        </button>
      </div>
    </div>
  );
};

export default Controls;