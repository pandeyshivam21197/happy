import React, { useState, FC } from "react";
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import {
  ButtonTypes,
  FontWeightType,
} from "@happy/common/src/styles/interfaces";
import theme from "@happy/common/src/styles/theme";
import { Heading } from "@happy/common/src/components/atoms/Text/heading";
import { Paragraph } from "@happy/common/src/components/atoms/Text/paragraph";
import { Label } from "@happy/common/src/components/atoms/Text/label";
import { Title } from "@happy/common/src/components/atoms/Text/title";
import { SubHeading } from "@happy/common/src/components/atoms/Text/subHeading";

type ButtonTextTypes =
  | "paragraph"
  | "label"
  | "title"
  | "heading"
  | "subHeading";

interface IButtonProps {
  buttonText?: string;
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
    children,
  } = props;
  const [loading, setLoading] = useState(false);

  const { text, background } = theme.button[buttonType];

  const isLinearGradient = typeof background === "string" ? false : true;

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
      <View
        style={children ? style : [styles.container, style]}
        {...containerProps}
      >
        {loading ? (
          <ActivityIndicator color={theme.palette.neutral.white} />
        ) : (
          children || (
            <TextContainer fontWeight={fontWeight} textColor={text}>
              {buttonText}
            </TextContainer>
          )
        )}
      </View>
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
