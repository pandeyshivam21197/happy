import React, {FC, useState} from 'react';
import {
  ScreenContainer,
  Title,
  Icon,
  icons,
  Heading,
  Button,
} from '@happy/common/src/components';
import {useTranslation} from 'react-i18next';
import {NavigationScreenProps} from '@happy/mobile/src//navigation/interfaces';
import {AuthNavigatorParamList} from '../../navigation/guestNavigator/AuthStackNavigator';
import {NavigationKeys} from '../../navigation/constants';
import {NamespacesKeys} from '@happy/common/src/services/locale/constants';
import {StyleSheet, View} from 'react-native';
import {toTitleCase} from '@happy/common/src/utils/stringUtils';
import theme from '@happy/common/src/styles/theme';

type Props = NavigationScreenProps<
  AuthNavigatorParamList,
  NavigationKeys.privacyPolicyScreen
>;

const PrivacyPolicyScreen: FC<Props> = ({navigation}) => {
  const {t} = useTranslation(NamespacesKeys.privacyPolicyScreen);

  const [showNextButton, setShowNextButton] = useState(false);
  const styles = getStyles(showNextButton);

  return (
    <ScreenContainer showHeader={true} goBack={navigation.goBack}>
      <View style={styles.screen}>
        <View style={styles.lockContainer}>
          <Icon
            name={icons.lock}
            size={40}
            color={theme.palette.neutral.black}
          />
        </View>
        <Title
          style={styles.careAboutPrivacy}
          customFont={{fontSize: 32, lineHeight: 32}}
          fontWeight="bold">
          {t('careAboutPrivacy')}
        </Title>
        <Heading fontWeight="semiBold">{t('infoFromDevice')}</Heading>
        <Heading style={styles.changePrivacy} fontWeight="semiBold">
          {t('changePrivacySetting')}
        </Heading>
        <Button
          buttonText={toTitleCase(t('common:accept'))}
          buttonType="primary"
          onPress={() =>
            navigation.navigate(NavigationKeys.userInfoWalkthroughScreen)
          }
          style={styles.accept}
        />
      </View>
    </ScreenContainer>
  );
};

const getStyles = (showNextButton: boolean) =>
  StyleSheet.create({
    screen: {
      padding: 24,
      flex: 1,
      flexDirection: 'column',
    },
    careAboutPrivacy: {
      marginTop: 32,
      marginBottom: 24,
    },
    changePrivacy: {
      marginTop: 28,
    },
    accept: {
      marginVertical: 100,
    },
    lockContainer: {
      width: 80,
      height: 80,
      borderRadius: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default React.memo(PrivacyPolicyScreen);
