import React from 'react';
import {View,Text,InputText, StyleSheet} from 'react-native';

const FlexDimensionsBasics = () => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: 'powderblue'}} />
            <Text style={StyleSheet.heading}>Tela de Login</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBotton: 50,
    },
});

export default FlexDimensionsBasics;