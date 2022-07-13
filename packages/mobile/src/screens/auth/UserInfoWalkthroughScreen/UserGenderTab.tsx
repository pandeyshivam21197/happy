import React, {FC, useState} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {
  Button,
  Icon,
  icons,
  Paragraph,
  Title,
} from '@happy/common/src/components';
import {IUserTabProps} from './constants';
import {NamespacesKeys} from '@happy/common/src/services/locale/constants';

const UserGenderTab: FC<IUserTabProps> = props => {
  const {onNext} = props;

  const {t} = useTranslation(NamespacesKeys.userInfoWalkthroughScreen);

  const [gender, setGender] = useState('');

  const showNextButton = !!gender;

  const styles = getStyles(showNextButton);

  return (
    <View style={styles.content}>
      <View>
        <Title customFont={{fontSize: 32, lineHeight: 36}} fontWeight="bold">
          {t('whatsYourGender')}
        </Title>
        <Paragraph style={styles.flex}>{t('updateThisLater')}</Paragraph>
      </View>
      <Button
        style={styles.dobInput}
        buttonText={''}
        buttonType="primary"
        textType="subHeading"
        onPress={() => setGender('male')}
      />
      <View style={[styles.shownContainer]}>
        <View style={[styles.shownContainer, styles.flex]}>
          <Icon style={styles.eyeIcon} name={icons.eye} size={20} />
          <Paragraph style={styles.flex}>
            {t('showAgeToPotentialMatches')}
          </Paragraph>
        </View>
        <Icon
          {...(showNextButton ? {onPress: () => onNext({gender})} : {})}
          style={styles.nextIcon}
          name={icons.rightArrow}
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
    flex: {
      flex: 1,
    },
    dobInput: {
      borderRadius: 4,
      marginVertical: 24,
    },
  });

export default UserGenderTab;
