import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import {TodoScreen, PostScreen, MapScreen} from '../../containers/pages'


const Tab = createBottomTabNavigator(
    {
      Todo: TodoScreen,
      Post: PostScreen,
      Map: MapScreen
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Todo') {
            iconName = `md-checkmark-circle${focused ? '' : '-outline'}`;
          } else if (routeName === 'Post') {
            iconName = `md-add-circle${focused ? '' : '-outline'}`;
          } else if (routeName === 'Map') {
            iconName = `md-map`;
          }
  
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
);

export default createAppContainer(Tab);