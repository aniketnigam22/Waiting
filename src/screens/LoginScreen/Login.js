import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearValue, increment } from '../../redux/CounterReducer/CounterReducer'
import { PaperProvider, TextInput } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';
import TextBox from '../../components/TextBox'

const Login = () => {

    const [password, setPassword] = useState()
    const [eyeValue, setEyeValue] = useState()

    const toggleEye = () => {
        setEyeValue(prevValue => !prevValue);
    };


    console.log((eyeValue));
    return (
        <View>
            <TextBox
                secure={true}
                placeholder={'Password'}
                onChangeText={(e) => {
                    setPassword(e)
                    console.log('on change text pressed')
                }}
                secureTextEntry={!eyeValue}
                placeholder_txt={'Password'}
                eye={eyeValue}
                onPress={toggleEye}
            />
        </View>

    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    input: {
        marginBottom: 16,
        height: 20,
        width: 300
    },
});