import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


export function Home() {
    return (

        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <View style={{}}>
                <Text style={{fontSize: 30, fontWeight:"bold", marginVertical:20}}>Welcome User</Text>
                <TextInput style={{borderWidth: 1, borderRadius: 10, padding: 10}}/>
                </View>
            </View>

            <View>
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: "white",
    }
})