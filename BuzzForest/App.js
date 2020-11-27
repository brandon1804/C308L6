import React from 'react';
import {Text, View, Image, ImageBackground, StyleSheet, ScrollView} from 'react-native';
import {SectionList} from './Section';
const App = () => {
    return (
        <View>
            <ImageBackground source= {require('./images/rainforest_bg.jpg')} style ={{ width: '100%', height: '100%'}}>
                <Text style = {styles.header}>BuzzForest</Text>
                <View style = {styles.container}>
                    <Image style = {styles.banner}  source= {require('./images/orangutan.jpg')}/>
                    <SectionList />
                </View>
                <Text style = {styles.footer}>Copyright</Text>
            </ImageBackground>
        </View>

    );
};
const styles = StyleSheet.create({
    header:{
        textAlign: 'left',
        backgroundColor: '#E1DDAA',
        color: '#3F300E',
        fontSize: 20,
        height: 50,
        padding: 10
    },
    banner:{
        width: '99.8%',
        height : '26%'
    },
    container: {
        padding: 10
    },
    footer:{
        backgroundColor: 'white',
        color: 'black',
        paddingBottom: 20,
        paddingTop: 2,
        paddingLeft: 2
    }
});

export default App;
