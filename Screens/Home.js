import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


export function Home() {
    return (

        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
            <View style={styles.container}>
                <View style={{}}>
                    <Text style={{ fontSize: 30, fontWeight: "condensedBold", marginVertical: 20, paddingHorizontal: 10 }}>Welcome User</Text>
                    <TextInput style={{ borderWidth: 1, borderRadius: 10, padding: 10, marginVertical: 20, fontSize: 24}} placeholder='Search Events' />
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-around", padding: 10, backgroundColor: "white" }}>
                    <View>
                        <Image source={{ uri: "https://i.pinimg.com/736x/23/a2/f3/23a2f39014f3db9981ba006a536deb3b.jpg" }} style={{ width: 190, height: 160, borderRadius: 10, opacity:0.6}} />
                        <Text style={{ padding: 7, position: "absolute", top: 20, left: 55, color: "black", fontSize: 20, fontWeight: "bold" }}>Sermons</Text>
                    </View>
                    <View>
                        <Image source={{ uri: "https://i.pinimg.com/736x/23/a2/f3/23a2f39014f3db9981ba006a536deb3b.jpg" }} style={{ width: 190, height: 160, borderRadius: 10, opacity:0.6 }} />
                        <Text style={{ padding: 7, position: "absolute", top: 20, left: 35, color: "black", fontSize: 20, fontWeight: "bold" }}>Prayer request</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", padding: 10, backgroundColor: "white" }}>
                    <View>
                        <Image source={{ uri: "https://i.pinimg.com/736x/23/a2/f3/23a2f39014f3db9981ba006a536deb3b.jpg" }} style={{ width: 190, height: 160, borderRadius: 10, opacity:0.6 }} />
                        <Text style={{ padding: 7, position: "absolute", top: 20, left: 55, color: "black", fontSize: 20, fontWeight: "bold" }}>Sermons</Text>
                    </View>
                    <View>
                        <Image source={{ uri: "https://i.pinimg.com/736x/23/a2/f3/23a2f39014f3db9981ba006a536deb3b.jpg" }} style={{ width: 190, height: 160, borderRadius: 10, opacity:0.6 }} />
                        <Text style={{ padding: 7, position: "absolute", top: 20, left: 35, color: "black", fontSize: 20, fontWeight: "bold" }}>Get connected</Text>
                    </View>

                </View>

                <Text style={{ fontSize: 25, paddingHorizontal: 5, fontWeight: "bold", marginVertical:10 }}>Upcoming Events</Text>

                <View>
                    <View style={{marginVertical: 10}}>
                        <Image source={{ uri: "https://t4.ftcdn.net/jpg/03/39/68/93/360_F_339689377_G6x4Hmjo9lmGUEytSBbU5cS3lEOkgU9m.jpg" }} style={{ height: 200, borderRadius: 10, opacity:0.6 }} />
                        <Text style={{ padding: 7, position: "absolute", top: 30, left: 60, color: "black", fontSize: 30, fontWeight: "bold" }}>WOMEN'S MEETING</Text>
                    </View>

                    <View style={{marginVertical: 10}}>
                        <Image source={{ uri: "https://t4.ftcdn.net/jpg/03/39/68/93/360_F_339689377_G6x4Hmjo9lmGUEytSBbU5cS3lEOkgU9m.jpg" }} style={{ height: 200, borderRadius: 10, opacity:0.6 }} />
                        <Text style={{ padding: 7, position: "absolute", top: 30, left: 60, color: "black", fontSize: 30, fontWeight: "bold" }}>BIBLE STUDY NIGHT</Text>
                    </View>
                </View>




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