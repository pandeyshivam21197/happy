import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Icon,
  icons,
  ScreenContainer,
  Title,
  Button,
  Paragraph,
} from '@happy/common/src/components';
import {useTranslation} from 'react-i18next';
import {Text} from '@happy/common/src/components/atoms/Text/text';
import {NavigationScreenProps} from '../../navigation/interfaces';
import {AuthNavigatorParamList} from '../../navigation/guestNavigator/AuthStackNavigator';
import {NavigationKeys} from '@happy/mobile/src/navigation/constants';
import {NamespacesKeys} from '@happy/common/src/services/locale/constants';

type Props = NavigationScreenProps<
  AuthNavigatorParamList,
  NavigationKeys.loginOptionsScreen
>;

const LoginOptionsScreen: FC<Props> = ({navigation, route}) => {
  const onUseMobileNumber = () => {
    navigation.navigate(NavigationKeys.mobileNumberScreen);
  };

  const {t} = useTranslation(NamespacesKeys.loginOptionScreen);

  return (
    <ScreenContainer
      enableBack={false}
      showHeader={false}
      style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <View style={styles.logoContainer}>
            <Icon name={icons.chat} size={30} style={styles.logo} />
            <Title fontWeight="bold">{t('common:happy')}</Title>
          </View>
          <Text
            style={styles.datingBecomeEasy}
            customFont={{fontSize: 30, lineHeight: 34}}
            fontWeight="bold">
            {t('datingBecomesEasy')}
          </Text>
        </View>
        <View>
          <Button
            buttonText={t('useMobileNumber')}
            buttonType="primary"
            fontWeight="bold"
            textType="subHeading"
            onPress={onUseMobileNumber}
          />
          <Paragraph style={styles.termsCondition} fontWeight="semiBold">
            {t('termsAndCondition')}
          </Paragraph>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
  },
  logo: {
    marginRight: 8,
  },
  container: {flex: 1, justifyContent: 'space-between', alignItems: 'center'},
  screen: {
    paddingVertical: 100,
    paddingHorizontal: 16,
  },
  termsCondition: {
    marginTop: 28,
    textAlign: 'center',
  },
  headingContainer: {
    alignItems: 'center',
  },
  datingBecomeEasy: {
    marginTop: 12,
  },
});

export default LoginOptionsScreen;
