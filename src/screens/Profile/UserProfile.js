import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBackButton from '../../components/HeaderBackButton'
import BottomNav from '../../components/BottomNav'
import ProfileBox from '../../components/ProfileBox'
import AppImages from '../../common/AppImages'
import { Button, Dialog, Portal, PaperProvider } from 'react-native-paper';
import { showDanger, showInfo, showSuccess, showWarning } from '../../common/CommonFunction'
import { responsiveHeight, responsiveWidth } from '../../common/metrices'
import Colors from '../../common/Colors'
import UserBottomNav from '../../components/UserBottomNav'

const UserProfile = () => {

    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
  
    const hideDialog = () => {
      setVisible(false)
      navigation.navigate('WaitingDashboard')
      showSuccess('Success', 'You are Successfully Logout')
    };
  
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <PaperProvider>
          <HeaderBackButton textValue={'Profile'} goBack={true} />
  
          <View style={styles.profileB}>
            <View style={styles.profileInnerView}>
              {/* <View style={styles.profileImage}></View> */}
              <Image source={AppImages.dummyProfile} style={styles.profileImage} resizeMethod='contain' />
              <View >
                <Text style={styles.profileText}>Aniket Nigam</Text>
                <Text style={styles.profileText2}>6385633734</Text>
              </View>
            </View>
          </View>
  
  
          <View style={styles.profileboxContainer}>
            <ProfileBox
              txt={'Profile'}
              source={AppImages.backButton}
            />
  
            <ProfileBox
              txt={'Language'}
              source={AppImages.backButton}
            />
  
            <ProfileBox
              txt={'Reset Password'}
              source={AppImages.backButton}
            />
  
            <ProfileBox
              txt={'Terms and Condition'}
              source={AppImages.backButton}
            />
  
            <ProfileBox
              txt={'Privacy Policy'}
              source={AppImages.backButton}
            />
  
            <ProfileBox
              txt={'Logout'}
              source={AppImages.backButton}
              onPress={() => showDialog()}
            />
  
          </View>
  
          <View style={styles.nav}>
            <UserBottomNav profile={true} />
          </View>
  
  
          <View>
            <Portal>
              <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>Logout? </Dialog.Title>
                <Dialog.Content>
                  <Text variant="bodyMedium">Are you sure, You want to logout</Text>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={hideDialog}>Done</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
          </View>
        </PaperProvider>
      </SafeAreaView>
    )
}

export default UserProfile
const styles = StyleSheet.create({
    nav: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0
    },
    profileboxContainer: {
      marginHorizontal: 16
    },
    profileB: {
      height: responsiveHeight(150),
      marginHorizontal: responsiveWidth(16),
      backgroundColor: Colors.white,
      borderRadius: 14,
      elevation: 1,
      justifyContent: 'center'
    },
    profileInnerView: {
      // backgroundColor: 'red',
      height: responsiveHeight(100),
      marginHorizontal: responsiveWidth(16),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    profileImage: {
      height: responsiveHeight(100),
      width: responsiveWidth(100),
      backgroundColor: "green",
      borderRadius: 50
    },
    profileText: {
      color: Colors.grey,
      fontSize: 18,
      fontWeight: '500'
    },
    profileText2: {
      color: Colors.grey,
      fontSize: 16,
      fontWeight: '500'
    }
  })