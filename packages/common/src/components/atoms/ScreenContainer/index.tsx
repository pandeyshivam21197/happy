import theme from "@happy/common/src/styles/theme";
import React, { FC } from "react";
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

interface IProps {
  scrollable?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const ScreenContainer: FC<IProps> = (props) => {
  const { scrollable, children, style = {} } = props;

  const Container = scrollable ? ScrollView : View;
  return <Container style={[styles.container, style]}>{children}</Container>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.palette.pageBackground,
  },
});
