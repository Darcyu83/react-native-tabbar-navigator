import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import { Alert, Text, View } from 'react-native';
import styled from 'styled-components/native';
import Explore from './src/screens/Explore';
import Profile from './src/screens/Profile';
import Restaurants from './src/screens/Restaurants';
import Restaurant from './src/screens/Restaurant';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  ExploreStack: undefined;
  RestaurantsStack: NavigatorScreenParams<RestaurantsStackParams>;
  Profile: { userId: string } | undefined;
  Restaurant: { name: string };
};
// export type ScreenProps = NativeStackScreenProps<RootStackParamList>;

// navigation  & router props 가져오기
// NativeStackScreenProps for @react-navigation/native-stack

// navigation props 가져오기
// NativeStackNavigationProp from @react-navigation/native-stack
// StackNavigationProp from @react-navigation/stack
// DrawerNavigationProp from @react-navigation/drawer
// BottomTabNavigationProp from @react-navigation/bottom-tabs

// route props 가져오기
// RouteProp from @react-navigation/native

//1. stack navigator
// const RootStack = createNativeStackNavigator<RootStackParamList>();

//2. bottom tabs navigator

const RootStack = createBottomTabNavigator<RootStackParamList>();

//2-1.

export type RestaurantsStackParams = {
  Restaurants: undefined;
  Restaurant: { name: string };
};
const RestaurantsStack = createNativeStackNavigator<RestaurantsStackParams>();

const RestaurantScreenStack = () => {
  return (
    <RestaurantsStack.Navigator
      initialRouteName="Restaurants"
      screenOptions={{
        headerShown: false,
      }}
    >
      <RestaurantsStack.Screen name="Restaurant" component={Restaurant} />
      <RestaurantsStack.Screen name="Restaurants" component={Restaurants} />
    </RestaurantsStack.Navigator>
  );
};

//2-2.

export type ExploreStackParams = {
  Explore: undefined;
  Restaurant: { name: string };
};

const ExploreStack = createNativeStackNavigator<ExploreStackParams>();

const ExploreScreenStack = () => {
  return (
    <ExploreStack.Navigator
      initialRouteName="Explore"
      screenOptions={{
        headerShown: false,
      }}
    >
      <ExploreStack.Screen name="Explore" component={Explore} />
      <ExploreStack.Screen name="Restaurant" component={Restaurant} />
    </ExploreStack.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="ExploreStack"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#e67a15',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <RootStack.Screen
          name="ExploreStack"
          component={ExploreScreenStack}
          options={{
            tabBarLabel: 'Explore',
            tabBarIcon: () => {
              return (
                <View>
                  <Text>Icon1</Text>
                </View>
              );
            },
          }}
        />
        <RootStack.Screen
          name="RestaurantsStack"
          component={RestaurantScreenStack}
          options={{
            tabBarLabel: 'Restaurant',
            tabBarIcon: () => {
              return (
                <View>
                  <Text>Icon2</Text>
                </View>
              );
            },
          }}
        />
        {/* <RootStack.Screen name="Restaurant" component={Restaurant} /> */}
        <RootStack.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: () => {
              return (
                <View>
                  <Text>Icon3</Text>
                </View>
              );
            },
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
