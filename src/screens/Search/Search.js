import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserBottomNav from '../../components/UserBottomNav'
import HeaderBackButton from '../../components/HeaderBackButton'

const Search = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <HeaderBackButton textValue={'Search'} goBack={true} />



            <View style={styles.nav}>
                <UserBottomNav search={true} />
            </View>


        </SafeAreaView>
    )
}

export default Search

const styles = StyleSheet.create({
    nav: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    },
})