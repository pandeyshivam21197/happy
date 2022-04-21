import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const {height} = Dimensions.get('window');

export const ResponsiveSize = (size: number) => {
  return RFValue(size, height);
};
