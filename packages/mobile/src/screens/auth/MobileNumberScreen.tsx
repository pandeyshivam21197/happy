import React, {FC, ReactElement, useState} from 'react';
import {
  ScreenContainer,
  SubHeading,
  Title,
  TextInput,
  Paragraph,
  Icon,
  icons,
} from '@happy/common/src/components';
import CountryPicker, {
  CountryCode,
  Country,
} from 'react-native-country-picker-modal';
import {withTranslation} from 'react-i18next';
import {useTranslation} from 'react-i18next';
import {NavigationScreenProps} from '@happy/mobile/src//navigation/interfaces';
import {AuthNavigatorParamList} from '../../navigation/guestNavigator/AuthStackNavigator';
import {NavigationKeys} from '../../navigation/constants';
import {NamespacesKeys} from '@happy/common/src/services/locale/constants';
import {StyleSheet, View} from 'react-native';
import theme from '@happy/common/src/styles/theme';

type Props = NavigationScreenProps<
  AuthNavigatorParamList,
  NavigationKeys.mobileNumberScreen
>;

const SignUpScreen: FC<Props> = ({navigation, route}) => {
  const {t} = useTranslation(NamespacesKeys.mobileNumberScreen);

  const [mobileNumber, setMobileNumber] = useState('');
  const [countryCode, setCountryCode] = useState<CountryCode>('IN');
  const [country, setCountry] = useState<Country>();

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };

  const onMobileSubmit = () => {
    navigation.navigate(NavigationKeys.otpScreen);
  };

  return (
    <ScreenContainer showHeader={true} goBack={navigation.goBack}>
      <View style={styles.screen}>
        <View>
          <Title fontWeight="bold">{t('whatsYourNumber')}</Title>
          <SubHeading style={styles.protectCommunity} fontWeight="semiBold">
            {t('protectCommunity')}
          </SubHeading>
          <View style={styles.pickerContainer}>
            <CountryPicker
              countryCode={countryCode}
              withFilter={true}
              withFlag={true}
              withAlphaFilter={true}
              withCallingCode={true}
              withEmoji={true}
              onSelect={onSelect}
              withFlagButton={false}
              withCallingCodeButton={true}
              containerButtonStyle={styles.coutaryPicker}
            />
            <TextInput
              onChangeText={number => setMobileNumber(number)}
              value={mobileNumber}
              keyboardType="number-pad"
              style={styles.numberInput}
              paddingHorizontal={10}
              paddingVertical={10}
              font="subHeadingFont"
              fontWeight="semiBold"
              placeholder={t('phoneNumber')}
            />
          </View>
        </View>
        <View style={styles.shareWithContainer}>
          <Paragraph style={styles.shareWithText} fontWeight="semiBold">
            {t('weNeverShareWithAnyone')}
          </Paragraph>
          <Icon onPress={onMobileSubmit} name={icons.rightArrow} size={40} />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  protectCommunity: {
    marginTop: 12,
  },
  screen: {
    padding: 16,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  numberInput: {
    flex: 1,
    borderRadius: 4,
  },
  pickerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 36,
    marginHorizontal: 20,
  },
  coutaryPicker: {
    backgroundColor: theme.palette.neutral.white,
    padding: 10,
    borderRadius: 4,
    marginRight: 8,
  },
  shareWithContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shareWithText: {
    flex: 1,
  },
});

export default React.memo(SignUpScreen);
