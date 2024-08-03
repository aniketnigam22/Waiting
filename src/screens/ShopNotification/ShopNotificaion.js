import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderBackButton from '../../components/HeaderBackButton'
import BottomNav from '../../components/BottomNav'

const ShopNotificaion = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderBackButton textValue={'Notification'} goBack={true} />


            <View style={styles.nav}>
                <BottomNav notification={true} />
            </View>
        </SafeAreaView>
    )
}

export default ShopNotificaion

const styles = StyleSheet.create({
    nav: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0
    }
  })