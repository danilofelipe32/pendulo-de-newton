
import React, { useEffect } from 'react';
import XIcon from './icons/XIcon';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-slate-800/80 backdrop-blur-md rounded-xl shadow-2xl border border-slate-700 p-6 sm:p-8 text-slate-300 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-200 transition-colors"
          aria-label="Fechar modal"
        >
          <XIcon />
        </button>

        <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-teal-400 mb-4">
          Sobre a Simulação
        </h2>
        
        <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
                Este é um simulador interativo do Pêndulo de Newton, uma ferramenta clássica para demonstrar os princípios fundamentais da física, incluindo a <strong className="font-semibold text-white">conservação de momento</strong> e a <strong className="font-semibold text-white">conservação de energia</strong>.
            </p>

            <div>
                <h3 className="text-lg font-semibold text-slate-200 mt-4 mb-2">Como Usar:</h3>
                <ol className="list-decimal list-inside space-y-2 text-slate-400">
                    <li>
                        <strong className="text-slate-300">Ajuste as Esferas:</strong> Use o controle deslizante para selecionar o número de esferas que deseja levantar.
                    </li>
                    <li>
                        <strong className="text-slate-300">Inicie a Simulação:</strong> Clique no botão 'Iniciar' para soltar as esferas e observar a transferência de energia e momento em ação.
                    </li>
                    <li>
                        <strong className="text-slate-300">Analise os Dados:</strong> Observe os 'Indicadores de Transferência' que aparecem para visualizar o momento relativo e a energia cinética envolvidos.
                    </li>
                    <li>
                        <strong className="text-slate-300">Resetar:</strong> Use o botão 'Resetar' para parar a animação e experimentar com uma configuração diferente.
                    </li>
                </ol>
            </div>

            <p className="pt-2">
                Esta simulação foi desenvolvida com fins educacionais para ajudar estudantes a visualizar e entender conceitos abstratos da física de uma maneira mais concreta e envolvente.
            </p>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
