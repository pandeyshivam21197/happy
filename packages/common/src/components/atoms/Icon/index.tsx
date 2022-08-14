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
  circleTickFilled: "circle-tick-filled",
  squareTickFilled: "square-tick-filled",
  dancingSolid: "dancing-solid",
  rulerSolid: "ruler-solid",
  microphoneSolid: "microphone-solid",
  penSolid: "pen-solid",
  paintbrushSolid: "paintbrush-solid",
  videoPlayer: "video-player",
  paletteSolid: "palette-solid",
  compassSolid: "compass-solid",
  shuttle: "shuttle",
  yoga: "yoga",
  cricket: "cricket",
  gym: "gym",
  basketball: "basketball",
  running: "running",
  football: "football",
  tennis: "tennis",
  clapperBoard: "clapper-board",
};

export const Icon = createIconSetFromIcoMoon(icoMoonConfig);
