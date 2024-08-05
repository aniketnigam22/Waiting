import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from '../common/metrices'
import Colors from '../common/Colors'

const ShortButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{props.buttonText}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ShortButton

const styles = StyleSheet.create({
    buttonContainer: {
        height: responsiveHeight(35),
        // marginHorizontal: 16,
        backgroundColor: Colors.blue,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:5,
        width:responsiveWidth(80)
    },
    buttonText: {
        fontSize: 14,
        color: Colors.white
    }
})