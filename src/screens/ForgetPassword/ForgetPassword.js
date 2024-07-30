import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearValue, increment } from '../../redux/CounterReducer/CounterReducer'
import { PaperProvider, TextInput } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';
import TextBox from '../../components/TextBox'
import AppImages from '../../common/AppImages'
import { responsiveHeight, responsiveWidth } from '../../common/metrices'
import Colors from '../../common/Colors'
import LongButton from '../../components/LongButton'
import HeaderBackButton from '../../components/HeaderBackButton'

const ForgetPassword = ({navigation}) => {

    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [confPassword, setConfPassword] = useState()
    const [eyeValue, setEyeValue] = useState()
    const [eyeValue2, setEyeValue2] = useState()

    const toggleEye = () => {
        setEyeValue(prevValue => !prevValue);
    };
    const toggleEye2 = () => {
        setEyeValue2(prevValue => !prevValue);
    };
    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
            <ScrollView>
                <HeaderBackButton textValue={'Forget Password'} goBack={false} />
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={AppImages.loginImage} resizeMode='contain' style={{ height: responsiveHeight(350), width: responsiveWidth(350) }} />
                </View>
                <View style={styles.containerSecond}>
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

                    <TextBox
                        secure={true}
                        placeholder={'Confirm Password'}
                        onChangeText={(e) => {
                            setConfPassword(e)
                        }}
                        secureTextEntry={!eyeValue2}
                        eye={eyeValue2}
                        placeholder_txt={'Confirm Password'}
                        onPress={toggleEye2}
                    />


                    <View style={{marginTop:10}}>
                        <LongButton
                            buttonText={'Login'}
                            onPress={() => {
                                console.log('buttonClicked')
                            }}
                        />
                    </View>

                    <View style={styles.AccountSetContainer}>
                        <Text style={{ color: Colors.grey }}>{`Don't have an account ?  `}</Text>
                        <Text style={{ color: Colors.black, fontWeight: '600' }} onPress={() => navigation.navigate('SignUp')}>{`Sign Up`}</Text>
                    </View>
                </View >
            </ScrollView>

        </SafeAreaView>

    )
}

export default ForgetPassword


const styles = StyleSheet.create({
    input: {
        marginBottom: 16,
        height: 20,
        width: 300
    },
    containerSecond: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: 'white',
        flex: 1
    },
    forgetPtext: {
        color: Colors.black,
        fontWeight: '600'
    },
    forgetPcontainer: {
        alignItems: 'flex-end',
        marginVertical: 5,
        marginRight: 10
    },
    buttonContainer: {
        height: responsiveHeight(50),
        marginHorizontal: 16,
        backgroundColor: Colors.blue,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: Colors.white
    },
    AccountSetContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10
    }
});