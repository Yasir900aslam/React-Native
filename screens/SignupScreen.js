import React, { useState } from "react";
import { View } from "react-native";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import firebase from "../Firebase/Firebase";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signUp = async () => {
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      navigation.navigate("Home");
    } catch (err) {
      setError(err.message);
    }
  };

  const signIn = async () => {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <Input label="Email" value={email} onChangeText={setEmail} />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
      <View>
        <Button style={styles.button} title="SignUp" onPress={() => signUp()} />
        <Button title="SignIn" onPress={() => signIn()} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
  },
});

export default SignupScreen;
