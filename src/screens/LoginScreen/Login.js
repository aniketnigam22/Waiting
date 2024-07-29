import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearValue, increment } from '../../redux/CounterReducer/CounterReducer'
import { PaperProvider, TextInput } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'; // or any other icon set

const Login = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'black', fontSize: 20 }}>{count}</Text>
            <Button title='increase' onPress={() => dispatch(increment())}></Button>
            <Button title='clear' onPress={() => dispatch(clearValue())}></Button>
            <TextInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={secureTextEntry}
                right={
                    <>
                        <TouchableHighlight>
                            <Icon
                                name={secureTextEntry ? "visibility" : "visibility-off"}
                                size={24}
                                color="gray"
                            />
                        </TouchableHighlight>
                    </>
                }
                style={styles.input}
            />

            <TextInput
                label="Password"
                secureTextEntry
                style={styles.input}
                right={<TextInput.Icon icon="eye-open" />}
            />
            <Icon
                name={secureTextEntry ? "visibility" : "visibility-off"}
                size={24}
                color="gray"
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