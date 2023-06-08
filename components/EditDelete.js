import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React from 'react'

const EditDelete = ({navigation, route}) => {
    const { todolist } = route.params;
    return (
        <View>
            {/* <Text>EditDelete</Text> */}
            <View style={{ flexDirection: 'row', justifyContent:'space-around' }}>
                <TouchableOpacity style={styles.save}>
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
                    value={todolist}
                    
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