// App.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { key: Math.random().toString(), task }]);
      setTask('');
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((item) => item.key !== taskId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do App</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={task}
          onChangeText={setTask}
          placeholder="Enter a task"
          placeholderTextColor="#B0B0B0"
        />
        <TouchableOpacity style={styles.button} onPress={addTask}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.task}</Text>
            <TouchableOpacity onPress={() => deleteTask(item.key)} style={styles.deleteButton}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#343a40',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ced4da',
    paddingLeft: 15,
    fontSize: 16,
    backgroundColor: '#ffffff',
    color: '#495057',
  },
  button: {
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginLeft: 10,
    width: 70,
    height: 50,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  taskItem: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,  // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  taskText: {
    fontSize: 18,
    color: '#495057',
    flex: 1,
  },
  deleteButton: {
    backgroundColor: '#f03e3e',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  deleteText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
