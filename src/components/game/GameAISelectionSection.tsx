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

  const resultJSX = () => {
    return (
      <div>
        {AISelected && (
          <div className="flex flex-col flex-center items-center space-y-6 ">
            <h1 className="text-white">{getResult()}</h1>
            <Button className="cta-2" onClick={handlePlayAgain}>
              Play again
            </Button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col space-y-10 sm:flex-row sm:space-y-0 sm:justify-center md:items-center text-center">
      {/** Choice results */}
      <div className="flex flex-row justify-between items-center space-x-10">
        {/** User choice */}
        <div className="flex flex-col items-center space-y-6 sm:space-y-16 sm:flex-col-reverse sm:space-y-reverse ">
          <GameChoiceButton
            choice={getChoiceButton(game.userChoice as ChoiceType)}
            onClick={() => {}}
            className="relative sm:scale-120"
          />
          <h3 className="text-white">You picked</h3>
        </div>
        {/** Result desktop */}
        <div className="hidden absolute sm:flex sm:relative ">
          {resultJSX()}
        </div>
        {/** AI choice */}
        <div className="flex flex-col items-center space-y-6 sm:space-y-16 sm:flex-col-reverse sm:space-y-reverse ">
          {AISelected ? (
            <GameChoiceButton
              choice={getChoiceButton(game.AIChoice as ChoiceType)}
              onClick={() => {}}
              className="relative sm:scale-120"
            />
          ) : (
            <div className="w-32 h-32 sm:w-40 sm:h-40 bg-black opacity-10 rounded-full sm:scale-120"></div>
          )}
          <h3 className="text-white">The house picked</h3>
        </div>
      </div>
      {/** Result mobile */}
      <div className="sm:hidden sm:absolute"> {resultJSX()}</div>
    </div>
  );
};

export default GameAISelectionSection;
