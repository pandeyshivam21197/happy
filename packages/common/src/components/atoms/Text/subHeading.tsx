import React, { ReactElement, FC } from "react";
import { Text } from "@happy/common/src/components/atoms/Text/text";
import {
  fontFamily,
  fontWeight,
  font,
  textColor,
} from "@happy/common/src/styles/interfaces";

interface ISubHeadingProps {
  fontFamily: fontFamily;
  fontWeight: fontWeight;
  font: font;
  textColor: textColor;
}

export const SubHeading: FC<ISubHeadingProps> = (porps): ReactElement => {
  const { children, fontFamily, fontWeight, textColor } = porps;

  return (
    <Text
      fontFamily={fontFamily}
      font={"primaryFont"}
      fontWeight={fontWeight}
      textColor={textColor}
    >
      {children}
    </Text>
  );
};
