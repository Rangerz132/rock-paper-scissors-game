import { ChoiceData } from "./types";
import RockIcon from "./assets/images/icon-rock.svg";
import ScissorsIcon from "./assets/images/icon-scissors.svg";
import PaperIcon from "./assets/images/icon-paper.svg";

export const RockChoiceData: ChoiceData = {
  choice: "Rock",
  icon: {
    url: RockIcon,
    alt: "Rock icon",
  },
  gradient: {
    from: "bg-primary-rock-from",
    to: "bg-primary-rock-to",
  },
};

export const ScissorsChoiceData: ChoiceData = {
  choice: "Scissors",
  icon: {
    url: ScissorsIcon,
    alt: "Scissors icon",
  },
  gradient: {
    from: "bg-primary-scissors-from",
    to: "bg-primary-scissors-to",
  },
};

export const PaperChoiceData: ChoiceData = {
  choice: "Paper",
  icon: {
    url: PaperIcon,
    alt: "Paper icon",
  },
  gradient: {
    from: "bg-primary-paper-from",
    to: "bg-primary-paper-to",
  },
};

export const ChoiceDataList: ChoiceData[] = [
  RockChoiceData,
  ScissorsChoiceData,
  PaperChoiceData,
];
