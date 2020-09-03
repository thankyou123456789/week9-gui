import React from 'react'
import {View,Text,Image}from 'react-native'

const typeBanana=(props)=>{
  return(
    <View>
      <Text>
        Type {props.name}
      </Text>
    </View>
  )
}
const Banana=()=>{
  let pic={
    uri:'https://live.staticflickr.com/5614/15106362614_c482cccf74_z.jpg'
  }
  return(
    <View style={{backgroundColor:"green",alignItems:"center"}}>
      <Image
      style={{width:250,height:250,marginTop:20}}
      source={pic} />
      <Text>Hello, I am a Banana</Text>
      <typeBanana name='1.Cavendish Banana'></typeBanana>
    </View>
  )
}
export default Banana;