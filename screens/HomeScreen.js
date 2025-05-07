import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

import TodoTask from "./ToDoTask";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const [task, setTask] = useState([
    { id: 1, text: "Work", completed: true },
    { id: 2, text: "Exercise", completed: false },
    { id: 3, text: "Travel", completed: true },
  ]);
  const [text, setText] = useState("");

  function addTask() {
    const newTask = { id: Date.now(), text, completed: false };
    setTask([...task, newTask]);
    setText("");
  }

  function deleteTask(id) {
    setTask(task.filter((task) => task.id !== id));
  }
  // Function to Toggle Task Completion
  function toggleCompleted(id) {
    setTask(
      task.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <View>
      <SafeAreaView>
        {task.map((task) => (
          <TodoTask
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))}

        <TextInput value={text} onChangeText={setText} placeholder="New Task" />
        <Button title="Add" onPress={addTask} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({});
export default HomeScreen;
