import React, {FC} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {ResponsiveSize} from '@happy/mobile/src/utils/responsiveUtils';
import {toTitleCase} from '@happy/common/src/utils/stringUtils';
import {Icon, icons, SubHeading} from '@happy/common/src/components';
import theme from '@happy/common/src/styles/theme';

interface IProps {
  onBackPress?: () => void;
  enableBack?: boolean;
  title?: string;
  rightText?: string;
  style?: StyleProp<ViewStyle>;
  backText?: string;
  showBackIcon?: boolean;
  onRightTextPress?: () => void;
}

export const Header: FC<IProps> = ({
  onBackPress = () => {},
  enableBack = true,
  title = '',
  rightText,
  style = {},
  backText,
  showBackIcon = true,
  onRightTextPress = () => {},
}) => {
  return (
    <View style={[styles.container, style]}>
      {enableBack && (showBackIcon || !!backText) ? (
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={onBackPress}>
          {showBackIcon && <Icon name={icons.back} size={20} />}
          {!!backText && (
            <SubHeading
              numberOfLines={1}
              textColor={theme.palette.neutral.black}
              style={styles.backText}>
              {toTitleCase(backText)}
            </SubHeading>
          )}
        </TouchableOpacity>
      ) : (
        <View style={styles.emptyContainer} />
      )}
      <View style={styles.titleContainer}>
        <SubHeading numberOfLines={1} fontWeight="semiBold">
          {title}
        </SubHeading>
      </View>
      {rightText ? (
        <TouchableOpacity
          style={styles.rightContainer}
          onPress={onRightTextPress}>
          <SubHeading
            numberOfLines={1}
            fontWeight="bold"
            style={styles.rightText}
            textColor={theme.palette.neutral.black}>
            {rightText}
          </SubHeading>
        </TouchableOpacity>
      ) : (
        <View style={styles.emptyContainer} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: ResponsiveSize(12),
    paddingHorizontal: ResponsiveSize(9),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.statusBar,
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1.5,
  },
  backText: {
    marginLeft: ResponsiveSize(10),
  },
  rightText: {
    marginRight: ResponsiveSize(10),
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1.5,
  },
  emptyContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1.5,
  },
  titleContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
