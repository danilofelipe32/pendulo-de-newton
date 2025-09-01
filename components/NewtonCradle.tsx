
import React from 'react';

interface NewtonCradleProps {
  ballCount: number;
  liftedCount: number;
  isAnimating: boolean;
  showVectors: boolean;
}

const VectorDefs = () => (
  <svg width="0" height="0" className="absolute">
    <defs>
      <marker id="arrow-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
      </marker>
      <marker id="arrow-yellow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#facc15" />
      </marker>
      <marker id="arrow-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
      </marker>
       <marker id="arrow-red-left" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
        <path d="M 10 0 L 0 5 L 10 10 z" fill="#ef4444" />
      </marker>
      {/* Add new orange markers for transmitting force */}
      <marker id="arrow-orange" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#f97316" />
      </marker>
       <marker id="arrow-orange-left" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
        <path d="M 10 0 L 0 5 L 10 10 z" fill="#f97316" />
      </marker>
    </defs>
  </svg>
);


const NewtonCradle: React.FC<NewtonCradleProps> = ({ ballCount, liftedCount, isAnimating, showVectors }) => {
  const balls = Array.from({ length: ballCount });
  const frameWidth = 5 + ballCount * 3; // 3rem per ball + 5rem for frame/padding

  return (
    <div className="flex flex-col items-center">
      <VectorDefs />
      {/* Frame Structure */}
      <div className={`h-6 bg-slate-700 rounded-t-md ${isAnimating ? 'animate-pulse-glow' : ''}`} style={{ width: `${frameWidth}rem` }}></div>
      <div className="flex">
        <div className={`w-6 h-56 bg-slate-700 ${isAnimating ? 'animate-pulse-glow' : ''}`}></div>
        <div className="flex justify-center items-start pt-1 px-4 bg-slate-800/20">
          {balls.map((_, index) => {
            const isLiftedInitial = !isAnimating && index < liftedCount;
            let animationClass = '';

            const isSwinging = isAnimating && (index < liftedCount || index >= ballCount - liftedCount);
            const isStationary = isAnimating && index >= liftedCount && index < ballCount - liftedCount;

            if (isAnimating) {
              if (index < liftedCount) {
                animationClass = 'animate-swing-left';
              } else if (index >= ballCount - liftedCount) {
                animationClass = 'animate-swing-right';
              } else {
                animationClass = 'animate-subtle-impact';
              }
            }

            const ballBgClass = isLiftedInitial 
              ? 'bg-gradient-to-br from-teal-300 via-cyan-400 to-blue-500' 
              : 'bg-gradient-to-br from-slate-200 via-slate-400 to-slate-500';

            return (
              <div
                key={index}
                className={`relative w-12 origin-top ${!isAnimating ? 'transition-transform duration-500 ease-in-out' : ''} ${isLiftedInitial ? 'transform rotate-40' : ''} ${animationClass}`}
                style={{ height: '200px' }}
              >
                {/* String */}
                <div className="absolute top-0 left-1/2 w-0.5 h-full bg-slate-400 -translate-x-1/2"></div>
                
                {/* Ball */}
                <div className={`absolute bottom-0 left-1/2 w-12 h-12 rounded-full shadow-lg shadow-black/30 -translate-x-1/2 ${ballBgClass}`}></div>

                {/* Vectors SVG Overlay */}
                {showVectors && (
                  <svg className="absolute inset-0 overflow-visible" viewBox="0 0 48 200">
                    {/* Ft (Tension) & Fg (Gravity) for swinging balls */}
                    {isSwinging && (
                      <>
                        {/* Ft - Tension (rotates with parent) */}
                        <g>
                          <line x1="24" y1="170" x2="24" y2="140" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#arrow-blue)" />
                          <text x="28" y="155" fill="#38bdf8" fontSize="10" fontWeight="bold">Ft</text>
                        </g>
                        {/* Fg - Gravity (with counter-rotation to always point down) */}
                        <g 
                          className={index < liftedCount ? 'animate-counter-swing-left' : 'animate-counter-swing-right'}
                          style={{ transformOrigin: '24px 176px' }}
                        >
                          <line x1="24" y1="182" x2="24" y2="212" stroke="#facc15" strokeWidth="1.5" markerEnd="url(#arrow-yellow)" />
                          <text x="28" y="200" fill="#facc15" fontSize="10" fontWeight="bold">Fg</text>
                        </g>
                      </>
                    )}

                    {/* F (Impact) for stationary balls */}
                    {isStationary && (
                      <g>
                        {/* Receiving Impact (Left to Right) - Red */}
                        <g className="animate-impact-force-ltr" style={{transformOrigin: 'left'}}>
                           <line x1="2" y1="176" x2="22" y2="176" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arrow-red)" />
                           <text x="8" y="172" fill="#ef4444" fontSize="10" fontWeight="bold">F</text>
                        </g>
                        {/* Transmitting Impact (Right to Left) - Orange */}
                        <g className="animate-impact-force-rtl" style={{transformOrigin: 'right'}}>
                           <line x1="46" y1="176" x2="26" y2="176" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrow-orange-left)" />
                           <text x="32" y="172" fill="#f97316" fontSize="10" fontWeight="bold">F</text>
                        </g>
                      </g>
                    )}
                  </svg>
                )}
              </div>
            );
          })}
        </div>
        <div className={`w-6 h-56 bg-slate-700 ${isAnimating ? 'animate-pulse-glow' : ''}`}></div>
      </div>
      <div className={`h-8 bg-slate-700 rounded-b-md ${isAnimating ? 'animate-pulse-glow' : ''}`} style={{ width: `${frameWidth}rem` }}></div>
    </div>
  );
};

export default NewtonCradle;