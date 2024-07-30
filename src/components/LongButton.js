import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveHeight } from '../common/metrices'
import Colors from '../common/Colors'

const LongButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{props.buttonText}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default LongButton

const styles = StyleSheet.create({
    buttonContainer: {
        height: responsiveHeight(50),
        marginHorizontal: 16,
        backgroundColor: Colors.blue,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:5
    },
    buttonText: {
        fontSize: 18,
        color: Colors.white
    }
})