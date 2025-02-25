import React, { useContext, useState } from "react";
import { createContext } from "react";
import { ChoiceType } from "../types";

export type GameState = "UserSelection" | "AISelection";

export type GameContextState = {
  score: number;
  gameState: GameState;
  userChoice: ChoiceType | undefined;
  AIChoice: ChoiceType | undefined;
  choices: ChoiceType[];
};

export type GameContextType = {
  game: GameContextState;
  setGame: React.Dispatch<React.SetStateAction<GameContextState>>;
};

export const GameContext = createContext<GameContextType | null>(null);

const initalGameContextStateValue: GameContextState = {
  score: 0,
  gameState: "UserSelection",
  userChoice: undefined,
  AIChoice: undefined,
  choices: ["Rock", "Scissors", "Paper"],
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

export function getRandomAIChoice(gameContext: GameContextState) {
  const randomChoiceIndex = Math.floor(
    Math.random() * gameContext.choices.length
  );
  return gameContext.choices[randomChoiceIndex];
}

export function switchGameState(
  gameContextState: GameContextState
): GameContextState {
  let finalUpdatedGame = gameContextState;
  switch (gameContextState.gameState) {
    case "UserSelection":
      return (finalUpdatedGame = {
        ...gameContextState,
        gameState: "AISelection",
      });

    case "AISelection":
      return (finalUpdatedGame = {
        ...gameContextState,
        gameState: "UserSelection",
      });

    default:
      return finalUpdatedGame;
  }
}

export function userWins(
  userChoice: ChoiceType,
  AIChoice: ChoiceType
): boolean | undefined {
  console.log(userChoice, AIChoice);
  if (userChoice === "Rock" && AIChoice === "Scissors") {
    console.log("nice");
    return true;
  } else if (userChoice === "Scissors" && AIChoice === "Paper") {
    return true;
  } else if (userChoice === "Paper" && AIChoice === "Rock") {
    return true;
  } else if (userChoice === AIChoice) {
    return undefined;
  } else {
    return false;
  }
}
