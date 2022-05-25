import React, { ReactElement, FC } from "react";
import { Text } from "@happy/common/src/components/atoms/Text/text";
import { FontWeightType } from "@happy/common/src/styles/interfaces";

interface ISubHeadingProps {
  fontWeight: FontWeightType;
  textColor?: string;
}

export const Paragraph: FC<ISubHeadingProps> = (porps): ReactElement => {
  const { children, fontWeight, textColor } = porps;

  return (
    <Text font={"primaryFont"} fontWeight={fontWeight} textColor={textColor}>
      {children}
    </Text>
  );
};
