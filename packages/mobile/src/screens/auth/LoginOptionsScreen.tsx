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
import {withTranslation} from 'react-i18next';
import lang from '@happy/common/src/assets/languages';
import {Text} from '@happy/common/src/components/atoms/Text/text';

const LoginScreen: FC = () => {
  return (
    <ScreenContainer
      enableBack={false}
      showHeader={false}
      style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <View style={styles.logoContainer}>
            <Icon name={icons.chat} size={30} style={styles.logo} />
            <Title fontWeight="bold">{lang.happy}</Title>
          </View>
          <Text
            style={styles.datingBecomeEasy}
            customFont={{fontSize: 30, lineHeight: 34}}
            fontWeight="bold">
            {lang.datingBecomesEasy}
          </Text>
        </View>
        <View>
          <Button
            buttonText="Use mobile number"
            buttonType="primary"
            fontWeight="bold"
            textType="subHeading"
            onPress={() => {}}
          />
          <Paragraph style={styles.termsCondition} fontWeight="semiBold">
            {lang.termsAndCondition}
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

export default withTranslation()(LoginScreen);
