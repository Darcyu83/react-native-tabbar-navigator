import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { ExploreStackParams, RootStackParamList } from '../../AppTabNavigator';
import Menu from '../components/Menu';
import RestaurantCard from '../components/RestaurantCard';

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
  return (
    <SafeArea style={styles.container}>
      <Text>Explore</Text>
      <ScrollView>
        <Text style={{ fontSize: 26, fontFamily: 'Apple SD Gothic Neo' }}>
          Apple SD Gothic Neo{' '}
        </Text>
        <Text style={{ fontSize: 26, fontFamily: 'AppleSDGothicNeo-Bold' }}>
          AppleSDGothicNeo-Bold{' '}
        </Text>
        <Text style={{ fontSize: 26, fontFamily: 'AppleSDGothicNeo-Light' }}>
          AppleSDGothicNeo-Light{' '}
        </Text>
        <Text style={{ fontSize: 26, fontFamily: 'AppleSDGothicNeo-Medium' }}>
          AppleSDGothicNeo-Medium{' '}
        </Text>
        <Text style={{ fontSize: 26, fontFamily: 'AppleSDGothicNeo-Regular' }}>
          AppleSDGothicNeo-Regular{' '}
        </Text>
        <Text style={{ fontSize: 26, fontFamily: 'AppleSDGothicNeo-SemiBold' }}>
          AppleSDGothicNeo-SemiBold{' '}
        </Text>
        <Text style={{ fontSize: 26, fontFamily: 'AppleSDGothicNeo-Thin' }}>
          AppleSDGothicNeo-Thin{' '}
        </Text>
        <Text
          style={{ fontSize: 26, fontFamily: 'AppleSDGothicNeo-UltraLight' }}
        >
          AppleSDGothicNeo-UltraLight{' '}
        </Text>
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
      </ScrollView>
      <Menu />
    </SafeArea>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {},
});
