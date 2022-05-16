import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, ColorPropType } from 'react-native';
import DatePicker from 'react-native-date-picker';

interface IProps {}

const Alarm = ({}: IProps) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <>
      <View>
        <Button title="Open picker" onPress={() => setOpen(true)} />
        <DatePicker
          date={date}
          open={open}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => setOpen(false)}
          androidVariant="iosClone"
          mode="time"
          modal={true}
        />
      </View>

      <View>
        <DatePicker date={date} onDateChange={setDate} />
      </View>

      <Text>getHours: {date.getHours()}시</Text>
      <Text>getMinutes: {date.getMinutes()}분</Text>
      <Text>getDate: {date.getDate()}일</Text>
      <Text>getMonth: {date.getMonth() + 1}월</Text>
    </>
  );
};

export default Alarm;

const styles = StyleSheet.create({
  container: {},
});
