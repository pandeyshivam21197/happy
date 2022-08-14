import React, {FC, useState} from 'react';
import {ScreenContainer, Carousel} from '@happy/common/src/components';
import {useTranslation} from 'react-i18next';
import {NavigationScreenProps} from '@happy/mobile/src//navigation/interfaces';
import {AuthNavigatorParamList} from '../../../navigation/guestNavigator/AuthStackNavigator';
import {NavigationKeys} from '../../../navigation/constants';
import {NamespacesKeys} from '@happy/common/src/services/locale/constants';
import {CarouselRenderItemInfo} from 'react-native-reanimated-carousel/lib/typescript/types';
import {IUserTabInfo, userInfoTabOrder} from './constants';
import {ICarouselInstance} from 'react-native-reanimated-carousel';

type Props = NavigationScreenProps<
  AuthNavigatorParamList,
  NavigationKeys.userInfoWalkthroughScreen
>;

const UserInfoWalkthroughScreen: FC<Props> = ({navigation}) => {
  const {t} = useTranslation(NamespacesKeys.privacyPolicyScreen);

  const [userInfoData, setUserInfoData] = useState({});
  const [carouselIndex, setCarouselIndex] = useState(0);

  let carouselRef = React.createRef<ICarouselInstance>();

  const renderUserInfoTab = (info: CarouselRenderItemInfo<IUserTabInfo>) => {
    const {
      item: {tabName, tab: Tab},
    } = info;

    const snapToNextTab = (tabData: any) => {
      setUserInfoData(prevState => ({
        ...prevState,
        ...tabData,
      }));

      if (carouselRef) {
        carouselRef?.current?.next();
      }
    };

    return <Tab onNext={snapToNextTab} />;
  };

  const onGoBack = () => {
    if (carouselIndex > 0) {
      if (carouselRef) {
        carouselRef?.current?.prev();
      }
    } else {
      navigation.goBack();
    }
  };

  console.log(userInfoData, 'userInfoData$$$');

  return (
    <ScreenContainer showHeader={true} goBack={onGoBack}>
      <Carousel
        data={userInfoTabOrder}
        renderItem={renderUserInfoTab}
        enableSnap={false}
        ref={carouselRef}
        animationType="timing"
        onSnapToItem={index => {
          setCarouselIndex(index);
        }}
      />
    </ScreenContainer>
  );
};

export default React.memo(UserInfoWalkthroughScreen);
