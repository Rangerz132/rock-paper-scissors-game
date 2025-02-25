import { GameContext, useGameContext } from "../contexts/GameContext";

const ScoreSection = () => {
  const { game } = useGameContext(GameContext);

  return (
    <div className="bg-white rounded-md flex flex-col  py-2 px-6 items-center justify-center">
      <div className="uppercase tracking-widest font-semibold text-xs text-neutral-score-text">
        Score
      </div>
      <h2 className="text-neutral-dark-text">{game.score}</h2>
    </div>
  );
};

export default ScoreSection;
