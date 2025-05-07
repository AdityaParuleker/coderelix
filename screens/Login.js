import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TextInput,
  Switch,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Bars3CenterLeftIcon } from "react-native-heroicons/outline";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { debounce } from "lodash";
import { AppContext } from "../AppContext";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import DataScreen from "./DataScreen";

const Login = () => {
  const { user, setUser, theme, setTheme } = useContext(AppContext);
  const navigation = useNavigation();
  return (
    <View style={[styles.cont, { backgroundColor: theme ? "gray" : "white" }]}>
      <StatusBar backgroundColor="green" />
      <SafeAreaView style={{ flex: 1, padding: 20 }}>
        {/* <ChevronLeftIcon /> */}
        {/* <KeyboardAwareScrollView /> */}
        <Switch value={theme} onValueChange={() => setTheme(false)} />
        {setTheme(true)}
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={styles.Log}>Login</Text>
          <TextInput
            placeholder="Enter username"
            value={user}
            onChangeText={setUser}
            style={styles.Inp}
          />
          <Button
            title="Login"
            onPress={() => navigation.navigate("DataScreen")}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  Log: {
    paddingTop: 30,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    paddingBottom: 30,
  },
  form: {
    padding: 30,
  },
  Inp: {
    justifyContent: "center",
    paddingBottom: 50,
  },
});
export default Login;
