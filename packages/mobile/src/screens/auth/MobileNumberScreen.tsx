import React, {FC, ReactElement} from 'react';
import {ScreenContainer, Title} from '@happy/common/src/components';
import {withTranslation} from 'react-i18next';
import lang from '@happy/common/src/assets/languages';
import {NavigationScreenProps} from '@happy/mobile/src//navigation/interfaces';
import {AuthNavigatorParamList} from '../../navigation/guestNavigator/AuthStackNavigator';
import {NavigationKeys} from '../../navigation/constants';

type Props = NavigationScreenProps<
  AuthNavigatorParamList,
  NavigationKeys.mobileNumberScreen
>;

const SignUpScreen: FC<Props> = ({navigation, route}) => {
  return (
    <ScreenContainer
      showHeader={false}
      goBack={navigation.goBack}></ScreenContainer>
  );
};

export default withTranslation()(SignUpScreen);
