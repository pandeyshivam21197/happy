import React, {FC} from 'react';
import {ScreenContainer, Card} from '@happy/common/src/components';
import {SwipeCard} from '@happy/common/src/components/molecules/SwipeCard';
import lang from '@happy/common/src/assets/languages';

const HomeScreen: FC<any> = (props): React.ReactElement => {
  return (
    <ScreenContainer title={lang.common.happy}>
      <SwipeCard
        data={[1, 2, 3]}
        renderItem={(item, i) => <Card itemId={item} index={item} />}
      />
    </ScreenContainer>
  );
};

export default HomeScreen;
