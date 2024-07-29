import { Button, Image, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearValue, increment } from '../../redux/CounterReducer/CounterReducer'
import { PaperProvider, TextInput } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';
import TextBox from '../../components/TextBox'
import AppImages from '../../common/AppImages'
import { responsiveHeight, responsiveWidth } from '../../common/metrices'

const Login = () => {

    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [eyeValue, setEyeValue] = useState()

    const toggleEye = () => {
        setEyeValue(prevValue => !prevValue);
    };

    return (

        <>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'white' }}>
                <Image source={AppImages.loginImage} resizeMode='contain' style={{ height: responsiveHeight(350), width: responsiveWidth(350) }} />
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <TextBox
                        secure={false}
                        placeholder={'Email'}
                        onChangeText={(e) => {
                            setEmail(e)
                        }}
                        placeholder_txt={'Email'}
                    />
                    <TextBox
                        secure={true}
                        placeholder={'Password'}
                        onChangeText={(e) => {
                            setPassword(e)
                        }}
                        secureTextEntry={!eyeValue}
                        placeholder_txt={'Password'}
                        eye={eyeValue}
                        onPress={toggleEye}
                    />
                </ScrollView>
            </View>

        </>

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