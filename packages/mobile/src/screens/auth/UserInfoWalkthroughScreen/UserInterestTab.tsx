import React, {FC, useState} from 'react';
import {SectionList, StyleSheet, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {
  Button,
  Icon,
  icons,
  Paragraph,
  SubHeading,
  Title,
} from '@happy/common/src/components';
import {IUserTabProps, userInterests} from './constants';
import {NamespacesKeys} from '@happy/common/src/services/locale/constants';
import theme from '@happy/common/src/styles/theme';

const UserInterestTab: FC<IUserTabProps> = props => {
  const {onNext} = props;

  const {t} = useTranslation(NamespacesKeys.userInfoWalkthroughScreen);

  const showNextButton = false;

  const styles = getStyles(showNextButton);

  const renderItem = ({item}) => {
    return '';
  };

  const renderSectionHeader = ({section: {title}}) => {
    return '';
  };

  return (
    <View style={styles.content}>
      <Title customFont={{fontSize: 32, lineHeight: 36}} fontWeight="bold">
        {t('yourInterest')}
      </Title>
      <Paragraph>{t('pick5ThingsYouLove')}</Paragraph>
      <SectionList
        sections={userInterests}
        keyExtractor={(item, index) => `${item.interest} + ${index}`}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
      <View style={[styles.shownContainer]}>
        <View style={[styles.shownContainer, styles.flex]}>
          <Icon style={styles.eyeIcon} name={icons.eye} size={20} />
          <Paragraph style={styles.flex}>
            {t('shownOnProfileUnlessUnsure')}
          </Paragraph>
        </View>
        <Icon
          {...(showNextButton ? {onPress: () => onNext({connection})} : {})}
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
    content: {
      flex: 1,
      padding: 24,
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
    flex: {
      flex: 1,
    },
  });

export default UserInterestTab;
