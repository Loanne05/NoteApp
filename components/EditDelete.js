import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'

const EditDelete = ({ navigation, route }) => {
    const { todolist, index } = route.params; //access from the HomeScreen (function handleTodoPress)
    const [editinput, setEditInput] = useState("");

    useEffect(() => {
        setEditInput(todolist); // Set the initial value of editinput to todolist
    }, [todolist]);

    {/*passing the updatedTodo and index values as parameters to HomeScreen*/}
    const handleSaveEdit = () => {
        navigation.navigate("Home", {updatedTodo: editinput, index: index});
    }

    return (
        <View>
            {/* <Text>EditDelete</Text> */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity
                    style={styles.save}
                    onPress={handleSaveEdit}
                >
                    <Text style={{ color: 'white' }}>
                        Save
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.delete}>
                    <Text>
                        Delete
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.todoinput}>
                <TextInput
                    editable
                    multiline
                    value={editinput}
                    onChangeText={setEditInput}
                    paddingLeft={10}
                />
            </View>
        </View>
    )
}

export default EditDelete

const styles = StyleSheet.create({
    save: {
        backgroundColor: 'black',
        borderRadius: 3,
        padding: 10,
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 50
    },
    delete: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 3,
        padding: 10,
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 45
    },
    todoinput: {
        borderBottomColor: 'black',
        borderWidth: 2,
        paddingBottom: 600,
        marginHorizontal: 15,
        marginTop: 20
    },
})