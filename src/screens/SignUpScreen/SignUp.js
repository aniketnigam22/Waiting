import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import HeaderBackButton from '../../components/HeaderBackButton'
import AppImages from '../../common/AppImages'
import { responsiveHeight, responsiveWidth } from '../../common/metrices'
import { useSafeAreaFrame } from 'react-native-safe-area-context'
import TextBox from '../../components/TextBox'
import LongButton from '../../components/LongButton'
import Colors from '../../common/Colors'


const SignUp = ({ navigation }) => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confPassword, setConfPassword] = useState()
    const [number, setNumber] = useState()
    const [address, setAddress] = useState()


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
                <HeaderBackButton textValue={'Signup'} goBack={true} />

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={AppImages.singUp} resizeMode='contain' style={{ height: responsiveHeight(200), width: responsiveWidth(250) }} />
                </View>

                <View>
                    <TextBox
                        secure={false}
                        placeholder={'Name'}
                        onChangeText={(e) => {
                            setName(e)
                        }}
                        placeholder_txt={'Name'}
                    />
                    <TextBox
                        secure={false}
                        placeholder={'Phone Number'}
                        onChangeText={(e) => {
                            setNumber(e)
                        }}
                        placeholder_txt={'Phone Number'}
                    />
                    <TextBox
                        secure={false}
                        placeholder={'Email'}
                        onChangeText={(e) => {
                            setEmail(e)
                        }}
                        placeholder_txt={'Email'}
                    />
                    <TextBox
                        secure={false}
                        placeholder={'Address'}
                        onChangeText={(e) => {
                            setAddress(e)
                        }}
                        placeholder_txt={'Address'}
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

                    <View style={{ marginTop: 10 }}>
                        <LongButton
                            buttonText={'Sign Up'}
                            onPress={() => {
                                console.log('buttonClicked')
                            }}
                        />
                    </View>

                    <View style={styles.AccountSetContainer}>
                        <Text style={{ color: Colors.grey }}>{`Already have an account ?  `}</Text>
                        <Text style={{ color: Colors.black, fontWeight: '600' }} onPress={() => navigation.navigate('Login')}>{`Login`}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    AccountSetContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10
    }
})