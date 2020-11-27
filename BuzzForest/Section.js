import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    Button, Alert,
} from 'react-native';

import capitalize from 'capitalize';


const SECTION_DATA = [
    {
        title: 'ANIMALS',
        description: 'See the animal exhibits, discover the secrets about the animals we love and how they are cared for daily. Seize the opportunity to interact with some of the animal.'
    },
    {
        title: 'ACTIVITIES',
        description: 'You, not only get to see animals, but all visitors can satisfy their curiosity, feed the animals and get up-close with the animals and have fun.'
    },
    {
        title: 'FIND US',
        description: 'Making your way to App is easy. No matter where you are, there are many quick and convenient ways to find us.'
    }
];


class Section extends React.Component{
    render(){
        return(
            <View>
                <View style = {styles.boxStyle}>
                <Button title = {this.props.title} color = '#BF4216'
                        onPress={() => Alert.alert(capitalize.words(this.props.title) + " button pressed!")}
                />
                <Text style = {styles.text}>{this.props.description}</Text>
                </View>
            </View>
        )
    }
}

const SectionList = () => {
    return SECTION_DATA.map(section => <Section title={section.title} description={section.description}/>)
}

const styles = StyleSheet.create({
    boxStyle:{
        height: 110,
        backgroundColor: '#557622',
        marginTop: 20
    },
    text:{
        color: '#F4F3E4'
    }
});

export {SectionList};

