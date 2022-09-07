import { atom } from "recoil";

export const LanguageState = atom({
  key: "LanguageState",
  default: "Nederlands",
});

export const ShowState = atom({
  key: "ShowState",
  default: "Real Estate",
});

export const HomepageCardsState = atom({
  key: "HomepageCardsState",
  default: "All",
});
export const DarkModeState = atom({
  key: "DarkModeState",
  default: "light",
});
