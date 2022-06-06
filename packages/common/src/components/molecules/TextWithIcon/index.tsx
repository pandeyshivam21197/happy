import React, { FC } from "react";
import { TextTypes } from "@happy/common/src/components/atoms/Text/text";
import {
  Heading,
  Label,
  SubHeading,
  Title,
  Paragraph,
  View,
  Icon,
} from "@happy/common/src/components";
import { StyleSheet } from "react-native";
import { FontWeightType } from "common/src/styles/interfaces";

interface IProps {
  textType?: TextTypes;
  isAnimated?: boolean;
  fontWeight: FontWeightType;
  text: string;
  iconName: string;
  iconSize?: number;
  inverted?: boolean;
}

const Text = {
  label: Label,
  paragraph: Paragraph,
  subHeading: SubHeading,
  heading: Heading,
  title: Title,
};

const TextWithIcon: FC<IProps> = (props) => {
  const {
    textType = "paragraph",
    fontWeight,
    text,
    iconName,
    iconSize = 20,
    isAnimated,
    inverted = false,
  } = props;

  const TextContainer = Text[textType as TextTypes];

  const styles = getStyles(inverted);

  return (
    <View isAnimated={isAnimated} style={styles.container}>
      <TextContainer fontWeight={fontWeight}>{text}</TextContainer>
      <Icon name={iconName} size={iconSize} />
    </View>
  );
};

const getStyles = (inverted: boolean) =>
  StyleSheet.create({
    container: {
      flexDirection: inverted ? "row-reverse" : "row",
    },
  });

const textWithIcon = React.memo(TextWithIcon);

export { textWithIcon as TextWithIcon };