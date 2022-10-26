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
  selected: boolean;
}

const genders: IGenderItem[] = [
  {gender: 'Man', selected: false},
  {gender: 'Women', selected: false},
  {gender: 'NonBinary', selected: false},
];

const UserOppositeGenderTab: FC<IUserTabProps> = props => {
  const {onNext} = props;

  const {t} = useTranslation(NamespacesKeys.userInfoWalkthroughScreen);
  const [oppositeGender, setOppositeGender] = useState([...genders]);

  const selectedOppositeGender = oppositeGender.filter(
    gender => gender.selected,
  );
  const showNextButton = selectedOppositeGender.length > 0;

  const styles = getStyles(showNextButton);

  const renderOppositeGender = (item: IGenderItem) => {
    const {selected} = item;

    return (
      <Button
        key={item.gender}
        style={styles.dobInput}
        onPress={() => {
          item.selected = !item.selected;
          setOppositeGender([...oppositeGender]);
        }}
        buttonType="primary">
        <SubHeading>{item.gender}</SubHeading>
        {selected ? (
          <Icon
            name={icons.squareTickFilled}
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
        {t('whoWouldYouLikeToDate')}
      </Title>
      <Paragraph>{t('chooseMoreThanOneAnswer')}</Paragraph>
      {oppositeGender.map(gender => {
        return renderOppositeGender(gender);
      })}
      <View style={[styles.shownContainer]}>
        <View style={[styles.shownContainer, styles.flex]}>
          <Icon style={styles.eyeIcon} name={icons.eye} size={20} />
          <Paragraph style={styles.flex}>{t('updateThisLater')}</Paragraph>
        </View>
        <Icon
          {...(showNextButton
            ? {onPress: () => onNext({oppositeGender: selectedOppositeGender})}
            : {})}
          style={styles.nextIcon}
          color={theme.palette.neutral.black}
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
      marginVertical: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: theme.palette.neutral.white,
      padding: 16,
    },
    unselectedGender: {
      width: 24,
      height: 24,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: theme.palette.neutral.black,
    },
  });

export default UserOppositeGenderTab;
