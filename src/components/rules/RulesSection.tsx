import RulesDiagram from "../../assets/images/image-rules.svg";
import { RulesContext, useRulesContext } from "../../contexts/RulesContext";
import CloseButton from "../ui/buttons/CloseButton";

const RulesSection = () => {
  const { setRules } = useRulesContext(RulesContext);
  return (
    <div className="bg-white w-full h-full ">
      <div className="wrapper py-20 flex flex-col justify-between items-center h-full">
        {/** Title */}
        <h1 className="text-neutral-dark-text">Rules</h1>
        {/** Image  */}
        <img src={RulesDiagram} alt={"rules"} />
        {/** Close button */}
        <CloseButton
          onClick={() => setRules(false)}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default RulesSection;
