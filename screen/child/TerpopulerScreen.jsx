import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import tw from "twrnc"

export default function TerpopulerScreen() {
  return (
    <ScrollView style={tw`bg-[#FDFDFD] flex-1`}>
        <Text>Terbaru</Text>
    </ScrollView>
  )
}