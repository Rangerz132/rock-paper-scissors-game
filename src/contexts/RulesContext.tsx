import { createContext, useContext, useState } from "react";

export type RulesContext = {
  rules: boolean;
  setRules: React.Dispatch<React.SetStateAction<boolean>>;
};

export const RulesContext = createContext<RulesContext | null>(null);

export function RulesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [rules, setRules] = useState(false);

  return (
    <RulesContext.Provider value={{ rules, setRules }}>
      {children}
    </RulesContext.Provider>
  );
}

export function useRulesContext(
  rulesContext: React.Context<RulesContext | null>
) {
  const context = useContext(rulesContext);
  if (!context) {
    throw new Error("useRulesContext has to be within RulesContextProvider...");
  } else {
    return context;
  }
}
