import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Mystyle } from '../common/Mystyle'
import AppImages from '../common/AppImages'

const TextBox = (props) => {
    return (
        <>
            <View style={{ marginHorizontal: 16 }}>
                <View style={Mystyle.header}>
                    {props.secure ?
                        <>
                            <Text style={Mystyle.placeHolder_text}>{props.placeholder}</Text>
                            <View style={[Mystyle.select_box, { height: props.height != null ? props.height : 50 }]}>
                                <View style={Mystyle.row}>
                                    <View style={Mystyle.header}>
                                        <TextInput onChangeText={props.onChangeText} secureTextEntry={props.secureTextEntry} placeholder={props.placeholder_txt} style={styles.txt} placeholderTextColor={'grey'} value={props.value} />
                                    </View>
                                    <View style={styles.icon}>
                                        <TouchableOpacity onPress={props.onPress} style={{height:45, width:45, justifyContent:'center', alignItems:'center'}}>
                                            <Image source={props.eye ? AppImages.openEye : AppImages.closeEye} resizeMode={'contain'} style={styles.eye} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </>
                        :
                        <>
                            <Text style={Mystyle.placeHolder_text}>{props.placeholder}</Text>
                            <View style={[Mystyle.select_box, { flexDirection: "row",  height: props.height != null ? props.height : 50 }]}>
                                <View style={Mystyle.header}>
                                    <TextInput maxLength={props.maxLength} onChangeText={props.onChangeText} placeholder={props.placeholder_txt} style={styles.txt} placeholderTextColor={'grey'} keyboardType={props.keyboardType} value={props.value} caretHidden={props.caretHidden} selectTextOnFocus={props.selectTextOnFocus} showSoftInputOnFocus={props.showSoftInputOnFocus} />
                                </View>
                                <View style={[Mystyle.center, { marginHorizontal: 10 }]}>
                                    {props.icon ? <TouchableOpacity disabled={props.disabled} onPress={props.onVerify}>
                                        <Image source={props.source} resizeMode={'contain'} style={styles.eye} />
                                    </TouchableOpacity> : null}
                                </View>
                            </View>
                        </>
                    }
                </View>
            </View>
        </>
    )
}

export default TextBox

const styles = StyleSheet.create({
    txt: {
        fontSize: 14,
        // fontFamily: Font.txt_normal,
        color: 'black',
        marginHorizontal: 5,
    },
    placeholder: {
        fontSize: 12,
        // fontFamily: Font.txt_normal,
        marginHorizontal: 5,
        color:'black'
    },
    eye: {
        height: 18,
        width: 18
    },
    icon: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 16
    }
})