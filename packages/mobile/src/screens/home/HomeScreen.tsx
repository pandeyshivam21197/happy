import React, {FC} from 'react';
import {ScreenContainer, Card} from '@happy/common/src/components';
import {SwipeComponent} from '@happy/common/src/components/molecules/SwipeComponent';
import lang from '@happy/common/src/assets/languages';

const HomeScreen: FC<any> = (props): React.ReactElement => {
  return (
    <ScreenContainer title={lang.common.happy}>
      <SwipeComponent
        data={[1, 2, 3]}
        renderItem={(item, i) => <Card itemId={item} index={item} />}
      />
    </ScreenContainer>
  );
};

export default HomeScreen;
