import GameChoiceButton from "./GameChoiceButton";
import { ChoiceDataList } from "../../data";
import TriangleBackground from "../../assets/images/bg-triangle.svg";
import {
  GameContext,
  switchGameState,
  useGameContext,
} from "../../contexts/GameContext";
import { ChoiceType } from "../../types";

const GameUserSelectionSection = () => {
  const { setGame } = useGameContext(GameContext);

  const handleButtonClick = (choice: ChoiceType) => {
    setGame((prevState) => {
      const updatedGame = { ...prevState, userChoice: choice };
      const finalUpdatedGame = switchGameState(updatedGame);
      return finalUpdatedGame;
    });
  };

  return (
    <div className="relative aspect-square mx-auto w-[calc(100%-4.25rem)]">
      {/** Background shape */}
      <img
        src={TriangleBackground}
        alt="Triangle background"
        className="absolute w-full h-full"
      />

      {/** Buttons */}
      <GameChoiceButton
        choice={ChoiceDataList[0]}
        className="absolute top-0 -translate-y-1/2 left-0 -translate-x-1/4 cursor-pointer"
        onClick={handleButtonClick}
      />
      <GameChoiceButton
        choice={ChoiceDataList[1]}
        className="absolute top-0 -translate-y-1/2 right-0 translate-x-1/4 cursor-pointer"
        onClick={handleButtonClick}
      />
      <GameChoiceButton
        choice={ChoiceDataList[2]}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={handleButtonClick}
      />
    </div>
  );
};

export default GameUserSelectionSection;
