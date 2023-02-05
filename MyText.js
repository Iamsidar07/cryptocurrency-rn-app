import { View, Text } from 'react-native'
import React from 'react'

const MyText = ({style,text}) => {
  
  return (
    <Text style={[{ fontFamily: "SpaceGrotesk-Regular",fontSize:10,color:"white" },style, ]}>{text}</Text>
  )
}

export default MyText