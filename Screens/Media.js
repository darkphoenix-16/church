import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons'

export function Media() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", backgroundColor:"white", elevation:10, padding:25, borderRadius:15,}}>
          <Text style={{fontSize:25 , fontWeight:"condensedBold"}}>Sermons</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", backgroundColor:"white", elevation:10, padding:25, borderRadius:15, marginVertical:20}}>
          <Text style={{fontSize:25 , fontWeight:"condensedBold"}}>LiveStreams</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "antiquewhite",
    justifyContent:"center"

  }
})