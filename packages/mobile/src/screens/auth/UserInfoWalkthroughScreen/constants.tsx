import UserAgeTab from './UserAgeTab';
import UserGenderTab from './UserGenderTab';
import UserImageTab from './UserImageTab';
import UserInterestTab from './UserInterestTab';
import UserLookingForTab from './UserLookingForTab';
import UserNameTab from './UserNameTab';
import UserOppositeGenderTab from './UserOppositeGenderTab';

export enum UserInfoTabs {
  userNameTab = 'userNameTab',
  userImagesTab = 'userImagesTab',
  userAgeTab = 'userAgeTab',
  userGenderTab = 'userGenderTab',
  userOppositGenderTab = 'userOppositGenderTab',
  userLookingForTab = 'userLookingForTab',
  userInteresetTab = 'userInteresetTab',
}

export interface IUserTabProps {
  onNext: (tabData: any) => void;
}

export interface IUserTabInfo {
  tabName: string;
  tab: React.FC<IUserTabProps>;
}

export const userInfoTabOrder: IUserTabInfo[] = [
  {tabName: UserInfoTabs.userNameTab, tab: UserNameTab},
  {tabName: UserInfoTabs.userImagesTab, tab: UserImageTab},
  {tabName: UserInfoTabs.userAgeTab, tab: UserAgeTab},
  {tabName: UserInfoTabs.userGenderTab, tab: UserGenderTab},
  {tabName: UserInfoTabs.userOppositGenderTab, tab: UserOppositeGenderTab},
  {tabName: UserInfoTabs.userLookingForTab, tab: UserLookingForTab},
  {tabName: UserInfoTabs.userInteresetTab, tab: UserInterestTab},
];
