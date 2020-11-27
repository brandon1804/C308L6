import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Activity2 = () => {
  return (
      <View>
        <Text style = {[styles.greenBox, styles.boxText, styles.title]}>Who We Are</Text>
        <Text style = {[styles.greenBox, styles.boxText]}>Our People</Text>
        <Text style = {[styles.greenBox, styles.boxText]}>Our Campus</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  greenBox:{
    width: 100,
    height: 100,
    marginTop: 30,
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'black'
  },
  boxText:{
    textAlign: 'center',
    color: 'white'
  },
  title:{
    fontWeight: 'bold'
  }
});

export default Activity2;
