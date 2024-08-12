import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserBottomNav from '../../components/UserBottomNav'
import HeaderBackButton from '../../components/HeaderBackButton'
import { responsiveHeight, responsiveWidth } from '../../common/metrices'
import AppImages from '../../common/AppImages'
import Colors from '../../common/Colors'

const Search = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <HeaderBackButton textValue={'Search'} goBack={true} />

            <View style={styles.searchContainer}>
                <TextInput
                    placeholder='Search you salon'
                    style={styles.searchTextInp}
                    placeholderTextColor={Colors.grey}
                    color={Colors.black}
                />
                <TouchableOpacity>
                    <Image source={AppImages.searchIcon} style={styles.searchIcon} tintColor={Colors.blue} />
                </TouchableOpacity>
            </View>

            <View></View>


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
    searchContainer: {
        backgroundColor: Colors.white,
        height: responsiveHeight(50),
        marginHorizontal: 28,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: Colors.blue
    },
    searchTextInp: {
        flex: 1,
    },
    searchIcon: {
        height: responsiveHeight(20),
        width: responsiveWidth(20),
        marginHorizontal: responsiveWidth(15),
    }
})