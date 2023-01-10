import React, {FC} from 'react';
import {ScreenContainer, Card} from '@happy/common/src/components';
import {SwipeableList} from '@happy/common/src/components/molecules/SwipeableList';
import lang from '@happy/common/src/assets/languages';
import {UserDetails} from '@happy/common/src/components/molecules/UserDetails';
import {useAppSelector} from '@happy/common/src/redux/store';

const HomeScreen: FC<any> = (props): React.ReactElement => {
  const {
    userReducer: {userDetails},
  } = useAppSelector(state => state);

  return (
    <ScreenContainer title={lang.common.happy}>
      <SwipeableList
        data={[1, 2, 3]}
        renderItem={(item, i) => <UserDetails userDetails={userDetails} />}
      />
    </ScreenContainer>
  );
};

export default HomeScreen;
