import Logo from "./Logo";
import ScoreSection from "./ScoreSection";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full rounded-md border-2 border-neutral-header-outline p-3">
      <Logo />
      <ScoreSection />
    </div>
  );
};

export default Header;
