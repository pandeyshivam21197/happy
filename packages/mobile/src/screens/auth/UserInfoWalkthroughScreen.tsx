import React, {FC, useState} from 'react';
import {
  ScreenContainer,
  Title,
  Icon,
  icons,
  Heading,
  Button,
  Tab,
} from '@happy/common/src/components';
import {useTranslation} from 'react-i18next';
import {NavigationScreenProps} from '@happy/mobile/src//navigation/interfaces';
import {AuthNavigatorParamList} from '../../navigation/guestNavigator/AuthStackNavigator';
import {NavigationKeys} from '../../navigation/constants';
import {NamespacesKeys} from '@happy/common/src/services/locale/constants';
import {StyleSheet, View} from 'react-native';
import {toTitleCase} from '@happy/common/src/utils/stringUtils';

type Props = NavigationScreenProps<
  AuthNavigatorParamList,
  NavigationKeys.userInfoWalkthroughScreen
>;

const UserInfoWalkthroughScreen: FC<Props> = ({navigation}) => {
  const {t} = useTranslation(NamespacesKeys.privacyPolicyScreen);

  const [showNextButton, setShowNextButton] = useState(false);
  const styles = getStyles(showNextButton);

  return (
    <ScreenContainer showHeader={true} goBack={navigation.goBack}>
      <View style={styles.screen}>
        <Tab
          tabConfig={[
            {
              title: '',
              key: 'dwrf',
              tabToRender: () => (
                <View>
                  <Heading>{'fhgdhth'}</Heading>
                </View>
              ),
            },
            {
              title: '',
              key: 'drf',
              tabToRender: () => (
                <View>
                  <Heading>{'fhgdhth'}</Heading>
                </View>
              ),
            },
          ]}
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
      justifyContent: 'flex-end',
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
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default React.memo(UserInfoWalkthroughScreen);
