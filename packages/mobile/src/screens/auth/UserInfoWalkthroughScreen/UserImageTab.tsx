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
import {
  IImage,
  ImageSelector,
} from '@happy/mobile/src/components/molecules/ImageSelector';

const UserImageTab: FC<IUserTabProps> = props => {
  const {onNext} = props;

  const {t} = useTranslation(NamespacesKeys.userInfoWalkthroughScreen);

  const [userImages, setUserImages] = useState<IImage[]>([]);

  const totalSelectedImages = userImages.reduce(
    (prev: number, next: IImage) => {
      if (next.image) {
        return (prev as number) + 1;
      }

      return prev;
    },
    0,
  );

  const showNextButton = totalSelectedImages > 2;

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
      <ImageSelector
        onImageSelected={(images: IImage[]) => setUserImages(images)}
      />
      <View style={[styles.shownContainer]}>
        <View style={styles.shownContainer}>
          <Icon style={styles.eyeIcon} name={icons.eye} size={20} />
          <Paragraph>{t('shownOnProfile')}</Paragraph>
        </View>
        <Icon
          {...(showNextButton
            ? {
                onPress: () =>
                  onNext({
                    userImages: userImages
                      .map(userImage => userImage.image)
                      .filter(image => !!image),
                  }),
              }
            : {})}
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
      padding: 16,
      justifyContent: 'space-between',
    },
    wontChangeLater: {
      marginTop: 12,
    },
  });

export default UserImageTab;
