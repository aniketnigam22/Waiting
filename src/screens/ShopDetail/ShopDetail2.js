import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import HeaderBackButton from '../../components/HeaderBackButton'
import { responsiveHeight, responsiveWidth } from '../../common/metrices'
import AppImages from '../../common/AppImages'
import TextBox from '../../components/TextBox'
import LongButton from '../../components/LongButton'
import SelectDropdown from 'react-native-select-dropdown'
import { Icon } from 'react-native-paper'
import Colors from '../../common/Colors'

const ShopDetail2 = () => {
  const [shopName, setShopName] = useState()
  const [ownerName, setOwnerName] = useState()
  const [shopAddress, setShopAddress] = useState()

  const emojisWithIcons = [
    { title: 'Barber', icon: 'emoticon-happy-outline' },
    { title: 'Salon', icon: 'emoticon-cool-outline' },
    { title: 'Parler', icon: 'emoticon-lol-outline' },
    { title: 'Resturant', icon: 'emoticon-sad-outline' },
    { title: 'Tailer', icon: 'emoticon-cry-outline' },
  ];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <ScrollView>
        <HeaderBackButton textValue={'Enter Shop Detail'} goBack={true} />

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={AppImages.shopDetail} resizeMode='contain' style={{ height: responsiveHeight(300), width: responsiveWidth(350) }} />
        </View>

        <View>
          {/* select dropdown start */}
          <View>
            <Text style={{ color: Colors.black, fontWeight: '600', marginHorizontal: 16, fontSize: 16, paddingVertical: 10 }}>{`Shop Type`}</Text>
          </View>

          <View style={{ marginHorizontal: 16 }}>
            <SelectDropdown
              data={emojisWithIcons}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              renderButton={(selectedItem, isOpened) => {
                return (
                  <View style={styles.dropdownButtonStyle}>
                    {selectedItem && (
                      <Icon name={selectedItem.icon} style={styles.dropdownButtonIconStyle} />
                    )}
                    <Text style={styles.dropdownButtonTxtStyle}>
                      {(selectedItem && selectedItem.title) || 'Select shop type'}
                    </Text>
                    {/* <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} /> */}
                    <Image source={AppImages.dropdownIcon} resizeMode='contain' style={{ height: responsiveHeight(20), width: responsiveWidth(30) }} />
                  </View>
                );
              }}
              renderItem={(item, index, isSelected) => {
                return (
                  <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
                    <Icon name={item.icon} style={styles.dropdownItemIconStyle} />
                    <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                  </View>
                );
              }}
              showsVerticalScrollIndicator={false}
              dropdownStyle={styles.dropdownMenuStyle}
            />
          </View>
          {/* select dropdown end */}


          <View style={styles.customTextInutContainer}>
            <View>
              <Text style={styles.customTextInputText}>{`Shop opening time`}</Text>
              <View style={styles.customTextInputInnerContainer}>
                <TextInput
                  placeholder='8:00 am'
                  placeholderTextColor={'grey'}
                  onChangeText={(text) => {
                    setName(text)
                  }}
                  style={{
                    paddingHorizontal: 10,
                    color: 'black'
                  }}
                />
              </View>
            </View>
            <View>
              <Text style={styles.customTextInputText}>{`Shop closing time`}</Text>

              <View style={styles.customTextInputInnerContainer}>
                <TextInput
                  placeholder='10:00 pm'
                  placeholderTextColor={'grey'}
                  onChangeText={(text) => {
                    setNumber(text)
                  }}
                  keyboardType='numeric'
                  style={{
                    paddingHorizontal: 10,
                    color: 'black'
                  }}
                />
              </View>
            </View>
          </View>

          <TextBox
            secure={false}
            placeholder={'Shop Description'}
            onChangeText={(e) => {
              setEmail(e)
            }}
            placeholder_txt={'Shop Description'}
            height={100}
          />

          <View style={{ marginTop: 10 }}>
            <LongButton
              buttonText={'Submit'}
              onPress={() => {
                console.log('buttonClicked')
                navigation.navigate('ShopDetail2')
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ShopDetail2

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.white,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#B8B8D2"
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 14,
    // fontWeight: '500',
    color: 'black',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  AccountSetContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10
  },
  customTextInutContainer: {
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  customTextInputText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
    paddingVertical: 10
  },
  customTextInputInnerContainer: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    width: responsiveWidth(150),
    borderColor: "#B8B8D2",
    height: responsiveHeight(50)
  }
});