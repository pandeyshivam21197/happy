import React, {FC, useState} from 'react';
import {
  FlatList,
  SectionList,
  SectionListData,
  SectionListRenderItem,
  StyleSheet,
  View,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {
  Button,
  Heading,
  Icon,
  icons,
  Paragraph,
  SubHeading,
  Title,
} from '@happy/common/src/components';
import {IUserTabProps, userInterests} from './constants';
import {NamespacesKeys} from '@happy/common/src/services/locale/constants';
import theme from '@happy/common/src/styles/theme';
import {IUserInterestData, IUserIntrestSection} from './interfaces';
import {DimensionUtils} from '@happy/common/src/utils/DimensionUtils';

interface ISection {}

const UserInterestTab: FC<IUserTabProps> = props => {
  const {onNext} = props;

  const {t} = useTranslation(NamespacesKeys.userInfoWalkthroughScreen);

  const showNextButton = false;

  const styles = getStyles(showNextButton);

  const renderItem = ({item}: {item: IUserInterestData}) => {
    const {icon, interest} = item;
    return (
      <View style={styles.interestContainer}>
        <SubHeading>{interest}</SubHeading>
      </View>
    );
  };

  const renderSectionHeader = (title: string): React.ReactElement => {
    return (
      <Heading style={styles.sectionListHeader} fontWeight="bold">
        {title}
      </Heading>
    );
  };

  const renderListItem = ({item}: {item: IUserIntrestSection}) => {
    const {title, data} = item;

    return (
      <>
        {renderSectionHeader(title)}
        <FlatList
          data={data}
          keyExtractor={(item, index) => `${item.interest} + ${index}`}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          numColumns={3}
        />
      </>
    );
  };

  return (
    <View style={styles.content}>
      <View>
        <Title customFont={{fontSize: 32, lineHeight: 36}} fontWeight="bold">
          {t('yourInterest')}
        </Title>
        <Paragraph>{t('pick5ThingsYouLove')}</Paragraph>
      </View>
      <View style={styles.sectionList}>
        <FlatList
          data={userInterests}
          keyExtractor={(item, index) => `${item.title} + ${index}`}
          renderItem={renderListItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
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
    sectionList: {
      marginTop: 16,
      marginBottom: 24,
      height: DimensionUtils.height / 1.7,
    },
    interestContainer: {
      padding: 8,
      backgroundColor: theme.palette.neutral.white,
      // flex: 1,
    },
    sectionListHeader: {
      marginVertical: 8,
    },
  });

export default UserInterestTab;
