import React, {FC, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {
  Icon,
  icons,
  InterestSectionList,
  Paragraph,
  Title,
} from '@happy/common/src/components';
import {IUserTabProps, userInterests} from './constants';
import {NamespacesKeys} from '@happy/common/src/services/locale/constants';
import theme from '@happy/common/src/styles/theme';
import {DimensionUtils} from '@happy/common/src/utils/DimensionUtils';
import {IUserInterestData} from '@happy/common/src/components/molecules/InterestSectionList/inteface';

const UserInterestTab: FC<IUserTabProps> = props => {
  const {onNext} = props;

  const {t} = useTranslation(NamespacesKeys.userInfoWalkthroughScreen);

  const [userSelectedInterests, setUserSelectedInterests] = useState<any>({});
  const [selectedInterestCount, setSelectedInterestCount] = useState(0);

  const showNextButton = selectedInterestCount === 5;

  const styles = getStyles(showNextButton);

  const setUserInterests = (
    parentId: number,
    selectedInterest: IUserInterestData,
  ) => {
    if (
      !showNextButton &&
      (!userSelectedInterests[parentId] ||
        userSelectedInterests[parentId]?.length === 0)
    ) {
      setSelectedInterestCount(prev => prev + 1);

      setUserSelectedInterests({
        ...userSelectedInterests,
        [parentId]: [selectedInterest],
      });

      return;
    }

    const selectedElements = [
      ...new Set(userSelectedInterests[parentId]),
    ] as Array<IUserInterestData>;

    const foundIndex = selectedElements.findIndex(
      (selectedInterest: IUserInterestData) =>
        selectedInterest.id === selectedInterest.id,
    );

    const wasSelected = foundIndex >= 0;

    if (wasSelected) {
      selectedElements.splice(foundIndex, 1);

      setSelectedInterestCount(prev => (prev ? prev - 1 : prev));
      setUserSelectedInterests({
        ...userSelectedInterests,
        [parentId]: selectedElements,
      });
    } else if (!showNextButton) {
      setSelectedInterestCount(prev => prev + 1);
      setUserSelectedInterests({
        ...userSelectedInterests,
        [parentId]: [...selectedElements, selectedInterest],
      });
    }
  };

  return (
    <View style={styles.content}>
      <View>
        <Title customFont={{fontSize: 32, lineHeight: 36}} fontWeight="bold">
          {t('yourInterest')}
        </Title>
        <Paragraph style={styles.pick5Things}>
          {t('pick5ThingsYouLove')}
        </Paragraph>
      </View>
      <View style={styles.sectionList}>
        <InterestSectionList
          sectionData={userInterests}
          userSelectedInterests={userSelectedInterests}
          setUserInterests={setUserInterests}
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
          {...(showNextButton
            ? {
                onPress: () => {
                  onNext({userSelectedInterests});
                },
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
    content: {
      flex: 1,
      padding: 24,
      justifyContent: 'space-between',
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
      height: DimensionUtils.height / 1.7,
      marginBottom: 16,
    },
    separator: {
      height: 12,
    },
    interestRowContainer: {
      justifyContent: 'flex-start',
    },
    pick5Things: {
      marginTop: 12,
      marginBottom: 4,
    },
  });

export default UserInterestTab;
