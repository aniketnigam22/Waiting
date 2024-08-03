import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppImages from '../common/AppImages'
import Colors from '../common/Colors'
import { useNavigation } from '@react-navigation/native'

const HeaderBackButton = (props) => {
    const navigation = useNavigation();
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal:5 }}>
            {
                props.goBack == true
                    ?
                    <>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ height: 50, width: 50, }}>
                            <Image source={AppImages.backButton} style={{ height: 50, width: 50 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, color: Colors.black, fontWeight: '600' }}>{props.textValue}</Text>
                    </>
                    :
                    <>
                        <TouchableOpacity style={{ height: 50, width: 50 }}>
                            <Image source={AppImages.backButton} style={{ height: 50, width: 50 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, color: Colors.black, fontWeight: '600' }}>{props.textValue}</Text>
                    </>
            }
        </View>
    )
}

export default HeaderBackButton

const styles = StyleSheet.create({})