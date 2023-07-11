import React, { createContext, useState } from 'react';

export const HistoricoContext = createContext();

export const HistoricoProvider = ({ children }) => {
  const [treinoConcluido, setTreinoConcluido] = useState(false);

  const handleConcluirTreino = () => {
    setTreinoConcluido(true);
  };

  return (
    <HistoricoContext.Provider value={{ treinoConcluido, handleConcluirTreino }}>
      {children}
    </HistoricoContext.Provider>
  );
};
