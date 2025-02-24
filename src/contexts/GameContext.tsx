import React, { useContext, useState } from "react";
import { createContext } from "react";

export type GameState = "UserSelection" | "AISelection" | "Result";

export type GameContextState = {
  score: number;
  gameState: GameState;
};

export type GameContextType = {
  game: GameContextState;
  setGame: React.Dispatch<React.SetStateAction<GameContextState>>;
};

export const GameContext = createContext<GameContextType | null>(null);

const initalGameContextStateValue: GameContextState = {
  score: 0,
  gameState: "UserSelection",
};

export function GameContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [game, setGame] = useState<GameContextState>(
    initalGameContextStateValue
  );

  return (
    <GameContext.Provider value={{ game, setGame }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGameContext(
  gameContext: React.Context<GameContextType | null>
) {
  const context = useContext(gameContext);

  if (!context) {
    throw new Error("useGameContext has to be within GameContextProvider...");
  } else {
    return context;
  }
}
