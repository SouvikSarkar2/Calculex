import { create } from "zustand";
import { calculate } from "./utils/data";

type Store = {
  expression: string;
  answer: string;
  calculateAns: () => void;
  addExpression: (newExpression: String) => void;
  sliceExpression: () => void;
  calculateExpression: () => void;
  resetExpression: () => void;
};

export const useStore = create<Store>((set) => ({
  expression: "",
  answer: "0",
  calculateAns: () => {
    set((state) => ({ answer: String(calculate(state.expression)) }));
  },
  addExpression: (newExpression) => {
    set((state) => ({ expression: state.expression + newExpression }));
  },
  sliceExpression: () => {
    set((state) => ({ expression: state.expression.slice(0, -1) }));
  },
  calculateExpression: () => {
    set((state) => ({ expression: String(calculate(state.expression)) }));
  },
  resetExpression: () => {
    set(() => ({ expression: "" }));
  },
}));
