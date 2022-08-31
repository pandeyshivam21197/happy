import React, {FC, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {
  Button,
  Icon,
  icons,
  Paragraph,
  SubHeading,
  Title,
} from '@happy/common/src/components';
import {IUserTabProps} from './constants';
import {NamespacesKeys} from '@happy/common/src/services/locale/constants';
import theme from '@happy/common/src/styles/theme';

interface IGenderItem {
  gender: string;
}

const genders: IGenderItem[] = [
  {gender: 'Man'},
  {gender: 'Women'},
  {gender: 'NonBinary'},
];

const UserGenderTab: FC<IUserTabProps> = props => {
  const {onNext} = props;

  const {t} = useTranslation(NamespacesKeys.userInfoWalkthroughScreen);

  const [gender, setGender] = useState<IGenderItem | null>(null);

  const showNextButton = !!gender;

  const styles = getStyles(showNextButton);

  const renderGender = (item: IGenderItem) => {
    const isSelected = gender === item;

    return (
      <Button
        key={item.gender}
        style={styles.dobInput}
        onPress={() => setGender(item)}
        buttonType="primary">
        <SubHeading>{item.gender}</SubHeading>
        {isSelected ? (
          <Icon
            name={icons.circleTickFilled}
            size={24}
            color={theme.palette.neutral.black}
          />
        ) : (
          <View style={styles.unselectedGender} />
        )}
      </Button>
    );
  };

  return (
    <View style={styles.content}>
      <Title customFont={{fontSize: 32, lineHeight: 36}} fontWeight="bold">
        {t('whatsYourGender')}
      </Title>
      <Paragraph>{t('pickWhichDescribeYou')}</Paragraph>
      {genders.map(gender => {
        return renderGender(gender);
      })}
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
    flex: {
      flex: 1,
    },
    dobInput: {
      borderRadius: 4,
      marginVertical: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: theme.palette.neutral.white,
      padding: 16,
    },
    unselectedGender: {
      width: 24,
      height: 24,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: theme.palette.neutral.black,
    },
  });

export default UserGenderTab;
