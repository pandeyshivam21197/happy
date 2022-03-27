import React, { FC } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

interface ITabConfig {
  title: string;
  key: string;
  tabToRender: () => React.ReactElement;
}

interface ITabScene {
  key: string;
  tabToRender: () => React.ReactElement;
}

interface ITabRoute {
  key: string;
  title: string;
}

interface ITabProps {
  tabConfig: [ITabConfig];
}

const getRoutesAndScenes = (tabConfig: [ITabConfig]) => {
  let scenes: ITabScene | {} = {};
  const routes: ITabRoute[] = [];

  tabConfig.forEach((tabData) => {
    const { title, key, tabToRender } = tabData;

    scenes = { ...scenes, [key]: tabToRender };
    routes.push({ key: key, title });
  });

  return { scenes, tabRoutes: routes };
};

export const Tab: FC<ITabProps> = (props) => {
  const { tabConfig } = props;

  const layout = useWindowDimensions();

  const { scenes, tabRoutes } = getRoutesAndScenes(tabConfig);

  const renderScene = SceneMap(scenes);

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState(tabRoutes);

  if (tabConfig.length <= 0) {
    return null;
  }

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};
