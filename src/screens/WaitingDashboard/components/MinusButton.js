import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../../../common/Colors'
import { responsiveHeight, responsiveWidth } from '../../../common/metrices'

const MinusButton = (props) => {
    return (
        <TouchableOpacity style=
            {{
                height: responsiveHeight(20),
                width: responsiveWidth(20),
                backgroundColor: Colors.blue,
                borderRadius: 10,
                marginHorizontal: responsiveWidth(8)
            }}

            onPress={props.onPress}
        >
            <View style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <Text style={{
                    color: Colors.white,
                    fontWeight: '600'
                }}
                >
                    -
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default MinusButton

const styles = StyleSheet.create({})