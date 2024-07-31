import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import HeaderBackButton from '../../components/HeaderBackButton'
import { responsiveHeight, responsiveWidth } from '../../common/metrices'
import AppImages from '../../common/AppImages'
import TextBox from '../../components/TextBox'
import LongButton from '../../components/LongButton'
import { useDispatch } from 'react-redux'
import { addShopDetail } from '../../redux/ShopDetailReducer/ShopDetailReducer'

const ShopDetail1 = ({ navigation }) => {

  const dispatch = useDispatch();

  const [shopName, setShopName] = useState()
  const [ownerName, setOwnerName] = useState()
  const [shopAddress, setShopAddress] = useState()

  const handleShopDetailContinue = () => {
    
    const data = {
      shopName: shopName,
      ownerName: ownerName,
      shopAddress: shopAddress
    }

    dispatch(addShopDetail(data));

    navigation.navigate('ShopDetail2')
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <ScrollView>
        <HeaderBackButton textValue={'Enter Shop Detail'} goBack={true} />

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={AppImages.shopDetail} resizeMode='contain' style={{ height: responsiveHeight(300), width: responsiveWidth(350) }} />
        </View>

        <View>
          <TextBox
            secure={false}
            placeholder={'Shop Name'}
            onChangeText={(e) => {
              setShopName(e)
            }}
            placeholder_txt={'Shop Name'}
          />
          <TextBox
            secure={false}
            placeholder={'Owner Name'}
            onChangeText={(e) => {
              setOwnerName(e)
            }}
            placeholder_txt={'Owner Name'}
          />
          <TextBox
            secure={false}
            placeholder={'Shop Address'}
            onChangeText={(e) => {
              setShopAddress(e)
            }}
            placeholder_txt={'Shop Address'}
          />

          <View style={{ marginTop: 10 }}>
            <LongButton
              buttonText={'Continue'}
              onPress={() => {
                handleShopDetailContinue()
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ShopDetail1

const styles = StyleSheet.create({})