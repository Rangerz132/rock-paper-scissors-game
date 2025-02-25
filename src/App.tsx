import GameSection from "./components/game/GameSection";
import Header from "./components/Header";
import RulesSection from "./components/rules/RulesSection";
import Button from "./components/ui/buttons/Button";
import { RulesContext, useRulesContext } from "./contexts/RulesContext";

function App() {
  const { rules, setRules } = useRulesContext(RulesContext);

  return (
    <div className="w-screen h-[100dvh]">
      <div className="wrapper h-full flex flex-col justify-between items-center pt-6 pb-10">
        {/** Header */}
        <Header />

        {/** Game Section */}
        <GameSection />

        {/** Rules Button */}
        <div>
          <Button onClick={() => setRules(true)} className="cta-1">
            Rules
          </Button>
        </div>
      </div>

      {/** Rules section */}
      <div
        className={`fixed z-10 w-full h-[100dvh] left-0 top-0 transition-all duration-200 ${
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
