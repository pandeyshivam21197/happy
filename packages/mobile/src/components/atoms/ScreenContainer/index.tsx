import {
  ScrollView,
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';
import {ResponsiveSize} from '@happy/mobile/src/utils/responsiveUtils';
import {Header} from '@happy/mobile/src/components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import theme from '@happy/common/src/styles/theme';

interface IProps {
  scrollable?: boolean;
  children: React.ReactElement;
  style?: StyleProp<ViewStyle>;
  goBack?: () => void;
  title?: string;
  enableBack?: boolean;
  showHeader?: boolean;
  backText?: string;
  headerStyle?: StyleProp<ViewStyle>;
  showBackIcon?: boolean;
  headerRightText?: string;
  onHeaderRightPress?: () => void;
}

export const ScreenContainer: FC<IProps> = ({
  scrollable = false,
  children,
  style,
  goBack = () => {},
  title,
  enableBack = true,
  showHeader = true,
  backText = '',
  headerStyle = {},
  showBackIcon = true,
  headerRightText,
  onHeaderRightPress,
}) => {
  const Content = scrollable ? ScrollView : View;

  const containerProps = scrollable
    ? {
        contentContainerStyle: [styles.scrollContent, style],
        scrollable: true,
        showsVerticalScrollIndicator: false,
        style: [styles.container],
      }
    : {style: [styles.container, style]};

  const HeaderContent = (
    <Header
      onBackPress={goBack}
      enableBack={enableBack}
      title={title}
      backText={backText}
      style={headerStyle}
      showBackIcon={showBackIcon}
      rightText={headerRightText}
      onRightTextPress={onHeaderRightPress}
    />
  );

  const Container = scrollable ? (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={() => Keyboard.dismiss()}>
      <KeyboardAwareScrollView keyboardShouldPersistTaps={'handled'}>
        {showHeader && HeaderContent}
        <Content {...containerProps}>{children}</Content>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  ) : (
    <Content {...containerProps}>
      <TouchableWithoutFeedback
        style={styles.container}
        onPress={() => Keyboard.dismiss()}>
        <>
          {showHeader && HeaderContent}
          {children}
        </>
      </TouchableWithoutFeedback>
    </Content>
  );

  return Container;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.palette.screenBackground,
  },
  scrollContent: {
    paddingBottom: ResponsiveSize(24),
  },
});
