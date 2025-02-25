import GameChoiceButton from "./GameChoiceButton";
import { ChoiceType } from "../../types";
import {
  PaperChoiceData,
  RockChoiceData,
  ScissorsChoiceData,
} from "../../data";
import {
  GameContext,
  getRandomAIChoice,
  useGameContext,
  userWins,
} from "../../contexts/GameContext";
import { useEffect, useState } from "react";
import Button from "../ui/buttons/Button";

const GameAISelectionSection = () => {
  const { game, setGame } = useGameContext(GameContext);
  const [AISelected, setAISelected] = useState(false);

  useEffect(() => {
    setGame((prevState) => {
      const randomChoice = getRandomAIChoice(prevState);
      return { ...prevState, AIChoice: randomChoice };
    });
  }, []);

  useEffect(() => {
    if (!game.AIChoice) return;

    const interval = setInterval(() => {
      setAISelected(true);

      if (
        userWins(game.userChoice as ChoiceType, game.AIChoice as ChoiceType)
      ) {
        setGame((prevGame) => ({ ...prevGame, score: prevGame.score + 1 }));
      }
      clearInterval(interval);
    }, 500);

    return () => clearInterval(interval);
  }, [game.AIChoice]);

  function handlePlayAgain() {
    setAISelected(false);
    setGame((prevState) => {
      return {
        ...prevState,
        userChoice: undefined,
        AIChoice: undefined,
        gameState: "UserSelection",
      };
    });
  }

  function getChoiceButton(choice: ChoiceType) {
    switch (choice) {
      case "Rock":
        return RockChoiceData;
      case "Scissors":
        return ScissorsChoiceData;
      case "Paper":
        return PaperChoiceData;
    }
  }

  function getResult(): string {
    const userWin = userWins(
      game.userChoice as ChoiceType,
      game.AIChoice as ChoiceType
    );
    if (userWin === undefined) {
      return "Tie";
    } else if (userWin) {
      return "You win";
    } else {
      return "You lose";
    }
  }

  return (
    <div className="flex flex-col space-y-10">
      {/** Results */}
      <div className="flex flex-row justify-between items-center">
        {/** User choice */}
        <div className="flex flex-col items-center space-y-6">
          <GameChoiceButton
            choice={getChoiceButton(game.userChoice as ChoiceType)}
            onClick={() => {}}
            className="relative"
          />
          <h3 className="text-white">You picked</h3>
        </div>
        {/** AI choice */}
        <div className="flex flex-col items-center space-y-6">
          {AISelected ? (
            <GameChoiceButton
              choice={getChoiceButton(game.AIChoice as ChoiceType)}
              onClick={() => {}}
              className="relative"
            />
          ) : (
            <div className="w-32 h-32 bg-black opacity-10 rounded-full"></div>
          )}
          <h3 className="text-white">The house picked</h3>
        </div>
      </div>

      <div>
        {AISelected && (
          <div className="flex flex-col flex-center items-center space-y-6">
            <h1 className="text-white">{getResult()}</h1>
            <Button className="cta-2" onClick={handlePlayAgain}>
              Play again
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameAISelectionSection;
