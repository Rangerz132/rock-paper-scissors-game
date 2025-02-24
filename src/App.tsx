import Header from "./components/Header";
import RulesSection from "./components/rules/RulesSection";
import Button from "./components/ui/buttons/Button";
import { RulesContext, useRulesContext } from "./contexts/RulesContext";

function App() {
  const { rules, setRules } = useRulesContext(RulesContext);

  return (
    <div>
      <div className="wrapper">
        {/** Header */}
        <div className="pt-6 flex flex-col space-y-20">
          <Header />
          <div>Test</div>
        </div>
      </div>

      {/** Rules button */}
      <div className="bottom-center">
        <Button onClick={() => setRules(true)} className="cta-1">
          Rules
        </Button>
      </div>

      {/** Rules section */}
      <div
        className={`absolute w-screen h-screen left-0 top-0 transition-all duration-200 ${
          rules
            ? "opacity-100 pointer-events-auto"
            : "opacity-0  pointer-events-none"
        }`}
      >
        <RulesSection />
      </div>
    </div>
  );
}

export default App;
