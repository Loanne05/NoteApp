import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';

const HomeScreen = ({ navigation, route }) => {
    const [todolist, setTodolist] = useState([]);

    //Function to add a new todo to the list 
    {/*The Todo function receives the newList as a parameter. 
    It takes the existing todolist array and creates a new array by using the spread operator (...) 
    to spread the elements of todolist and then adds the newList item at 
    the beginning: [newList, ...todolist].*/}
    const Todo = (newList) => {
        setTodolist([newList, ...todolist]);
        {/*The new newList item is placed at the beginning of the array, 
        followed by the existing elements of the todolist array.*/}
    }

    useEffect(() => {
        // Perform the action when the todolist is rendered or updated
        console.log('Todolist rendered:', todolist);
    }, [todolist]);

    {/* pass the value of todolist and index to EditDeleteScreen */}
    const handleTodoPress = (selectedTodo, index) => {
        navigation.navigate("EditDelete", { todolist: selectedTodo, index: index });
    }

    //updates the updated and deleted to do every render 
    useEffect(() => {
        if (route.params?.updatedTodo !== undefined && route.params?.index !== undefined) {
          const { updatedTodo, index } = route.params;
          const updatedTodolist = [...todolist]; //made a copy of destructured todolist 
          updatedTodolist[index] = updatedTodo;
          console.log(updatedTodolist[index], index);
          setTodolist(updatedTodolist);
        }
        if(route.params?.deletedTodo !== undefined){
            const {deletedTodo} = route.params;
            const updateDeletedTodo= [...todolist];
            updateDeletedTodo.splice(deletedTodo, 1); // delete todo 
            setTodolist(updateDeletedTodo);
        }
      }, [route.params]);
    return (
        <View>
            <StatusBar style="auto" />
            <View>
                <TouchableOpacity style={styles.add} onPress={() => navigation.navigate("Add", { Todo })}>
                    <Text style={{ color: 'white' }}>Add to do</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                <View>
                    {/* Render each todo item */}
                    {todolist.map((todo, index) => (
                        <TouchableOpacity key={index} style={styles.todolist} onPress={() => handleTodoPress(todo, index)}>
                            <Text>
                                {index} {todo ? todo : 'No todo'}
                            </Text>
                        </TouchableOpacity>
                    ))}

                </View>
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    add: {
        backgroundColor: 'black',
        borderWidth: 2,
        borderRadius: 3,
        padding: 10,
        marginHorizontal: 60,
        alignItems: 'center',
        marginTop: 20
    },
    todolist: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 8,
        padding: 50,
        marginHorizontal: 30,
        marginTop: 30
    },
})