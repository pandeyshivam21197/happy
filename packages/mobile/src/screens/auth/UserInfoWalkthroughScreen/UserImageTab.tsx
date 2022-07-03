import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScreenContainer} from '@happy/common/src/components';
import {IUserTabProps} from './constants';

const UserImageTab: FC<IUserTabProps> = props => {
  return (
    <ScreenContainer
      enableBack={false}
      showHeader={false}
      style={styles.screen}>
      <View style={styles.container}></View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-between', alignItems: 'center'},
  screen: {
    paddingVertical: 100,
    paddingHorizontal: 16,
  },
});

export default UserImageTab;
