import { IUserDetails } from "@happy/common/src/redux/reducers/userReducer";
import { Image } from "react-native-image-crop-picker";

interface IBasicDetailsSection {
  title: string;
  data: { key: string; value: any }[];
}

interface IUserDetailsSection {
  profileImage: Image;
  basicDetails: IBasicDetailsSection[];
  otherImages: Image[];
}

export const getUserDetailsSection = (
  userDetails: IUserDetails
): IUserDetailsSection => {
  const { gender, connection, userSelectedInterests, userImages } = userDetails;

  return {
    profileImage: userImages[0],
    basicDetails: [
      {
        title: "My Basics",
        data: [
          { key: "gender", value: gender },
          { key: "connection", value: connection },
        ],
      },
      {
        title: "My Interests",
        data: [{ key: "userSelectedInterests", value: userSelectedInterests }],
      },
    ],
    otherImages: userImages.slice(1),
  };
};
