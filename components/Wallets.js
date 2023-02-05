import { View, Text, TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
import MyText from '../MyText'
import { AntDesign, FontAwesome, Entypo, FontAwesome5 } from '@expo/vector-icons';
const Wallets = ({ bg ="#242424"}) => {
    const width=Dimensions.get('screen').width;
  return (
      <TouchableOpacity>
          <View style={{
              width: width*0.9 ,
              height: 220,
              paddingVertical: 30,
              paddingHorizontal: 20,
              backgroundColor:bg,
              borderRadius: 25,
              marginRight: 10,
              justifyContent: "space-evenly",
          }}>
              <MyText style={{
                  fontSize: 20,
                  color: "white"
              }} text={"My Wallet"} />
              <View>
                  <MyText style={{
                      fontSize: 20,
                      color: "white"
                  }} text={"Balance"} />
                  <MyText style={{
                      fontSize: 35,
                      color: "white",
                  }} text={"$1357.00"} />
                  <MyText style={{
                      color: "white",
                      marginBottom: 15,
                  }} text={"/usd"} />

              </View>
              <View style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
              }}>
                  <View style={{
                      flexDirection: "row",
                      alignItems: "center",
                  }}>
                      <FontAwesome5 name="piggy-bank" size={24} color="#FFC107" />
                      <MyText style={{
                          marginLeft: 5,
                          color: "white",
                          fontSize: 14,
                      }} text={"Deposit"} />
                  </View>
                  <View style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                  }}>
                      <View style={{
                          flexDirection: "row",
                          alignItems: "center",
                      }}>
                          <FontAwesome name="bank" size={20} color="#FFC107" />
                          <MyText style={{
                              marginLeft: 5,
                              color: "white",
                              fontSize: 14
                          }} text={"Withdraw"} />
                      </View>


                  </View>
                  <View style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                  }}>
                      <View style={{
                          flexDirection: "row",
                          alignItems: "center",
                      }}>
                          <Entypo name="link" size={24} color="#FFC107" />
                          <MyText style={{
                              marginLeft: 2,
                              color: "white",
                              fontSize: 14
                          }} text={"More"} />
                      </View>


                  </View>

              </View>

          </View>
      </TouchableOpacity>
  )
}

export default Wallets