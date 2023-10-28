import { View, Text, Image } from 'react-native'
import React from 'react'

import tw from 'twrnc'
import { Logo } from '../components'

export default function SplashScreen({navigation}) {
    if(navigation){
        setTimeout(() => {
            navigation.push("register")
        },1000)
    }
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Logo />
    </View>
  )
}