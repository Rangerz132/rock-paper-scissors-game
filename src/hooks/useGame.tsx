import {
  GameContext,
  GameState,
  useGameContext,
} from "../contexts/GameContext";

function useGame() {
  const { game, setGame } = useGameContext(GameContext);

  const goToNextGameState = () => {
    const currentState: GameState = game.gameState;

    switch (currentState) {
      case "UserSelection":
        setGame({ ...game, gameState: "AISelection" });
        break;
      case "AISelection":
        setGame({ ...game, gameState: "Result" });
        break;
      case "Result":
        setGame({ ...game, gameState: "UserSelection" });
        break;
    }
  };

  return { goToNextGameState };
}

export default useGame;
