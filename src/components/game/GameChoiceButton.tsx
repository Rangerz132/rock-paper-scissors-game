import { ChoiceData } from "../../types";

const GameChoiceButton = (props: {
  choice: ChoiceData;
  className?: string;
}) => {
  return (
    <div className={`absolute ${props.className}`}>
      {/** Color background */}
      <div
        className={`${props.choice.gradient.from} rounded-full w-32 h-32 flex items-center justify-center relative z-2`}
      >
        {/** White backround shadow */}
        <div className="bg-neutral-300 rounded-full w-25 h-24 flex items-center justify-center relative z-3">
          {/** White backround  */}
          <div className="bg-neutral-200 rounded-full w-25 h-24 top-1 absolute z-4"></div>
          {/** Icon */}
          <img
            src={props.choice.icon.url}
            alt={props.choice.icon.alt}
            className=" relative z-5 top-1"
          />
        </div>
      </div>

      {/** Color background shadow*/}
      <div
        className={`${props.choice.gradient.to} rounded-full w-32 h-32 flex items-center justify-center absolute top-1 z-1 shadow-xl`}
      ></div>
    </div>
  );
};

export default GameChoiceButton;
