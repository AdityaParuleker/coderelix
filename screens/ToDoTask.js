import React from "react";
import { View, Text, Button } from "react-native";
import Checkbox from "@react-native-community/checkbox";
import CheckBox from "@react-native-community/checkbox";
export default function TodoTask({ task, deleteTask, toggleCompleted }) {
  return (
    <View>
      <CheckBox
        value={task.completed}
        onValueChange={() => toggleCompleted(task.id)}
      />
      <Text
        style={{ textDecorationLine: task.completed ? "line-through" : "none" }}
      >
        {task.text}
      </Text>
      <Button title="X" onPress={() => deleteTask(task.id)} />
    </View>
  );
}
