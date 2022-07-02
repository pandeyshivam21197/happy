import React, { useState, FC } from "react";
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {
  ButtonTypes,
  FontWeightType,
} from "@happy/common/src/styles/interfaces";
import theme from "@happy/common/src/styles/theme";
import {
  Paragraph,
  Label,
  Title,
  Heading,
  SubHeading,
} from "@happy/common/src/components";

type ButtonTextTypes =
  | "paragraph"
  | "label"
  | "title"
  | "heading"
  | "subHeading";

interface IButtonProps {
  buttonText: string;
  buttonType: ButtonTypes;
  onPress: () => void;
  fontWeight?: FontWeightType;
  textType?: ButtonTextTypes;
  style?: StyleProp<ViewStyle>;
}

const buttonTypeText = {
  paragraph: Paragraph,
  label: Label,
  title: Title,
  heading: Heading,
  subHeading: SubHeading,
};

export const Button: FC<IButtonProps> = (props) => {
  const {
    buttonText,
    buttonType,
    onPress,
    fontWeight = "medium",
    textType = "paragraph",
    style = {},
  } = props;
  const [loading, setLoading] = useState(false);

  const { text, background } = theme.button[buttonType];

  const isLinearGradient = typeof background === "string" ? false : true;

  const Container = isLinearGradient ? LinearGradient : View;
  const containerProps = isLinearGradient
    ? { colors: background as string[], useAngle: true }
    : {};

  const styles = getStyles(isLinearGradient, buttonType);

  const onButtonPress = () => {
    setLoading(true);
    onPress();
    setLoading(false);
  };

  const TextContainer = buttonTypeText[textType];

  return (
    <TouchableOpacity onPress={onButtonPress} disabled={loading}>
      <Container style={[styles.container, style]} {...containerProps}>
        {loading ? (
          <ActivityIndicator color={theme.palette.neutral.white} />
        ) : (
          <TextContainer fontWeight={fontWeight} textColor={text}>
            {buttonText}
          </TextContainer>
        )}
      </Container>
    </TouchableOpacity>
  );
};

const getStyles = (isLinearGradient: boolean, buttonType: ButtonTypes) =>
  StyleSheet.create({
    container: {
      ...(isLinearGradient
        ? {}
        : { backgroundColor: theme.button[buttonType].background as string }),
      paddingVertical: 16,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 24,
    },
  });
