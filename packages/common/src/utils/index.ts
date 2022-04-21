import { Alert, AlertButton } from "react-native";

export const showAlert = (
  title: string,
  message?: string,
  buttons?: AlertButton[]
) => Alert.alert(title, message, buttons);
