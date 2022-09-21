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
import theme from '@happy/common/src/styles/theme';
import {ImageSelector} from '@happy/mobile/src/components/molecules/ImageSelector';

const UserImageTab: FC<IUserTabProps> = props => {
  const {onNext} = props;

  const {t} = useTranslation(NamespacesKeys.userInfoWalkthroughScreen);

  const [userImages, setUserImages] = useState([]);

  const showNextButton = !!userImages;

  const styles = getStyles(showNextButton);

  return (
    <View style={styles.content}>
      <View>
        <Title customFont={{fontSize: 32, lineHeight: 36}} fontWeight="bold">
          {t('addFirst2Photos')}
        </Title>
        <SubHeading style={styles.wontChangeLater} fontWeight="semiBold">
          {t('2PhotoBetterThan1')}
        </SubHeading>
      </View>
      <ImageSelector />
      <View style={[styles.shownContainer]}>
        <View style={styles.shownContainer}>
          <Icon style={styles.eyeIcon} name={icons.eye} size={20} />
          <Paragraph>{t('shownOnProfile')}</Paragraph>
        </View>
        <Icon
          {...(showNextButton ? {onPress: () => onNext({userImages})} : {})}
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

export default UserImageTab;
