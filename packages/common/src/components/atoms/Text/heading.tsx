import React, { ReactElement, FC } from "react";
import { Text } from "@happy/common/src/components/atoms/Text/text";
import {
  fontFamily,
  fontWeight,
  font,
  textColor,
} from "@happy/common/src/styles/interfaces";

interface IHeadingProps {
  fontFamily: fontFamily;
  fontWeight: fontWeight;
  font: font;
  textColor: textColor;
}

export const Heading: FC<IHeadingProps> = (porps): ReactElement => {
  const { children, fontFamily, fontWeight, textColor } = porps;

  return (
    <Text
      fontFamily={fontFamily}
      font={"subHeadingFont"}
      fontWeight={fontWeight}
      textColor={textColor}
    >
      {children}
    </Text>
  );
};
