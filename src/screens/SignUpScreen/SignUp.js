import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
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
    console.log(number);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
            <ScrollView>
                <HeaderBackButton textValue={'Signup'} goBack={true} />

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={AppImages.singUp} resizeMode='contain' style={{ height: responsiveHeight(200), width: responsiveWidth(250) }} />
                </View>

                <View>
                    <View style={styles.customTextInutContainer}>
                        <View>
                            <Text style={styles.customTextInputText}>{`Name`}</Text>
                            <View style={styles.customTextInputInnerContainer}>
                                <TextInput
                                    placeholder='Name'
                                    placeholderTextColor={'grey'}
                                    onChangeText={(text) => {
                                        setName(text)
                                    }}
                                    style={{
                                        paddingHorizontal: 10,
                                        color: 'black'
                                    }}
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.customTextInputText}>{`Phone Number`}</Text>
                            <View style={styles.customTextInputInnerContainer}>
                                <TextInput
                                    placeholder='Phone Number'
                                    placeholderTextColor={'grey'}
                                    onChangeText={(text) => {
                                        setNumber(text)
                                    }}
                                    keyboardType='numeric'
                                    style={{
                                        paddingHorizontal: 10,
                                        color: 'black'
                                    }}
                                />
                            </View>
                        </View>
                    </View>

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
                                navigation.navigate('Otp')
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
    },
    customTextInutContainer: {
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    customTextInputText: {
        color: 'black',
        fontWeight: '600',
        fontSize: 16,
        paddingVertical: 10
    },
    customTextInputInnerContainer: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        width: responsiveWidth(150),
        borderColor: "#B8B8D2",
        height: responsiveHeight(50)
    }
})