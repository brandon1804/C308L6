import React from 'react';
import {View, ImageBackground, Button, StyleSheet} from 'react-native';

const Activity3 = () => {
  return (
      <View>
      <ImageBackground source= {require('./images/flames_bg.jpg')} style ={{ width: '100%', height: '100%'}}>
        <View style = {styles.boxStyle}>
          <Button title ="Press Me" color = '#f9769a'
                  onPress={() => {
                  }}
          />
        </View>
      </ImageBackground>
      </View>
  );
};

const styles = StyleSheet.create({
  boxStyle:{
    width: 150,
    height: 150,
    padding: 20,
    backgroundColor: '#00629e',
  }
});
export default Activity3;
