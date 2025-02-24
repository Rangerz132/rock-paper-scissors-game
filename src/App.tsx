import Header from "./components/Header";
import Button from "./components/ui/buttons/Button";

function App() {
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
      <div className="absolute left-[50%] -translate-x-1/2 bottom-12">
        <Button onClick={() => {}} className="cta-1">
          Rules
        </Button>
      </div>
    </div>
  );
}

export default App;
