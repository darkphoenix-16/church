import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Button, Switch } from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from "yup"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/settings';
import { AppContext } from '../Components/Global';

const validation = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(20).required()
})

export function Login({ navigation }) {
  // const { setUserUID, } = useContext(AppContext);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(value) => {
            signInWithEmailAndPassword(auth, value.email, value.password)
              .then((data) => {
                // console.log(data.user.uid);
                setUserUID(data.user.uid)
                navigation.replace("Home");
              })
              .catch(e => {
               
                console.log(e)
              })
          }}
          validationSchema={validation}
        >
          {(prop) => {
            return (
              <View style={{ flex: 1, justifyContent: "center", }}>
                <Text style={{ fontSize: 35, textAlign: "center", }}>LogIn</Text>
                <View style={styles.label}>
                  <Text style={{  }}>Email:</Text>
                  <TextInput
                    placeholderTextColor={"gray"}
                    style={styles.input}
                    autoCapitalize='none'
                    onChangeText={prop.handleChange("email")}
                    onBlur={prop.handleBlur("email")}
                    value={prop.values.email}
                  />
                  <Text style={{ fontSize: 13, color: "red", }}>{prop.touched.email && prop.errors.email}</Text>
                </View>
                <View>
                  <Text style={{ }}>Password :</Text>
                  <TextInput
                    placeholderTextColor={"gray"}
                    style={styles.input}
                    autoCapitalize='none'
                    autoComplete='off'
                    autoCorrect={false}
                    secureTextEntry={true}
                    keyboardType='default'
                    onChangeText={prop.handleChange("password")}
                    onBlur={prop.handleBlur("password")}
                    value={prop.values.password}
                  />
                  <Text style={{ fontSize: 13, color: "red", }}>{prop.touched.password && prop.errors.password}</Text>
                </View>
                <Button mode='text' style={{ fontSize: 12, alignSelf: "flex-end" }} onPress={() => { navigation.navigate("Forgot") }}>Forgot Password?</Button>

                <Button mode='contained-tonal' style={{ marginVertical: 15 }} onPress={prop.handleSubmit} buttonColor={ "purple"} > Log In</Button>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                  <Text style={{ fontSize: 15, marginVertical: 30,  }}>Im a new user</Text>
                  <Button mode='text' onPress={() => { navigation.navigate("Signup") }}>Sign Up</Button>
                </View>
              </View>
            )
          }}

        </Formik>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#ffffff00",
  },
  input: {
    borderColor: "purple",
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 30,
    fontSize: 15,
    marginTop: 10

  },
  label: {
    marginBottom: 7
  }
})