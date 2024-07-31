import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import HeaderBackButton from '../../components/HeaderBackButton'
import AppImages from '../../common/AppImages'
import { responsiveHeight, responsiveWidth } from '../../common/metrices'
import Colors from '../../common/Colors'
import OTPTextView from 'react-native-otp-textinput';
import LongButton from '../../components/LongButton'


const Otp = ({navigation}) => {
    const [text, setText] = useState('');
    const [otpInput, setOtpInput] = useState('');
    const input = useRef(null);

    const handleOtpChange = (otp) => {
        setOtpInput(otp)
        console.log(otpInput)
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
            <ScrollView>
                <HeaderBackButton textValue={'Enter Otp'} goBack={true} />

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={AppImages.otp} resizeMode='contain' style={{ height: responsiveHeight(350), width: responsiveWidth(350) }} />
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: Colors.grey, fontSize: 12 }}>{'Otp has been sent to your email account.'}</Text>
                </View>

                <OTPTextView
                    ref={input}
                    textInputStyle={styles.textInputStyle}
                    handleTextChange={handleOtpChange}
                    inputCount={4}
                    keyboardType="numeric"
                    tintColor={Colors.blue}
                    containerStyle={styles.marginH}
                />

                <View style={{ marginTop: 15 }}>
                    <LongButton
                        buttonText={'Submit'}
                        onPress={() => {
                            console.log('buttonClicked')
                            navigation.navigate('ShopDetail1')
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Otp

const styles = StyleSheet.create({
    textInputStyle: {
        width: 56,
        height: responsiveHeight(56),
        backgroundColor: Colors.white,
        borderRadius: 14,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        elevation: 2,
        marginTop: responsiveHeight(20),
        color: 'black'

    },
    marginH: {
        marginHorizontal: responsiveWidth(16)
    }
})
