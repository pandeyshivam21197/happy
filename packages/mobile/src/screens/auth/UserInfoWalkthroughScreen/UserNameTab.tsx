import React, {FC, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {
  Icon,
  icons,
  Paragraph,
  SubHeading,
  Title,
} from '@happy/common/src/components';
import {IUserTabProps} from './constants';
import {NamespacesKeys} from '@happy/common/src/services/locale/constants';
import {TextInput} from '@happy/common/src/components/index';
import theme from '@happy/common/src/styles/theme';

const UserNameTab: FC<IUserTabProps> = props => {
  const {onNext} = props;

  const {t} = useTranslation(NamespacesKeys.userInfoWalkthroughScreen);

  const [userName, setUserName] = useState('');

  const showNextButton = userName.length > 0;

  const styles = getStyles(showNextButton);

  return (
    <View style={styles.content}>
      <View>
        <Title customFont={{fontSize: 32, lineHeight: 36}} fontWeight="bold">
          {t('whatsFirstName')}
        </Title>
        <SubHeading style={styles.wontChangeLater} fontWeight="semiBold">
          {t('wontAbleToChangeLater')}
        </SubHeading>
        <TextInput
          onChangeText={name => setUserName(name)}
          value={userName}
          style={styles.nameInput}
          paddingHorizontal={10}
          paddingVertical={10}
          font="subHeadingFont"
          fontWeight="semiBold"
          placeholder={t('addFirstName')}
        />
      </View>
      <View style={[styles.shownContainer]}>
        <View style={styles.shownContainer}>
          <Icon style={styles.eyeIcon} name={icons.eye} size={20} />
          <Paragraph>{t('shownOnProfile')}</Paragraph>
        </View>
        <Icon
          {...(showNextButton ? {onPress: () => onNext({userName})} : {})}
          style={styles.nextIcon}
          name={icons.rightArrow}
          color={theme.palette.neutral.black}
          size={40}
        />
      </View>
    </View>
  );
};

const getStyles = (showNextButton: boolean) =>
  StyleSheet.create({
    nameInput: {
      borderRadius: 4,
      marginVertical: 24,
    },
    shownContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    eyeIcon: {
      marginRight: 8,
    },
    nextIcon: {
      opacity: showNextButton ? 1 : 0.5,
    },
    content: {
      flex: 1,
      padding: 24,
    },
    wontChangeLater: {
      marginTop: 12,
    },
  });

export default UserNameTab;
