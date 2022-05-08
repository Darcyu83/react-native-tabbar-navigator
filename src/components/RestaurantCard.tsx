import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

interface IProps {
  name: string;
  onPress: (name: string) => void;
}

const RestaurantCard: React.FC<IProps> = ({ name, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(name)}>
      <View style={styles.container}>
        <Text>Name : {name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  container: {},
});
