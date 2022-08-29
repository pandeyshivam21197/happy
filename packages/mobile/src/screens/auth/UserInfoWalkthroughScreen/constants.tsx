import {icons} from '@happy/common/src/components';
import {IUserIntrestSection} from './interfaces';
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

export const userInterests: IUserIntrestSection[] = [
  {
    id: 1,
    title: 'creativity',
    data: [
      {interest: 'art', icon: icons.paletteSolid, id: 1},
      {interest: 'design', icon: icons.compassSolid, id: 2},
      {interest: 'make-up', icon: icons.paintbrushSolid, id: 3},
      {interest: 'photography', icon: icons.camera, id: 4},
      {interest: 'writing', icon: icons.penSolid, id: 5},
      {interest: 'singing', icon: icons.microphoneSolid, id: 6},
      {interest: 'dancing', icon: icons.dancingSolid, id: 7},
      {interest: 'crafts', icon: icons.rulerSolid, id: 8},
      {interest: 'making videos', icon: icons.videoPlayer, id: 9},
    ],
  },
  {
    id: 2,
    title: 'sports',
    data: [
      {interest: 'yoga', icon: icons.yoga, id: 1},
      {interest: 'running', icon: icons.running, id: 2},
      {interest: 'gym', icon: icons.gym, id: 3},
      {interest: 'football', icon: icons.football, id: 4},
      {interest: 'cricket', icon: icons.cricket, id: 5},
      {interest: 'tennis', icon: icons.tennis, id: 6},
      {interest: 'badminton', icon: icons.shuttle, id: 7},
      {interest: 'basketball', icon: icons.basketball, id: 8},
      {interest: 'making videos', icon: icons.clapperBoard, id: 9},
    ],
  },
  {
    id: 3,
    title: 'going out',
    data: [
      {interest: 'stand up', icon: icons.compassSolid, id: 1},
      {interest: 'festivals', icon: icons.paintbrushSolid, id: 2},
      {interest: 'museums & gallery', icon: icons.camera, id: 3},
      {interest: 'theatre', icon: icons.penSolid, id: 4},
      {interest: 'nightclubs', icon: icons.microphoneSolid, id: 5},
      {interest: 'bars', icon: icons.dancingSolid, id: 6},
      {interest: 'karaoke', icon: icons.rulerSolid, id: 7},
      {interest: 'cafe-hoping', icon: icons.videoPlayer, id: 8},
    ],
  },
  // {
  //   title: 'staying in',
  //   data: [
  //     {interest: 'video games', icon: icons.paletteSolid},
  //     {interest: 'board games', icon: icons.compassSolid},
  //     {interest: 'gardening', icon: icons.paintbrushSolid},
  //     {interest: 'cooking', icon: icons.camera},
  //     {interest: 'baking', icon: icons.penSolid},
  //     {interest: 'takeout', icon: icons.microphoneSolid},
  //   ],
  // },
  // {
  //   title: 'film & tv',
  //   data: [
  //     {interest: 'romance', icon: icons.paletteSolid},
  //     {interest: 'comedy', icon: icons.compassSolid},
  //     {interest: 'drama', icon: icons.paintbrushSolid},
  //     {interest: 'horror', icon: icons.camera},
  //     {interest: 'thriller', icon: icons.penSolid},
  //     {interest: 'fantasy', icon: icons.microphoneSolid},
  //     {interest: 'sci-fi', icon: icons.microphoneSolid},
  //     {interest: 'anime', icon: icons.microphoneSolid},
  //   ],
  // },
  // {
  //   title: 'reading',
  //   data: [
  //     {interest: 'romance', icon: icons.paletteSolid},
  //     {interest: 'comedy', icon: icons.compassSolid},
  //     {interest: 'horror', icon: icons.camera},
  //     {interest: 'thriller', icon: icons.penSolid},
  //     {interest: 'fantasy', icon: icons.microphoneSolid},
  //     {interest: 'sci-fi', icon: icons.microphoneSolid},
  //     {interest: 'manga', icon: icons.microphoneSolid},
  //     {interest: 'mystery', icon: icons.microphoneSolid},
  //   ],
  // },
  // {
  //   title: 'music',
  //   data: [
  //     {interest: 'hip hop', icon: icons.paletteSolid},
  //     {interest: 'rock', icon: icons.compassSolid},
  //     {interest: 'electronic', icon: icons.camera},
  //     {interest: 'R&B', icon: icons.penSolid},
  //     {interest: 'classical', icon: icons.microphoneSolid},
  //     {interest: 'country', icon: icons.microphoneSolid},
  //     {interest: 'desi', icon: icons.microphoneSolid},
  //     {interest: 'jazz', icon: icons.microphoneSolid},
  //   ],
  // },
  // {
  //   title: 'food & drink',
  //   data: [
  //     {interest: 'wine', icon: icons.paletteSolid},
  //     {interest: 'beer', icon: icons.compassSolid},
  //     {interest: 'coffee', icon: icons.camera},
  //     {interest: 'cocktails', icon: icons.penSolid},
  //     {interest: 'wiskey', icon: icons.microphoneSolid},
  //     {interest: 'vegan', icon: icons.microphoneSolid},
  //     {interest: 'pizza', icon: icons.microphoneSolid},
  //     {interest: 'vegetarian', icon: icons.microphoneSolid},
  //   ],
  // },
  // {
  //   title: 'travelling',
  //   data: [
  //     {interest: 'beaches', icon: icons.paletteSolid},
  //     {interest: 'spa weekends', icon: icons.compassSolid},
  //     {interest: 'winter sports', icon: icons.camera},
  //     {interest: 'camping', icon: icons.penSolid},
  //     {interest: 'city breaks', icon: icons.microphoneSolid},
  //     {interest: 'country escapes', icon: icons.microphoneSolid},
  //     {interest: 'backpacking', icon: icons.microphoneSolid},
  //     {interest: 'hiking trips', icon: icons.microphoneSolid},
  //     {interest: 'road trips', icon: icons.microphoneSolid},
  //     {interest: 'fishing trips', icon: icons.microphoneSolid},
  //   ],
  // },
  // {
  //   title: 'pets',
  //   data: [
  //     {interest: 'dogs', icon: icons.paletteSolid},
  //     {interest: 'cats', icon: icons.compassSolid},
  //     {interest: 'birds', icon: icons.camera},
  //     {interest: 'fish', icon: icons.penSolid},
  //     {interest: 'turtles', icon: icons.microphoneSolid},
  //   ],
  // },
];
