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
  {
    title: 'Indoor Hobbies',
    id: 4,
    data: [
      {interest: 'video games', icon: icons.gamepadSolid, id: 1},
      {interest: 'board games', icon: icons.diceSolid, id: 2},
      {interest: 'gardening', icon: icons.plantSolid, id: 3},
      {interest: 'cooking', icon: icons.pan, id: 4},
      {interest: 'baking', icon: icons.cookie, id: 5},
    ],
  },
  {
    title: 'film & tv',
    id: 5,
    data: [
      {interest: 'romance', icon: icons.filmSolid, id: 1},
      {interest: 'comedy', icon: icons.filmSolid, id: 2},
      {interest: 'drama', icon: icons.filmSolid, id: 3},
      {interest: 'horror', icon: icons.filmSolid, id: 4},
      {interest: 'thriller', icon: icons.filmSolid, id: 5},
      {interest: 'fantasy', icon: icons.filmSolid, id: 6},
      {interest: 'sci-fi', icon: icons.filmSolid, id: 7},
      {interest: 'anime', icon: icons.filmSolid, id: 8},
    ],
  },
  {
    title: 'reading',
    id: 6,
    data: [
      {interest: 'romance', icon: icons.bookReader, id: 1},
      {interest: 'comedy', icon: icons.bookReader, id: 2},
      {interest: 'horror', icon: icons.bookReader, id: 3},
      {interest: 'thriller', icon: icons.bookReader, id: 4},
      {interest: 'fantasy', icon: icons.bookReader, id: 5},
      {interest: 'sci-fi', icon: icons.bookReader, id: 6},
      {interest: 'manga', icon: icons.bookReader, id: 7},
      {interest: 'mystery', icon: icons.bookReader, id: 8},
    ],
  },
  {
    title: 'music',
    id: 7,
    data: [
      {interest: 'hip hop', icon: icons.musicSolid, id: 1},
      {interest: 'rock', icon: icons.musicSolid, id: 2},
      {interest: 'electronic', icon: icons.musicSolid, id: 3},
      {interest: 'R&B', icon: icons.musicSolid, id: 4},
      {interest: 'classical', icon: icons.musicSolid, id: 5},
      {interest: 'country', icon: icons.musicSolid, id: 6},
      {interest: 'desi', icon: icons.musicSolid, id: 7},
      {interest: 'jazz', icon: icons.musicSolid, id: 8},
    ],
  },
  {
    title: 'food & drink',
    id: 8,
    data: [
      {interest: 'wine', icon: icons.wineSolid, id: 1},
      {interest: 'beer', icon: icons.beerSolid, id: 2},
      {interest: 'coffee', icon: icons.mugHotSolid, id: 3},
      {interest: 'cocktails', icon: icons.martiniSolid, id: 4},
      {interest: 'wiskey', icon: icons.whiskeySolid, id: 5},
      {interest: 'vegan', icon: icons.plantSolid, id: 6},
      {interest: 'pizza', icon: icons.pizzaSliceSolid, id: 7},
      {interest: 'vegetarian', icon: icons.plantSolid, id: 8},
    ],
  },
  {
    title: 'travelling',
    id: 9,
    data: [
      {interest: 'beaches', icon: icons.beachSolid, id: 1},
      {interest: 'spa weekends', icon: icons.spaSolid, id: 2},
      {interest: 'winter sports', icon: icons.skiingSolid, id: 3},
      {interest: 'camping', icon: icons.tentSolid, id: 4},
      {interest: 'city breaks', icon: icons.citySolid, id: 5},
      {interest: 'country escapes', icon: icons.earthSolid, id: 6},
      {interest: 'backpacking', icon: icons.backpack, id: 7},
      {interest: 'hiking trips', icon: icons.mountainSolid, id: 8},
      {interest: 'road trips', icon: icons.roadSolid, id: 9},
      {interest: 'fishing trips', icon: icons.fishing, id: 10},
    ],
  },
  {
    title: 'pets',
    id: 10,
    data: [
      {interest: 'dogs', icon: icons.dogSolid, id: 1},
      {interest: 'cats', icon: icons.catSolid, id: 2},
      {interest: 'birds', icon: icons.doveSolid, id: 3},
      {interest: 'fish', icon: icons.fishSolid, id: 4},
      {interest: 'turtles', icon: icons.turtleSolid, id: 5},
    ],
  },
];
