import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useContext } from 'react';
import { AppContext } from '../Components/Global';


export function Home({ navigation }) {
    //  const { setUserUID, setUserInfo , userInfo } = useContext(AppContext);
    return (

        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ padding: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 30, fontWeight: "condensedBold", }}>Hello</Text>
                        <MaterialCommunityIcons name="account" size={45} color="grey" style={{ borderRadius: 100, borderWidth: 1, borderColor: "purple" }} onPress={() => { navigation.navigate("Account") }} />
                    </View>

                    <TouchableOpacity style={{ margin: 20, borderRadius: 10, padding: 20, elevation: 5, backgroundColor: "purple", opacity: 0.9 }}>
                        <Text style={{ fontWeight: "bold", color: "grey", textAlign: "center", fontSize: 25 }}>RENEWED LIKE AN EAGLE</Text>
                        <Text style={{ fontWeight: "bold", color: "grey", textAlign: "center", fontSize: 20 }}>Join us Tonight , Tuesday SEP 10</Text>
                        <Text style={{ fontWeight: "bold", color: "grey", textAlign: "LEFT", fontSize: 15, marginTop: 20 }}>REVIVAL TUESDAY</Text>
                        <Text style={{ fontWeight: "bold", color: "grey", textAlign: "left", fontSize: 12 }}>Tuesday, Sep 10 2024</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ margin: 20, borderRadius: 10, padding: 20, elevation: 5, backgroundColor: "orangered", opacity: 0.9 }}>
                        <Text style={{ fontWeight: "bold", color: "grey", textAlign: "center", fontSize: 25 }}>OVERFLOWING PRESENCE</Text>
                        <Text style={{ fontWeight: "bold", color: "grey", textAlign: "center", fontSize: 20 }}>Join us  SATURDAY at 10</Text>
                        <Text style={{ fontWeight: "bold", color: "grey", textAlign: "LEFT", fontSize: 15, marginTop: 20 }}>FILLING SATURDAY</Text>
                        <Text style={{ fontWeight: "bold", color: "grey", textAlign: "left", fontSize: 12 }}>Saturday, Sep 14 2024</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{backgroundColor:"purple", padding: 20, borderWidth:1 ,}}>
                        <Text style={{color:"white", fontSize:20}}>Give</Text>
                    </TouchableOpacity>


                </View>
            </ScrollView>
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