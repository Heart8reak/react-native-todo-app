import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Header from './components/header'
import Todo from './components/todoItem'
import AddTodo from './components/addTodo'
// import SandBox from './components/sandBox'

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'},
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {

    if(text.length > 3) {
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ]
      })
    } else {
      Alert.alert('OOPs!', 'Todos must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('Alert Closed')}
      ])
    }
  }


  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
      console.log('Dismissed keyboard')
    }}>
          <View style={styles.container}>
      {/* Header  */}
      <Header />
      <View style={styles.content}>
        {/* Form  */}
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({ item }) => (
              <Todo item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
        {/* <SandBox /> */}
      </View>
    </View>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    flex:1,
    marginTop: 20,
  }
});
