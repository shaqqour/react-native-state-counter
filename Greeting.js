import React from 'react';
import { Text, View } from 'react-native';

const Greeting = (props) => {
    return  (
        <View>
            <Text>Hello {props.name}!</Text>
        </View>
    );
}

export default Greeting;