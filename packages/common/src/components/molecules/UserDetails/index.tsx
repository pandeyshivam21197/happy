import React from "react";
import { Image as IImage } from "react-native-image-crop-picker";
import { View, Image } from "@happy/common/src/components";
import { FlatList, ImageSourcePropType, StyleSheet } from "react-native";
import { IUserDetails } from "@happy/common/src/redux/reducers/userReducer";
import { DimensionUtils } from "@happy/common/src/utils/DimensionUtils";
import { getUserDetailsSection } from "@happy/common/src/redux/selectors/userSelector";

interface IProps {
  userDetails: IUserDetails;
}

const renderUserImages = ({ item }: { item: IImage }) => {
  return (
    <Image
      source={{ uri: item.sourceURL }}
      style={{
        width: DimensionUtils.width,
        height: DimensionUtils.height * 0.3,
      }}
    />
  );
};

const UserDetails = (props: IProps) => {
  const { userDetails } = props;

  const { profileImage, otherImages, basicDetails } =
    getUserDetailsSection(userDetails);

  console.log(profileImage, "profileImage", otherImages);

  return (
    <View>
      {profileImage && (
        <Image
          source={{ uri: profileImage.sourceURL }}
          style={{
            width: DimensionUtils.width,
            height: DimensionUtils.height * 0.7,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
      )}
      <FlatList data={otherImages} renderItem={renderUserImages} />
    </View>
  );
};

const styles = StyleSheet.create({});

const userDetails = React.memo(UserDetails);
export { userDetails as UserDetails };
