import { horizontalStackLayout, verticalStackLayout } from "./stack";

export type TMode = "horizontal-stack" | "vertical-stack";

export const Layouts = {
  horizontalStack: horizontalStackLayout,
  verticalStack: verticalStackLayout,
};
