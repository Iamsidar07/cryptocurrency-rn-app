import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import MyText from '../MyText'

const Feature = ({
  bg ="#303030", imgUrl="https://img.icons8.com/3d-fluency/512/open-book.png",text="Your text will go here"}) => {
  return (
    <TouchableOpacity style={{
      padding: 10,
      backgroundColor: bg,
      width: "30%",
      height: 100,
      justifyContent: "space-between",
      borderRadius: 20,
      // marginRight:5
    }}>
      <Image source={{ uri: imgUrl }} resizeMode="contain" style={{ width: 40, height: 40, }} />
      <MyText style={{
        color: "white",
        fontSize: 10,
      }} text={text} />
    </TouchableOpacity>
  )
}

// "Learn crypto Earn crypto"
// "https://img.icons8.com/3d-fluency/512/open-book.png"

export default Feature