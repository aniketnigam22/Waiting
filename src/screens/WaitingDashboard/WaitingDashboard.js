import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../common/Colors'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../common/metrices'
import { Switch } from 'react-native-paper'
import { socket } from '../Socket/Socket'
import HeaderBackButton from '../../components/HeaderBackButton'
import BottomNav from '../../components/BottomNav'

const WaitingDashboard = () => {
    const [isSwitchOn, setIsSwitchOn] = useState(true);
    // socket.on("connection", (e) => {
    //     socket.on('socketid', (e) => {
    //         console.log(e);
    //     })
    // })
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
            <HeaderBackButton textValue={'Dashboard'} goBack={false} />
            <View style={styles.container1}>
                <View style={styles.container1Head}>
                    <View>
                        <Text style={styles.shopName}>{`D'Looks Barber Shop`}</Text>
                        <Text style={styles.ownerName}>{`Owned by: Aniket Nigam`}</Text>
                    </View>
                    <View>
                        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={Colors.blue} />
                        <View style={styles.switchContainer}>
                            <View style={{ height: 10, width: 10, borderRadius: 10, backgroundColor: isSwitchOn ? 'green' : 'red' }}></View>
                            <Text style={styles.ownerName}>{isSwitchOn ? 'Open' : 'Close'}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.peopleDetailContainer}>
                    <View style={styles.peopleInnerContainer}>
                        <Text style={styles.peopleHead}>{`Capacity`}</Text>
                        <Text style={styles.peopleBody}>{`20`}</Text>
                    </View>

                    <View style={{ borderRightWidth: 0.5, height: 40 }}></View>

                    <View style={styles.peopleInnerContainer}>
                        <Text style={styles.peopleHead}>{`Total People`}</Text>
                        <Text style={styles.peopleBody}>{`25`}</Text>
                    </View>

                    <View style={{ borderRightWidth: 0.5, height: 40 }}></View>

                    <View>
                        <Text style={styles.peopleHead}>{`Waiting`}</Text>
                        <Text style={styles.peopleBody}>{`5`}</Text>
                    </View>
                </View>

                <View style={styles.addressContainer}>
                    <View style={{ marginTop: 2, marginLeft: 10 }}>
                        <Text style={styles.addressHead}>{`Address:`}</Text>
                    </View>
                    <View style={{ marginTop: 8, marginLeft: 10 }}>
                        <Text style={styles.addressBody}>{`602/1549 dubagga lucknow`}</Text>
                    </View>
                </View>

                <View style={styles.phonecontainer}>
                    <View style={{ marginTop: 2, marginLeft: 10 }}>
                        <Text style={styles.addressHead}>{`Phone Number:`}</Text>
                    </View>
                    <View style={{ marginTop: 8, marginLeft: 10 }}>
                        <Text style={styles.addressBody}>{`+91 6392856900`}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.container2}>
                <View style={styles.nav}>
                    <BottomNav home={true} />
                </View>
            </View>

        </SafeAreaView>
    )
}

export default WaitingDashboard

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: Colors.white,
        margin: 12,
        borderRadius: 10,
        elevation: 20
    },
    container2: {
        flex: 1,
        // backgroundColor: 'blue'
    },
    container1Head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10
    },
    shopName: {
        fontSize: responsiveFontSize(30),
        marginVertical: 3,
        color: Colors.blue,
        fontWeight: '600'
    },
    ownerName: {
        fontSize: responsiveFontSize(14),
        color: Colors.black,
        fontWeight: '600'
    },
    switchContainer: {
        flexDirection: 'row',
        // backgroundColor:'red',
        width: responsiveWidth(40),
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    peopleDetailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginTop: responsiveHeight(30)
    },
    peopleHead: {
        fontSize: responsiveFontSize(20),
        color: Colors.black,
    },
    peopleBody: {
        fontSize: responsiveFontSize(16),
        color: Colors.blue,
        fontWeight: '600'
    },
    peopleInnerContainer: {
        // borderRightWidth:1
    },
    addressContainer: {
        //   borderWidth:1,
        height: responsiveHeight(80),
        marginHorizontal: 15,
        borderRadius: 10,
        marginTop: 25,
        elevation: 1,
        backgroundColor: Colors.white
    },
    addressHead: {
        fontSize: responsiveFontSize(16),
        color: Colors.blue,
        fontWeight: '600'
    },
    addressBody: {
        fontSize: responsiveFontSize(14),
        color: Colors.grey,
        fontWeight: '500'
    },
    phonecontainer: {
        //   borderWidth:1,
        height: responsiveHeight(80),
        marginHorizontal: 15,
        borderRadius: 10,
        marginTop: 25,
        elevation: 1,
        backgroundColor: Colors.white
    },
    nav: {
        position:'absolute',
        bottom:0,
        left:0,
        right:0
    }
})