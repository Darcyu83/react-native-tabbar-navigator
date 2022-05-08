import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import {
  RestaurantsStackParams,
  RootStackParamList,
} from '../../AppTabNavigator';
import RestaurantCard from '../components/RestaurantCard';
import TopBackNavigation from '../components/TopBackNavigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Restaurant'>;

const Title = styled.Text`
  color: tomato;
  font-size: 24px;
`;

const SafeArea = styled.SafeAreaView`
  flex: 1;
  height: 100%;
  background-color: dodgerblue;
`;
const Restaurant = ({ route, navigation }: Props) => {
  console.log(route.params);
  return (
    <SafeArea>
      <TopBackNavigation />
      <Text>Restaurant</Text>
      <Title>Restaurant name : {route.params.name}</Title>

      <Text>Related Restaurant</Text>
    </SafeArea>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  container: {},
});
