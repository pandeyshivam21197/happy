import { createIconSetFromIcoMoon } from "react-native-vector-icons";
import icoMoonConfig from "@happy/common/src/assets/selection.json";

export const icons = {
  chat: "chat",
  lightning: "lightning",
  heart: "heart",
};

export const Icon = createIconSetFromIcoMoon(icoMoonConfig);
