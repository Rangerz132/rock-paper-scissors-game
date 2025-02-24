import RulesDiagram from "../../assets/images/image-rules.svg";
import { RulesContext, useRulesContext } from "../../contexts/RulesContext";
import CloseButton from "../ui/buttons/CloseButton";

const RulesSection = () => {
  const { setRules } = useRulesContext(RulesContext);
  return (
    <div className="bg-white w-full h-full relative">
      <div className="wrapper pt-20 flex flex-col space-y-25 justify-center items-center">
        {/** Title */}
        <h1 className="text-neutral-dark-text">Rules</h1>
        {/** Image  */}
        <img src={RulesDiagram} alt={"rules"} />
      </div>

      {/** Close button */}
      <CloseButton
        onClick={() => setRules(false)}
        className="bottom-center cursor-pointer"
      />
    </div>
  );
};

export default RulesSection; 
