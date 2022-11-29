import React, {FC, useState} from 'react';
import {ScreenContainer, Carousel} from '@happy/common/src/components';
import {useTranslation} from 'react-i18next';
import {NavigationScreenProps} from '@happy/mobile/src//navigation/interfaces';
import {AuthNavigatorParamList} from '../../../navigation/guestNavigator/AuthStackNavigator';
import {NavigationKeys} from '../../../navigation/constants';
import {NamespacesKeys} from '@happy/common/src/services/locale/constants';
import {CarouselRenderItemInfo} from 'react-native-reanimated-carousel/lib/typescript/types';
import {IUserTabInfo, userInfoTabOrder, UserInfoTabs} from './constants';
import {ICarouselInstance} from 'react-native-reanimated-carousel';
import {DimensionUtils} from '@happy/common/src/utils/DimensionUtils';
import {setIsLoggedIn} from '@happy/common/src/redux/reducers/appReducer';
import {useAppDispatch} from '@happy/common/src/redux/store';
import {
  IUserDetails,
  setUserDetails,
} from '@happy/common/src/redux/reducers/userReducer';

type Props = NavigationScreenProps<
  AuthNavigatorParamList,
  NavigationKeys.userInfoWalkthroughScreen
>;

const UserInfoWalkthroughScreen: FC<Props> = ({navigation}) => {
  const {t} = useTranslation(NamespacesKeys.privacyPolicyScreen);

  const [userInfoData, setUserInfoData] = useState<IUserDetails | {}>({});
  const [carouselIndex, setCarouselIndex] = useState(0);

  const dispatch = useAppDispatch();

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

      if (tabName === UserInfoTabs.userInteresetTab) {
        dispatch(setUserDetails(userInfoData as IUserDetails));
        dispatch(setIsLoggedIn(true));

        return;
      }

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

  return (
    <ScreenContainer
      enableKeyboardDismiss={false}
      showHeader={true}
      goBack={onGoBack}>
      <Carousel
        data={userInfoTabOrder}
        baseOption={{
          vertical: false,
          width: DimensionUtils.width,
          height: DimensionUtils.height - 150, // 150 height by heding on each tab
        }}
        renderItem={renderUserInfoTab}
        enableSnap={false}
        ref={carouselRef}
        animationType="timing"
        onSnapToItem={index => {
          setCarouselIndex(index);
        }}
        panGestureHandlerProps={{
          activeOffsetX: [-100, 100],
        }}
      />
    </ScreenContainer>
  );
};

export default React.memo(UserInfoWalkthroughScreen);
