import { Order } from "../exercise-3/code";
import { ReceiptProps } from "../exercise-4/code";

export function orderToReceipt(order: Order, tip: number): ReceiptProps {
  return null as any;
}

type Tea = {
  style: "green" | "black" | "herbal";
  name: string;
  brew: () => void;
};
type Coffee = {
  roast: "dark" | "medium" | "light";
  name: string;
  brew: () => void;
};

type HotDrink = Tea | Coffee;

let rachaelsDrink: HotDrink = {
  style: "herbal",
  name: "Chamomile Tea",
  brew: () => { console.log("Brewing relaxing chamomile tea...") },
}

let drewsDrink: HotDrink = {
  roast: "light",
  name: "Heartbeater Blend Coffee",
  brew: () => { console.log("Brewing energizing coffee!!!") },
}
