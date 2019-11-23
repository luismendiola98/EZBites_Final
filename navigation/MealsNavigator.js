import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons'
// import { createMaterialBottomTab}

import { createAppContainer } from "react-navigation";

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTintColor:
    Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

const MealsNavigator = createStackNavigator(
  {
    Categories: {screen: CategoriesScreen},
    CategoryMeals: {screen: CategoryMealsScreen},
    MealDetail: {screen: MealDetailScreen}
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>;
        }
      }
    },
    Favorites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Ionicons name='ios-heart' size={25} color={tabInfo.tintColor}/>;
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor
    }
  }

);

export default createAppContainer(MealsFavTabNavigator);