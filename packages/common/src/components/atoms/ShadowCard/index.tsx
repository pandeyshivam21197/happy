import React, { FC } from "react";
import { StyleSheet, ViewProps } from "react-native";
import theme from "@happy/common/src/styles/theme";
import { isAndroid } from "@happy/common/src/utils/PlatformUtils";
import { View } from "@happy/common/src/components";

export const ShadowCard: FC<any> = ({ children, style }) => {
  return <View style={[styles.shadow, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: "red",
    shadowColor: theme.palette.neutral.black,
    shadowOffset: {
      width: 1.5,
      height: 1.5,
    },
    shadowOpacity: 0.05,
    shadowRadius: 1.0,
    elevation: 1.5,
    borderWidth: 0.5,
    ...(isAndroid() ? { marginHorizontal: 1 } : {}),
    borderColor: theme.palette.borderColors.border01,
  },
});
