import React from "react";
import { View, Image } from "@happy/common/src/components";
import { ImageSourcePropType, StyleSheet } from "react-native";

interface IUserDetails {
  images: ImageSourcePropType[];
  userDetails: any;
}

const UserDetails = (props: IUserDetails) => {
  return (
    <View>
      <Image source={{}} style={{}} />
    </View>
  );
};

const styles = StyleSheet.create({});

const userDetails = React.memo(UserDetails);
export { userDetails as UserDetails };
