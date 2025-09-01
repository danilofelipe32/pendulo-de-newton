import React, { useState, useCallback, useMemo } from 'react';
import NewtonCradle from './components/NewtonCradle';
import Controls from './components/Controls';
import EnergyIndicator from './components/EnergyIndicator';
import InfoModal from './components/InfoModal';
import InfoIcon from './components/icons/InfoIcon';
import VectorExplanation from './components/VectorExplanation';

const App: React.FC = () => {
  const [totalBalls, setTotalBalls] = useState<number>(5);
  const [liftedBalls, setLiftedBalls] = useState<number>(1);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showVectors, setShowVectors] = useState<boolean>(false);
  
  const maxLiftableBalls = useMemo(() => Math.floor(totalBalls / 2), [totalBalls]);

  const collisionSound = useMemo(() => new Audio('https://cdn.freesound.org/previews/219/219002_4023692-hq.mp3'), []);
  const clickSound = useMemo(() => new Audio('https://cdn.freesound.org/previews/270/270322_5123851-hq.mp3'), []);

  const handleStart = useCallback(() => {
    if (liftedBalls > 0) {
      collisionSound.loop = true;
      collisionSound.currentTime = 0;
      collisionSound.play();
      setIsAnimating(true);
    }
  }, [liftedBalls, collisionSound]);

  const handleReset = useCallback(() => {
    collisionSound.pause();
    collisionSound.currentTime = 0;
    setIsAnimating(false);
  }, [collisionSound]);
  
  const handleLiftedBallCountChange = useCallback((count: number) => {
    if (!isAnimating) {
      clickSound.currentTime = 0;
      clickSound.play();
      setLiftedBalls(count);
    }
  }, [isAnimating, clickSound]);

  const handleTotalBallCountChange = useCallback((count: number) => {
    if (!isAnimating) {
      clickSound.currentTime = 0;
      clickSound.play();
      setTotalBalls(count);
      setLiftedBalls(1); // Reset lifted balls to a safe value
    }
  }, [isAnimating, clickSound]);
  
  const handleShowVectorsChange = useCallback((show: boolean) => {
    if (!isAnimating) {
      clickSound.currentTime = 0;
      clickSound.play();
      setShowVectors(show);
    }
  }, [isAnimating, clickSound]);


  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 flex flex-col p-4 sm:p-8 font-sans">
      <header className="relative w-full max-w-7xl mx-auto text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 pb-2">
          Simulador de Pêndulo de Newton
        </h1>
        <p className="text-lg text-slate-400 mt-2">Uma demonstração interativa da conservação de momento e energia.</p>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="absolute top-0 right-0 p-2 text-slate-400 hover:text-teal-400 transition-colors duration-300"
          aria-label="Mais informações"
        >
          <InfoIcon />
        </button>
      </header>
      
      <main className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8 items-start">
        {/* --- Left Column: Controls & Simulation --- */}
        <div className="w-full flex flex-col items-center gap-6 xl:gap-8 animate-fade-in-scale">
          <Controls
            totalBalls={totalBalls}
            liftedBalls={liftedBalls}
            maxBalls={maxLiftableBalls}
            isAnimating={isAnimating}
            showVectors={showVectors}
            onTotalBallCountChange={handleTotalBallCountChange}
            onBallCountChange={handleLiftedBallCountChange}
            onShowVectorsChange={handleShowVectorsChange}
            onStart={handleStart}
            onReset={handleReset}
          />
          <NewtonCradle
            ballCount={totalBalls}
            liftedCount={liftedBalls}
            isAnimating={isAnimating}
            showVectors={showVectors}
          />
        </div>

        {/* --- Right Column: Information --- */}
        <div className="w-full flex flex-col items-center gap-6 xl:gap-8 animate-fade-in-scale" style={{ animationDelay: '150ms' }}>
          <EnergyIndicator 
            liftedBalls={liftedBalls} 
            maxBalls={maxLiftableBalls} 
          />
          {showVectors && <VectorExplanation />}
        </div>
      </main>

      <footer className="w-full max-w-7xl mx-auto text-center mt-12 text-slate-500">
        <p>Desenvolvido para fins educacionais.</p>
      </footer>
      
      <InfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;