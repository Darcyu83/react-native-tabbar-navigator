import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

interface IProps {}

const TopBackNavigation = ({}: IProps) => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      underlayColor={'#f0ddcc'}
      onPress={() => navigation.goBack()}
    >
      <Text>{'<<<<뒤로'}</Text>
    </TouchableHighlight>
  );
};

export default TopBackNavigation;

const styles = StyleSheet.create({
  container: {},
});
