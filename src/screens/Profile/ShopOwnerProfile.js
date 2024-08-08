import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBackButton from '../../components/HeaderBackButton'
import BottomNav from '../../components/BottomNav'
import ProfileBox from '../../components/ProfileBox'
import AppImages from '../../common/AppImages'
import { Button, Dialog, Portal, PaperProvider } from 'react-native-paper';
import { showDanger, showSuccess } from '../../common/CommonFunction'

const ShopOwnerProfile = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);

  const hideDialog = () => {
    setVisible(false)
    navigation.navigate('Login')
    showSuccess('Success', 'You are Successfully Logout')
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PaperProvider>
        <HeaderBackButton textValue={'Profile'} goBack={true} />


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
          <BottomNav profile={true} />
        </View>


        <View>
          {/* <Button onPress={showDialog}>Show Dialog</Button> */}
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

export default ShopOwnerProfile

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
})