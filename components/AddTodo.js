import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const AddTodo = ({ navigation, route }) => {
    const { Todo } = route.params;
    const [input, setInput] = useState("");

    const handleSave = () => {
        // This function call is responsible for adding the input value to the todolist(HomeScreen.js).
        Todo(input);
        navigation.navigate("Home");
    }

    return (
        <View>
            <View>
                {/* Save button */}
                <TouchableOpacity style={styles.save} onPress={handleSave}>
                    <Text style={{ color: 'white' }}>
                        Save
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Todo input */}
            <View style={styles.todoinput}>
                <TextInput
                    editable
                    multiline
                    placeholder='Tasks to do ...'
                    value={input}
                    onChangeText={setInput}
                    paddingLeft={15}
                    paddingTop={10}
                />
            </View>
        </View>
    )
}

export default AddTodo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    todoinput: {
        borderBottomColor: 'black',
        borderWidth: 2,
        borderRadius: 8,
        paddingBottom: 600,
        marginHorizontal: 15,
        marginTop: 20
    },
    save: {
        backgroundColor: 'black',
        borderRadius: 3,
        padding: 10,
        marginHorizontal: 60,
        alignItems: 'center',
        marginTop: 20
    }
})