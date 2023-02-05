import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign, FontAwesome, Entypo } from '@expo/vector-icons';
const Footer = () => {
  return (
      <View style={{ backgroundColor: "#303030", padding: 15, flexDirection: "row", alignItems: "center", justifyContent: 'space-around', position: "absolute", bottom: 7, borderRadius: 30, left: 10, right: 10 }}>
          <AntDesign name="home" size={24} color="#FFC107" style={{ width: 25, height: 25, }} />

          <FontAwesome name="bitcoin" size={24} color="white" />

          <Entypo name="open-book" size={24} color="white" />

          <FontAwesome name="group" size={24} color="white" />

      </View>
  )
}

export default Footer