import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import MyText from '../MyText'

const Crypto = ({ coinUrl ="https://img.icons8.com/color/512/ethereum.png",coinName="McCoin",coinSymbol="XYZ/ABC",currentValue="20174.23",rate=20}) => {

  return (
      <TouchableOpacity style={{
          padding: 15,
          backgroundColor: '#1E1E1E',
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          height: 80,
          justifyContent: "space-between",
          borderRadius: 15,
          marginTop: 4,

      }}>
          <View style={{ flexDirection: "row", alignItems: "center", }}>
              <Image source={{ uri: coinUrl }} resizeMode="contain" style={{ width: 50, height: 50, }} />
              <View style={{ marginLeft: 5, }}>
                  <MyText style={{ fontSize: 18, fontWeight: "500" }} text={coinName} />
                  <MyText style={{ color: "gray", }} text={coinSymbol} />
              </View>
          </View>
          <View >
              <MyText style={{ fontSize: 18, fontWeight: "500" }} text={`$ ${currentValue}`} />
              <View style={{
                  flexDirection: "row", alignItems: "center", justifyContent: "center",marginTop:5,
              }}>

                  {
                      rate >= 0 ? <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/4256/4256900.png" }} resizeMode="contain" style={{ width: 17, height: 17}} /> : <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/8774/8774665.png" }} resizeMode="contain" style={{ width: 17, height: 17 }} />
                  }
                  <MyText text={rate+" %"} style={{ color: rate >= 0 ? "green" : "red", marginLeft: 15,fontSize:16 }} />
              </View>
          </View>

      </TouchableOpacity>
  )
}

export default Crypto

// https://img.icons8.com/color/512/ethereum.png