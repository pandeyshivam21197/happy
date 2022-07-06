import React, {FC, useState} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
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
import theme from '@happy/common/src/styles/theme';

const CODE_SiZE = 5;

type Props = NavigationScreenProps<
  AuthNavigatorParamList,
  NavigationKeys.otpScreen
>;

const OtpScreen: FC<Props> = ({navigation}) => {
  const {t} = useTranslation(NamespacesKeys.otpScreen);

  const [showNextButton, setShowNextButton] = useState(false);
  const styles = getStyles(showNextButton);

  const onNext = () => {
    navigation.navigate(NavigationKeys.privacyPolicyScreen);
  };

  return (
    <ScreenContainer showHeader={true} goBack={navigation.goBack}>
      <View style={styles.screen}>
        <View>
          <Title customFont={{fontSize: 32, lineHeight: 36}} fontWeight="bold">
            {t('verifyYourNumber')}
          </Title>
          <Heading style={styles.codeSent} fontWeight="semiBold">
            {t('enterCodeSent', {number: '7019993890'})}
          </Heading>
          <OTPInputView
            style={{width: '100%', height: 100}}
            pinCount={CODE_SiZE}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeChanged={code => {
              if (code.length === CODE_SiZE) {
                setShowNextButton(true);
              } else {
                setShowNextButton(false);
              }
            }}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
          <Button
            buttonType="transparent"
            buttonText={t('resendCode')}
            onPress={() => {}}
          />
        </View>
        <Icon
          {...(showNextButton ? {onPress: onNext} : {})}
          style={styles.arrowIcon}
          name={icons.rightArrow}
          size={45}
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
      justifyContent: 'space-between',
    },
    codeSent: {
      marginTop: 8,
    },
    underlineStyleBase: {
      width: 30,
      height: 45,
      borderWidth: 0,
      borderBottomWidth: 1,
      color: theme.palette.textColors.titleTextColor,
      borderColor: theme.palette.neutral.white,
      fontSize: 24,
      lineHeight: 28,
    },
    underlineStyleHighLighted: {
      borderColor: '#03DAC6',
    },
    arrowIcon: {
      alignSelf: 'flex-end',
      opacity: showNextButton ? 1 : 0.5,
    },
  });

export default React.memo(OtpScreen);
