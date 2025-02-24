import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RulesContextProvider } from "./contexts/RulesContext.tsx";
import { GameContextProvider } from "./contexts/GameContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GameContextProvider>
      <RulesContextProvider>
        <App />
      </RulesContextProvider>
    </GameContextProvider>
  </StrictMode>
);
