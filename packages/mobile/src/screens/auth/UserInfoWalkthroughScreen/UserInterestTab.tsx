import React, {FC, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
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
import {useNavigation} from '@react-navigation/native';
import {NavigationKeys} from '@happy/mobile/src/navigation/constants';
import {NavigationService} from '@happy/mobile/src/services/navigationService';

const UserInterestTab: FC<IUserTabProps> = props => {
  const {onNext} = props;

  const {t} = useTranslation(NamespacesKeys.userInfoWalkthroughScreen);

  const [userSelectedInterests, setUserSelectedInterests] = useState<any>({});
  const [selectedInterestCount, setSelectedInterestCount] = useState(0);

  const showNextButton = selectedInterestCount === 5;

  const styles = getStyles(showNextButton);

  const setUserInterests = (parentId: number, childId: number) => {
    if (
      !showNextButton &&
      (!userSelectedInterests[parentId] ||
        userSelectedInterests[parentId]?.length === 0)
    ) {
      setSelectedInterestCount(prev => prev + 1);

      setUserSelectedInterests({
        ...userSelectedInterests,
        [parentId]: [childId],
      });

      return;
    }

    const selectedElements = [
      ...new Set(userSelectedInterests[parentId]),
    ] as Array<number>;

    const foundIndex = selectedElements.findIndex((e: number) => e === childId);

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
        [parentId]: [...selectedElements, childId],
      });
    }
  };

  const renderItem = (
    prop: {item: IUserInterestData; index: number},
    parentId: number,
  ) => {
    const {item} = prop;
    const {icon, interest, id} = item;

    const isSelected =
      userSelectedInterests[parentId]?.findIndex((e: number) => e === id) >= 0;

    return (
      <Button
        key={item.id}
        style={[
          styles.interestContainer,
          isSelected ? styles.selectedIcon : {},
        ]}
        onPress={() => setUserInterests(parentId, id)}
        buttonType="transparent">
        <View style={styles.interestButton}>
          <Icon name={icon} size={20} style={styles.interestIcon} />
          <SubHeading>{interest}</SubHeading>
        </View>
      </Button>
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
    const {title, data, id} = item;

    return (
      <>
        {renderSectionHeader(title)}
        <View style={styles.interestList} key={id}>
          {data.map((userInterest, index) => {
            return renderItem({item: userInterest, index}, id);
          })}
        </View>
      </>
    );
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
        <FlatList
          data={userInterests}
          keyExtractor={(item, index) => `${item.title} + ${index}`}
          renderItem={renderListItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.userInterests}
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
    interestContainer: {
      padding: 8,
      backgroundColor: theme.palette.neutral.white,
      borderRadius: 8,
      marginLeft: 8,
      marginTop: 8,
    },
    sectionListHeader: {
      marginVertical: 16,
    },
    separator: {
      height: 12,
    },
    interestRowContainer: {
      justifyContent: 'flex-start',
    },
    userInterests: {
      paddingBottom: 16,
    },
    interestButton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    interestIcon: {
      marginRight: 8,
    },
    interestList: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    selectedIcon: {
      backgroundColor: theme.palette.neutral.gossip,
    },
    pick5Things: {
      marginTop: 12,
      marginBottom: 4,
    },
  });

export default UserInterestTab;
