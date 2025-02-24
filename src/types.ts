export type ChoiceType = "Rock" | "Scissors" | "Paper";

export type ChoiceData = {
  choice: ChoiceType;
  icon: {
    url: string;
    alt: string;
  };
  gradient: {
    from: string;
    to: string;
  };
  win: ChoiceType;
  lose: ChoiceType;
};
