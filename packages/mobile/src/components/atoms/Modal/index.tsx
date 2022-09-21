import theme from '@happy/common/src/styles/theme';
import React, {FC} from 'react';
import {
  View,
  Modal as RNModal,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TouchableOpacity,
} from 'react-native';

interface IProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  modalStyle?: StyleProp<ViewStyle>;
  translucent?: boolean;
}

const Modal: FC<IProps> = props => {
  const {
    visible,
    onClose,
    children,
    translucent = true,
    style = {},
    modalStyle = {},
  } = props;

  const styles = getStyles(translucent);

  const Content = <View style={[styles.content, style]}>{children}</View>;

  return (
    <RNModal
      transparent
      style={modalStyle}
      animationType={'slide'}
      visible={visible}
      onRequestClose={onClose}>
      <View style={[styles.container]}>{!translucent && Content}</View>
      {!!translucent && Content}
    </RNModal>
  );
};

const getStyles = (translucent: boolean) => {
  const translucentProps = {
    marginBottom: 8,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignSlef: 'center',
  };
  const containerTranslucentProps = {
    backgroundColor: '#262626',
    opacity: 0.7,
  };

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      ...(translucent ? containerTranslucentProps : {}),
    },
    content: {
      backgroundColor: theme.palette.neutral.white,
      padding: 16,
      borderRadius: 20,
      ...(translucent ? translucentProps : {}),
    },
  });
};

export default React.memo(Modal);
