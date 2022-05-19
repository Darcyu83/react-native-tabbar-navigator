import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NativeStackNavigatorProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  AppState,
} from 'react-native';
import styled from 'styled-components/native';
import { ExploreStackParams, RootStackParamList } from '../../AppTabNavigator';
import Menu from '../components/Menu';
import RestaurantCard from '../components/RestaurantCard';
import AppStateComp from './AppStateComp';

interface IProps {}

const SafeArea = styled.SafeAreaView`
  flex: 1;
  height: 100%;
  /* background-color: red; */
`;

const Container = styled.View`
  flex: 1;
  background-color: teal;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  color: black;
  font-size: 18px;
`;

type Props = NativeStackScreenProps<RootStackParamList, 'ExploreStack'>;

const Explore = ({ navigation }: Props) => {
  console.log('AppState.currentState=====', AppState.currentState);
  return (
    <SafeArea style={styles.container}>
      <Button
        title="Alarm"
        onPress={() => navigation.navigate('ExploreStack', { screen: 'Alarm' })}
      />

      <ScrollView>
        <RestaurantCard
          name="Sushi man"
          onPress={name => {
            navigation.navigate('RestaurantsStack', {
              screen: 'Restaurant',
              params: { name },
            });
          }}
        />
        <RestaurantCard
          name="Bugger dude"
          onPress={name => {
            navigation.navigate('RestaurantsStack', {
              screen: 'Restaurant',
              params: { name },
            });
          }}
        />
        <RestaurantCard
          name="Fine Dinning"
          onPress={name => {
            navigation.navigate('RestaurantsStack', {
              screen: 'Restaurant',
              params: { name },
            });
          }}
        />
        <RestaurantCard
          name="Korean Food"
          onPress={name => {
            navigation.navigate('RestaurantsStack', {
              screen: 'Restaurant',
              params: { name },
            });
          }}
        />
        <RestaurantCard
          name="Italian Food"
          onPress={name => {
            navigation.navigate('RestaurantsStack', {
              screen: 'Restaurant',
              params: { name },
            });
          }}
        />
        <RestaurantCard
          name="Thailand Food"
          onPress={name => {
            navigation.navigate('RestaurantsStack', {
              screen: 'Restaurant',
              params: { name },
            });
          }}
        />
        <AppStateComp />
      </ScrollView>

      <Menu />
    </SafeArea>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {},
});
