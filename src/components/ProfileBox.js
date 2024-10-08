import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { Mystyle } from '../common/Mystyle'

const ProfileBox = (props) => {
    return (
        <>
            <TouchableHighlight underlayColor={'none'} onPress={props.onPress}>
                <View style={styles.box}>
                    <View style={Mystyle.row}>
                        <View style={styles.center}>
                            <Image
                                style={{ height: 22, width: 22, tintColor: Colors.border }}
                                source={props.source}
                                resizeMode={'contain'}
                            />
                        </View>
                        <View style={[Mystyle.header, { justifyContent: 'center' }]}>
                            <Text style={styles.heading}>{props.txt}</Text>
                            {props.text ? (
                                <Text style={styles.city}>{props.text}</Text>
                            ) : (
                                <></>
                            )}
                        </View>
                        <View style={styles.center}>
                            <TouchableHighlight
                                style={props.check ? null : styles.arrow}
                                onPress={props.onPress}
                                underlayColor={'none'}>
                                {/* <Image
                                    source={
                                        props.check
                                            ? props.check
                                            : require('../../assets/image/arr.png')
                                    }
                                    resizeMode={'contain'}
                                    style={props.check ? props.style : styles.img}
                                /> */}

                                <></>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        </>
    )
}

export default ProfileBox

const styles = StyleSheet.create({
    box: {
        height: 56,
        width: '100%',
        backgroundColor: Colors.white,
        borderRadius: 12,
        marginVertical: 8,
        elevation: 2,
    },
    row: {
        flex: 1,
        flexDirection: "row",
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    header: {
        flex: 1,
    },
    heading: {
        fontSize: 15,
        fontWeight: '600',
        color: '#4E4E5A',
        // fontFamily: Font.txt_medium,
    },
    arrow: {
        height: 18,
        width: 18,
        borderWidth: 1.5,
        borderRadius: 18,
        // borderColor: Colors.btn_color,
        justifyContent: 'center',
        alignItems: 'center',
    },
})