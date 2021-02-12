import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';



const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <View>
            <Text>You clicked me {count} times</Text>
            <Button onPress={() => {setCount(count + 1)}} title={"Click Me"} />
        </View>
    );

}

export default Counter;