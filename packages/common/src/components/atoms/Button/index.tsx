import React, { useState, FC } from "react";
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { ButtonTypes } from "@happy/common/src/styles/interfaces";
import theme from "@happy/common/src/styles/theme";
import { Paragraph } from "@happy/common/src/components";

interface IButtonProps {
  buttonText: string;
  buttonType: ButtonTypes;
  onPress: () => {};
}

export const Button: FC<IButtonProps> = (props) => {
  const { buttonText, buttonType, onPress } = props;
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

  return (
    <TouchableOpacity onPress={onButtonPress} disabled={loading}>
      <Container style={styles.container} {...containerProps}>
        {loading ? (
          <ActivityIndicator color={theme.palette.neutral.white} />
        ) : (
          <Paragraph fontWeight="medium" textColor={text}>
            {buttonText}
          </Paragraph>
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
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
    },
  });
