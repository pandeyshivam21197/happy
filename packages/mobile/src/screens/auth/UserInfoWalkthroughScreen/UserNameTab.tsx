import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {ScreenContainer, SubHeading, Title} from '@happy/common/src/components';
import {IUserTabProps} from './constants';
import {NamespacesKeys} from '@happy/common/src/services/locale/constants';
import {TextInput} from '@happy/common/src/components/index';

const UserNameTab: FC<IUserTabProps> = props => {
  const {onNext} = props;

  const {t} = useTranslation(NamespacesKeys.userInfoWalkthroughScreen);

  const [userName, setUserName] = useState('');

  return (
    <ScreenContainer
      enableBack={false}
      showHeader={false}
      style={styles.screen}>
      <View style={styles.container}>
        <Title fontWeight="bold">{t('whatsFirstName')}</Title>
        <SubHeading fontWeight="semiBold">
          {t('wontAbleToChangeLater')}
        </SubHeading>
        <TextInput
          onChangeText={name => setUserName(name)}
          value={userName}
          keyboardType="number-pad"
          style={styles.numberInput}
          paddingHorizontal={10}
          paddingVertical={10}
          font="subHeadingFont"
          fontWeight="semiBold"
          placeholder={t('addFirstName')}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  screen: {
    paddingVertical: 100,
    paddingHorizontal: 16,
  },
  numberInput: {
    flex: 1,
    borderRadius: 4,
  },
});

export default UserNameTab;
