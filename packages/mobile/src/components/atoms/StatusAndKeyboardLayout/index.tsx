import {StyleSheet, SafeAreaView} from 'react-native';
import React, {FC} from 'react';
import theme from '@happy/common/src/styles/theme';

interface IProps {
  backgroundColor?: string;
  children: any;
}

const StatusAndKeyBoardLayout = ({
  children,
  backgroundColor,
}: IProps): JSX.Element => {
  const styles = getStyles(backgroundColor);

  return (
    <>
      <SafeAreaView style={styles.headContainer} />
      <SafeAreaView style={styles.mainContainer}>{children}</SafeAreaView>
    </>
  );
};

const getStyles = (bgColor?: string) =>
  StyleSheet.create({
    headContainer: {
      flex: 0,
      backgroundColor: bgColor || theme.palette.statusBar,
    },
    mainContainer: {
      flex: 1,
      backgroundColor: bgColor || theme.palette.statusBar,
    },
  });

const statusAndKeyBoardLayout = React.memo(StatusAndKeyBoardLayout);
export {statusAndKeyBoardLayout as StatusAndKeyBoardLayout};
