import { View, Text, Image } from 'react-native'
import React from 'react'
import { AntDesign, FontAwesome, Entypo, FontAwesome5 } from '@expo/vector-icons';

const Header = () => {
  return (
      <View style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
      }}>
          <AntDesign name="appstore-o" size={28} color="#FFC107" />

          <View style={{ padding: 10, backgroundColor: "#303030", borderRadius: 50, alignItems: "center", justifyContent: "center" }}><Image source={{ uri: "https://i.pinimg.com/564x/03/c4/14/03c414053ad2bece0a6140c3419b194b.jpg" }} resizeMode="contain" style={{ width: 50, height: 50, borderRadius: 50 }} /></View>
      </View>
  )
}

export default Header