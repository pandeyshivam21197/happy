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
import {DateTimePicker} from '@happy/mobile/src/components';
import moment from 'moment';
import theme from '@happy/common/src/styles/theme';

const UserAgeTab: FC<IUserTabProps> = props => {
  const {onNext} = props;

  const {t} = useTranslation(NamespacesKeys.userInfoWalkthroughScreen);

  const [userDOB, setUserDOB] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const showNextButton = !!userDOB;

  const styles = getStyles(showNextButton);

  return (
    <View style={styles.content}>
      <View>
        <Title customFont={{fontSize: 32, lineHeight: 36}} fontWeight="bold">
          {t('whensYourBirthday')}
        </Title>
        <Button
          style={styles.dobInput}
          buttonText={
            userDOB ? moment(userDOB).format('DD/MM/YYYY') : t('dd/mm/yyyy')
          }
          buttonType="primary"
          textType="subHeading"
          onPress={() => setShowDatePicker(true)}
        />
      </View>
      <View style={[styles.shownContainer]}>
        <View style={[styles.shownContainer, styles.flex]}>
          <Icon style={styles.eyeIcon} name={icons.eye} size={20} />
          <Paragraph style={styles.flex}>
            {t('showAgeToPotentialMatches')}
          </Paragraph>
        </View>
        <Icon
          {...(showNextButton
            ? {onPress: () => onNext({userAge: userDOB.getTime()})}
            : {})}
          style={styles.nextIcon}
          name={icons.rightArrow}
          color={theme.palette.neutral.black}
          size={40}
        />
      </View>
      <DateTimePicker
        value={userDOB}
        visible={showDatePicker}
        onChange={DOB => {
          setUserDOB(DOB);
          setShowDatePicker(false);
        }}
        onClose={() => setShowDatePicker(false)}
        maximumDate={new Date()}
        mode="date"
      />
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
      justifyContent: 'space-between',
    },
    flex: {
      flex: 1,
    },
    dobInput: {
      borderRadius: 4,
      marginVertical: 32,
    },
  });

export default UserAgeTab;
