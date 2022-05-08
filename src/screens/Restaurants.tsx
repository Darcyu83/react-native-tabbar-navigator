import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import {
  RestaurantsStackParams,
  RootStackParamList,
} from '../../AppTabNavigator';
import Menu from '../components/Menu';
import RestaurantCard from '../components/RestaurantCard';

interface IProps {}

type Props = NativeStackScreenProps<RootStackParamList, 'RestaurantsStack'>;
// type Props = CompositeScreenProps<
//   BottomTabScreenProps<RootStackParamList>,
//   NativeStackScreenProps<RestaurantsStackParams>
// >;

const SafeArea = styled.SafeAreaView`
  flex: 1;
  height: 100%;
  background-color: dodgerblue;
`;
const Restaurants = ({ navigation }: Props) => {
  return (
    <SafeArea>
      <Text>Restaurants</Text>

      <ScrollView>
        <RestaurantCard
          name="Sushi man"
          onPress={name => {
            navigation.navigate('Restaurant', { name });
          }}
        />
        <RestaurantCard
          name="Bugger dude"
          onPress={name => {
            navigation.navigate('Restaurant', { name });
          }}
        />
        <RestaurantCard
          name="Fine Dinning"
          onPress={name => {
            navigation.navigate('Restaurant', { name });
          }}
        />
        <RestaurantCard
          name="Korean Food"
          onPress={name => {
            navigation.navigate('Restaurant', { name });
          }}
        />
        <RestaurantCard
          name="Italian Food"
          onPress={name => {
            navigation.navigate('Restaurant', { name });
          }}
        />
        <RestaurantCard
          name="Thailand Food"
          onPress={name => {
            navigation.navigate('Restaurant', { name });
          }}
        />
      </ScrollView>
      <Menu />
    </SafeArea>
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  container: {},
});
