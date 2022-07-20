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

interface IConnectionItem {
  key: string;
  value: string;
}

const connections: IConnectionItem[] = [
  {key: 'relationship', value: 'A relationship'},
  {key: 'casual', value: 'Something casual'},
  {key: 'notSure', value: "I'm not sure yet"},
  {key: 'notToSay', value: 'Prefer not to say'},
];

const UserLookingForTab: FC<IUserTabProps> = props => {
  const {onNext} = props;

  const {t} = useTranslation(NamespacesKeys.userInfoWalkthroughScreen);

  const [connection, setConnection] = useState<IConnectionItem | null>(null);

  const showNextButton = !!connection;

  const styles = getStyles(showNextButton);

  const renderConnections = (item: IConnectionItem) => {
    const isSelected = connection === item;

    return (
      <Button
        style={styles.dobInput}
        onPress={() => setConnection(item)}
        buttonType="primary">
        <SubHeading>{item.value}</SubHeading>
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
        {t('hopingToFind')}
      </Title>
      <Paragraph>{t('honestyHelpsYourAndEveryone')}</Paragraph>
      {connections.map(connection => {
        return renderConnections(connection);
      })}
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

export default UserLookingForTab;
