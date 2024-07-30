import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../../common/Colors'
import HeaderBackButton from '../../components/HeaderBackButton'
import AppImages from '../../common/AppImages'
import { responsiveHeight, responsiveWidth } from '../../common/metrices'
import { RadioButton } from 'react-native-paper'
import LongButton from '../../components/LongButton'
import { setItem } from '../../config/utils'

const ChooseUserType = ({ navigation }) => {
    const [value, setValue] = React.useState('service');
    console.log(value)

    const handleContinue = async () => {
        await setItem('userType', value)

        if (value == 'service') {
            navigation.navigate('Login')
        }

        if (value == 'customer') {
            navigation.navigate('SignUp')
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
            <ScrollView>
                <HeaderBackButton textValue={'Choose'} goBack={false} />

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={AppImages.waitImage} resizeMode='contain' style={{ height: responsiveHeight(350), width: responsiveWidth(350) }} />
                </View>
                <View style={{ margin: 12, marginBottom: 15 }}>
                    <Text style={{ color: Colors.black, fontWeight: '600', fontSize: 20 }}>Select user type</Text>
                </View>
                <View style={styles.radioContainer}>
                    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                        <RadioButton.Item label="Service Provider" value="service" color={Colors.blue} />
                        <RadioButton.Item label="Customer" value="customer" color={Colors.blue} />
                    </RadioButton.Group>
                </View>

                <LongButton
                    buttonText={'Continue'}
                    onPress={() => {
                        handleContinue()
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ChooseUserType

const styles = StyleSheet.create({
    radioContainer: {
        height: responsiveHeight(110),
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#F6F6F6',
        marginBottom: 20
    }
})