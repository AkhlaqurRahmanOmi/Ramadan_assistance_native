import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';


const HomeScreen = ({navigation}) => {
    return (
        <View className="flex flex-1 m-10 flex-col justify-center p-10 items-center space-x-8  ">
            <Text className="text-red-800">Home</Text>
            <Button className="max-w-0" title="Button 1" onPress={() => console.log('Button 1 pressed')} />
            <Button title="Button 2" onPress={() => console.log('Button 2 pressed')} />
            <Button title="Jakat Calculator" onPress={() => navigation.navigate('JakatCalculor2')} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default HomeScreen;
