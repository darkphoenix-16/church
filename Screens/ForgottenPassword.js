import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Button, } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Formik } from 'formik';
import * as yup from "yup"
import { sendPasswordResetEmail, } from 'firebase/auth';
import { auth } from '../Firebase/settings';

const validation = yup.object({
  email: yup.string().email().required(),
})


export function ForgottenPassword({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Formik
          initialValues={{ email: "" }}
          onSubmit={(value) => {
            sendPasswordResetEmail(auth, value.email)
              .then((user) => {
                console.log(user);
              })
              .catch(e => console.log(e))
          }}
          validationSchema={validation}
        >
          {(prop) => {
            return (
              <View style={{ flex: 1, justifyContent: "center", }}>
                <Text style={{ fontSize: 35, textAlign: "center", }}>Forgot Password</Text>
                <View style={styles.label}>
                  <Text style={{ }}>Email</Text>
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

                <Button mode='contained-tonal' style={{ marginVertical: 15 }} onPress={prop.handleSubmit} buttonColor={"purple" + 30} >Send mail</Button>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                  <Text style={{ fontSize: 15, marginVertical: 30, }}>I remember my password</Text>
                  <Button mode='text' onPress={() => { navigation.goBack() }}>Log In</Button>
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
    padding: 20,
    backgroundColor: "#ffffff00",
  },
  input: {
    borderColor: "purple",
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 30,
    fontSize: 15,
  },
  label: {
    marginBottom: 15
  }

})