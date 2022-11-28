import React, { FC } from "react";
import { TextTypes } from "@happy/common/src/components/atoms/Text/text";
import { Heading } from "@happy/common/src/components/atoms/Text/heading";
import { Label } from "@happy/common/src/components/atoms/Text/label";
import { SubHeading } from "@happy/common/src/components/atoms/Text/subHeading";
import { Title } from "@happy/common/src/components/atoms/Text/title";
import { Paragraph } from "@happy/common/src/components/atoms/Text/paragraph";
import { View } from "@happy/common/src/components/atoms/View";
import { Icon } from "@happy/common/src/components/atoms/Icon";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { FontWeightType } from "common/src/styles/interfaces";

interface IProps {
  textType?: TextTypes;
  isAnimated?: boolean;
  fontWeight: FontWeightType;
  text: string;
  iconName: string;
  iconSize?: number;
  inverted?: boolean;
  style?: StyleProp<ViewStyle>;
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
    style = {},
  } = props;

  const TextContainer = Text[textType as TextTypes];

  const styles = getStyles(inverted);

  return (
    <View isAnimated={isAnimated} style={[styles.container, style]}>
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
