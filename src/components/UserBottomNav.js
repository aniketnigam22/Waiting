import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import AppImages from '../common/AppImages'
import App from '../../App'
import { Mystyle } from '../common/Mystyle'
import { useSelector } from 'react-redux'
import Colors from '../common/Colors'

const UserBottomNav = (props) => {

  const navigation = useNavigation()
  const reducer = useSelector(state => state.language)

  return (
    <>
      <View style={styles.container}>
        <View style={Mystyle.row}>
          <View style={Mystyle.header}>
            <TouchableOpacity style={Mystyle.header_center} onPress={() => { navigation.navigate('Home') }}>
              <View style={[Mystyle.header, { paddingTop: 5 }]}>
                <Image source={AppImages.dashboardIcon} resizeMode={'contain'} style={{ height: 24, width: 24, tintColor: props.home ? Colors.blue : '' }} />
              </View>
              <View style={[Mystyle.header, { borderBottomWidth: props.home ? 3 : 0, borderColor: props.home ? Colors.blue : Colors.placeholder_txt }]}>
                <Text style={{ fontSize: 12, color: props.home ? Colors.blue : Colors.black }}>{'Home'}</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={Mystyle.header}>
            <View style={Mystyle.header}>
              <TouchableOpacity style={Mystyle.header_center} onPress={() => { navigation.navigate('Search') }}>
                <View style={[Mystyle.header, { paddingTop: 5 }]}>
                  <Image source={AppImages.searchIcon} resizeMode={'contain'} style={{ height: 24, width: 24, tintColor: props.notification ? Colors.blue : Colors.placeholder_txt }} />
                </View>
                <View style={[Mystyle.header, { borderBottomWidth: props.search ? 3 : 0, borderColor: Colors.blue }]}>
                  <Text style={{ fontSize: 12, color: props.search ? Colors.blue : Colors.black }}>{'Search'}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={Mystyle.header}>
            <View style={Mystyle.header}>
              <TouchableOpacity style={Mystyle.header_center} onPress={() => { navigation.navigate('UserProfile') }}>
                <View style={[Mystyle.header, { paddingTop: 5 }]}>
                  <Image source={AppImages.profileIcon} resizeMode={'contain'} style={{ height: 24, width: 24, tintColor: props.profile ? Colors.blue : '' }} />
                </View>
                <View style={[Mystyle.header, { borderBottomWidth: props.profile ? 3 : 0, borderColor: Colors.blue }]}>
                  <Text style={{ fontSize: 12, color: props.profile ? Colors.blue : Colors.black }}>{'Profile'}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  )
}

export default UserBottomNav

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: Colors.white,
    borderWidth: 0.2
  },
  menu_txt: {
    fontSize: 11,
    color: "#000000",
    // fontFamily: Font.txt_normal
  }
})