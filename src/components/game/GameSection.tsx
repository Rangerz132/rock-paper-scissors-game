import TriangleBackground from "../../assets/images/bg-triangle.svg";
import { ChoiceDataList } from "../../data";
import GameChoiceButton from "./GameChoiceButton";

const GameSection = () => {
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
        className="top-0 -translate-y-1/2 left-0 -translate-x-1/4"
      />
      <GameChoiceButton
        choice={ChoiceDataList[1]}
        className="top-0 -translate-y-1/2 right-0 translate-x-1/4"
      />
      <GameChoiceButton
        choice={ChoiceDataList[2]}
        className="bottom-0 left-1/2 -translate-x-1/2"
      />
    </div>
  );
};

export default GameSection;
