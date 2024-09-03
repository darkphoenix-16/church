import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';

export function More() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image source={{ uri: 'https://xsgames.co/randomusers/assets/images/favicon.png' }}
          style={{ width: 180, height: 180, alignSelf: "center" }} />
        <Text style={{ fontWeight: "bold", fontSize: 25, textAlign: "center" }}>Jane Doe</Text>
        <Text style={{ textAlign: "center", fontSize: 20, marginBottom: 20 }}>Janedoe@gmail.com</Text>

        <View style={{ margin: 40, borderRadius: 10, padding: 20, elevation: 5 ,}}>
          <Text style={{ fontWeight: "bold", fontSize: 25, }}>Options</Text>

          <View style={{ flexDirection: "row", gap: 30, padding: 20 }}>
            <Ionicons name="notifications" size={24} color="black" />
            <Text style={{ fontSize: 20 }}>Notifications</Text>
          </View>

          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Support</Text>

          <View style={{ flexDirection: "row", gap: 30, padding: 20 }}>
          <MaterialIcons name="contact-support" size={24} color="black" />
            <Text style={{ fontSize: 20 }}>FAQS</Text>
          </View>

          <View style={{ flexDirection: "row", gap: 30, padding: 20 }}>
          <MaterialIcons name="support-agent" size={24} color="black" />
            <Text style={{ fontSize: 20 }}>Help</Text>
          </View>

          <Text style={{fontSize:20, textAlign:"center", marginVertical: 10, color:"red"}}>Log out</Text>

        </View>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:"antiquewhite"
  }
})