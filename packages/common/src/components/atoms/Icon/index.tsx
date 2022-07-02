import { createIconSetFromIcoMoon } from "react-native-vector-icons";
import icoMoonConfig from "@happy/common/src/assets/selection.json";

export const icons = {
  chat: "chat",
  lightning: "lightning",
  heart: "heart",
  back: "back",
  image: "image",
  camera: "camera",
  location: "location",
  folder: "folder",
  search: "search",
  rightArrow: "right-arrow",
  lock: "lock",
  eye: "eye",
};

export const Icon = createIconSetFromIcoMoon(icoMoonConfig);
