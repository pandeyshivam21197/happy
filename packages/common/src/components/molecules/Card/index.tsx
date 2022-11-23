import * as React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Image, View } from "@happy/common/src/components/index";
import { DimensionUtils } from "@happy/common/src/utils/DimensionUtils";

import fruit_0 from "./fruit-0.png";
import fruit_1 from "./fruit-1.png";
import fruit_2 from "./fruit-2.png";

const fruits = [fruit_0, fruit_2, fruit_1];

interface IProps {
  index: number;
  itemId: number;
}

const Card: React.FC<IProps> = ({ index, itemId }) => {
  const styles = getStyles(index);

  return (
    <View style={styles.container}>
      <Image
        source={fruits[itemId - 1]}
        style={[
          {
            width: "100%",
            borderRadius: 16,
            height: 400,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
        resizeMode={"contain"}
      />
      {[1, 2].map((item) => (
        <Image
          key={item}
          source={fruits[itemId - 1]}
          style={[
            {
              width: "100%",
              borderRadius: 16,
              height: 400,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "red",
            },
          ]}
          resizeMode={"contain"}
        />
      ))}
    </View>
  );
};

const getStyles = (index: number) =>
  StyleSheet.create({
    container: {
      width: DimensionUtils.width,
      height: "100%",
      // shadowColor: "#000",
      // shadowOffset: {
      //   width: 0,
      //   height: 8,
      // },
      // shadowOpacity: 0.44,
      // shadowRadius: 10.32,
      elevation: 16,
      padding: 16,
    },
  });

const card = React.memo(Card);

export { card as Card };
