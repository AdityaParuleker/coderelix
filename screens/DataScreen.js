import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import { useContext } from "react";
const DataScreen = () => {
  const { user, setUser, theme, setTheme } = useContext(AppContext);
  const [dat, setDat] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const output = await response.json();

    setDat(output);
  };
  return (
    <View style={[{ flex: 1 }, { backgroundColor: theme ? "gray" : "white" }]}>
      <ChevronRightIcon onPress={NavigationActivation.navigate("HomeScreen")} />
      <SafeAreaView>
        <ScrollView style={{ paddingTop: 20 }}>
          {dat.map((item) => {
            return (
              <View style={{ padding: 20 }}>
                <Text>Name: {item.name}</Text>
                <Text>Email Id: {item.email}</Text>
                <Text>City: {item?.address?.city}</Text>
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default DataScreen;

const styles = StyleSheet.create({});
