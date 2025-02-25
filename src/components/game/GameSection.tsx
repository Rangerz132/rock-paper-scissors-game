import { GameContext, useGameContext } from "../../contexts/GameContext";
import GameAISelectionSection from "./GameAISelectionSection";
import GameUserSelectionSection from "./GameUserSelectionSection";

const GameSection = () => {
  const { game } = useGameContext(GameContext);

  function changeGameState() {
    let section: React.ReactNode = <></>;

    switch (game.gameState) {
      case "UserSelection":
        section = <GameUserSelectionSection />;
        break;
      case "AISelection":
        section = <GameAISelectionSection />;
        break;
    }

    return section;
  }

  return <div className="w-full">{changeGameState()}</div>;
};

export default GameSection;
