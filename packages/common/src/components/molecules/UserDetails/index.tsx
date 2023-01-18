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

const renderUserImages = (item: IImage) => {
  return (
    <Image
      key={item.sourceURL}
      source={{ uri: item.sourceURL }}
      style={styles.otherImage}
      resizeMode="cover"
    />
  );
};

const UserDetails = (props: IProps) => {
  const { userDetails } = props;

  const { profileImage, otherImages, basicDetails } =
    getUserDetailsSection(userDetails);

  return (
    <View>
      {profileImage && (
        <Image
          source={{ uri: profileImage.sourceURL }}
          style={styles.profileImage}
          resizeMode="cover"
        />
      )}
      {otherImages.map((image) => renderUserImages(image))}
    </View>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    width: DimensionUtils.width,
    height: DimensionUtils.height * 0.7,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  otherImage: {
    marginTop: 2,
    width: DimensionUtils.width,
    height: DimensionUtils.height * 0.3,
  },
});

const userDetails = React.memo(UserDetails);
export { userDetails as UserDetails };