import theme from '@happy/common/src/styles/theme';
import React, {FC} from 'react';
import {View, Modal as RNModal, StyleSheet, ViewProps} from 'react-native';

interface IProps {
  visible: boolean;
  onClose: () => void;
}

const Modal: FC<IProps> = props => {
  const {visible, onClose, children} = props;

  return (
    <RNModal
      transparent
      animationType={'slide'}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.content}>{children}</View>
      </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: theme.palette.neutral.white,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
});

export default React.memo(Modal);
