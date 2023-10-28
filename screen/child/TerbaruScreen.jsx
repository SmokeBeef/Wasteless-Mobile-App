import { View, Text, ScrollView, RefreshControl } from 'react-native'
import React from 'react'

import tw from "twrnc"
import { data } from '../data/data'
import Box from '../../components/inner/Box'

export default function TerbaruScreen() {
  return (
    <ScrollView 
    refreshControl={<RefreshControl />}
    style={tw`bg-[#FDFDFD] flex-1`}>
      <View
        style={tw`flex-row gap-y-[32px] justify-between flex-wrap mt-[24px]`}
      >
        {data.map((val, index) => (
          <Box
            key={index}
            distance={val.jarak}
            img={val.img}
            like={val.like}
            rate={val.rating}
            title={val.nama}
            user={val.penyewa}
            iLike={val.iLike}
          />
        ))}
      </View>

      <View style={tw`mt-10`}></View>
    </ScrollView>
  )
}