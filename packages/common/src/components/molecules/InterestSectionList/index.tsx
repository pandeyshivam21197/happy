import React, { FC } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import {
  IUserInterestData,
  IUserIntrestSection,
} from "@happy/common/src/components/molecules/InterestSectionList/inteface";
import {
  Heading,
  Button,
  Icon,
  SubHeading,
} from "@happy/common/src/components";
import theme from "@happy/common/src/styles/theme";

interface ISelectedInterests {
  [parentId: number]: IUserInterestData[];
}

interface ISectionList {
  sectionData: IUserIntrestSection[];
  userSelectedInterests: ISelectedInterests;
  setUserInterests: (
    parentId: number,
    userIntereset: IUserInterestData
  ) => void;
}

const InterestSectionList: FC<ISectionList> = ({
  sectionData,
  userSelectedInterests,
  setUserInterests,
}) => {
  const renderItem = (
    prop: { item: IUserInterestData; index: number },
    parentId: number
  ) => {
    const { item } = prop;
    const { icon, interest, id } = item;

    const isSelected =
      userSelectedInterests[parentId]?.findIndex(
        (userSelectedInterest: IUserInterestData) =>
          userSelectedInterest.id === id
      ) >= 0;

    return (
      <Button
        key={item.id}
        style={[
          styles.interestContainer,
          isSelected ? styles.selectedIcon : {},
        ]}
        onPress={() => setUserInterests(parentId, item)}
        buttonType="transparent"
      >
        <View style={styles.interestButton}>
          <Icon name={icon} size={20} style={styles.interestIcon} />
          <SubHeading>{interest}</SubHeading>
        </View>
      </Button>
    );
  };

  const renderSectionHeader = (title: string): React.ReactElement => {
    return (
      <Heading style={styles.sectionListHeader} fontWeight="bold">
        {title}
      </Heading>
    );
  };

  const renderListItem = ({ item }: { item: IUserIntrestSection }) => {
    const { title, data, id } = item;

    return (
      <>
        {renderSectionHeader(title)}
        <View style={styles.interestList} key={id}>
          {data.map((userInterest, index) => {
            return renderItem({ item: userInterest, index }, id);
          })}
        </View>
      </>
    );
  };

  return (
    <FlatList
      data={sectionData}
      keyExtractor={(item, index) => `${item.title} + ${index}`}
      renderItem={renderListItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.userInterests}
    />
  );
};

const styles = StyleSheet.create({
  userInterests: {
    paddingBottom: 16,
  },
  interestList: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  sectionListHeader: {
    marginVertical: 16,
  },
  interestIcon: {
    marginRight: 8,
  },
  interestButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedIcon: {
    backgroundColor: theme.palette.neutral.gossip,
  },
  interestContainer: {
    padding: 8,
    backgroundColor: theme.palette.neutral.white,
    borderRadius: 8,
    marginLeft: 8,
    marginTop: 8,
  },
});

const interestSectionList = React.memo(InterestSectionList);
export { interestSectionList as InterestSectionList };
