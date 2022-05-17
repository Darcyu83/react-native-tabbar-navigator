import React from 'react';
import { NativeModules, Button } from 'react-native';

const NewModuleButton = () => {
  const { CalendarModule } = NativeModules;

  const onSubmit = async () => {
    try {
      //   const;
    } catch (error) {}
  };
  const onPress = () => {
    CalendarModule.createCalendarEvent(
      'testName',
      'testLocation',
      (eventId: string) => {
        console.log('event Id from Native Module ', eventId);
      },
    );
  };

  return (
    <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}
    />
  );
};

export default NewModuleButton;
