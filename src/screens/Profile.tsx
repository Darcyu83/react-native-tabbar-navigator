import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

interface IProps {}
const SafeArea = styled.SafeAreaView`
  flex: 1;
  height: 100%;
  background-color: dodgerblue;
`;
const Profile = ({}) => {
  return (
    <SafeArea style={styles.container}>
      <Text>Profile</Text>
    </SafeArea>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {},
});
