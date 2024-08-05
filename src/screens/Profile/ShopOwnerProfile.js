import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBackButton from '../../components/HeaderBackButton'
import BottomNav from '../../components/BottomNav'
import ProfileBox from '../../components/ProfileBox'
import AppImages from '../../common/AppImages'

const ShopOwnerProfile = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderBackButton textValue={'Profile'} goBack={false} />
      <ProfileBox
        source={AppImages.backButton}
        txt={'Settings'}
        onPress={() => {
          navigation.navigate('WaitingDashboard');
        }}
      />

      <View style={styles.nav}>
        <BottomNav profile={true} />
      </View>
    </SafeAreaView>
  )
}

export default ShopOwnerProfile

const styles = StyleSheet.create({
  nav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  }
})