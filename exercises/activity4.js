import React from 'react';
import {Button, View, Alert} from 'react-native';

const Activity4 = () => {
  return (
    <View>
      <Button title ="Confirm"
              onPress={() => Alert.alert("Hi there!")}/>
    </View>
  );
};

export default Activity4;
