import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

export function Button(props: any) {
  const { buttonText, onPressButton, id, isSelected } = props;

  return (
    <TouchableWithoutFeedback onPress={() => onPressButton(id)}>
      <View
        style={[
          styles.buttonContainer,
          isSelected ? styles.selected : styles.unselected,
        ]}
      >
        <Text>{buttonText}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    borderRadius: 10,
  },
  selected: {
    backgroundColor: "green",
  },
  unselected: {
    backgroundColor: "grey",
  },
});
