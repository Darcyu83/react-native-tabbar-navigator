import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { RootStackParamList } from '../../AppTabNavigator';

const ButtonTocuchableWrap = styled.TouchableOpacity``;
const Button = styled.Text`
  color: dodgerblue;
`;
interface IProps {}

const Menu = ({}: IProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text>Navigator</Text>
      <ButtonTocuchableWrap
        onPress={() => {
          navigation.navigate('ExploreStack');
        }}
      >
        <Button>Explore</Button>
      </ButtonTocuchableWrap>
      <ButtonTocuchableWrap
        onPress={() => {
          navigation.navigate('RestaurantsStack', { screen: 'Restaurants' });
        }}
      >
        <Button>Restaurants</Button>
      </ButtonTocuchableWrap>
      <ButtonTocuchableWrap
        onPress={() => {
          navigation.navigate('Profile');
        }}
      >
        <Button>Profile</Button>
      </ButtonTocuchableWrap>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {},
});
