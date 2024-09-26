import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Linking } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function TodoListInput({value, setValue, action, placeholder}: {value: string, setValue: (value: string) => void, action: () => void, placeholder: string}) {
  return (
    <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#ccc"
            value={value}
            onChangeText={setValue}
        />
        <TouchableOpacity style={styles.checkButton} onPress={action}>
            <Icon name="checkmark" size={24} color="white" />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    checkButton: {
        backgroundColor: "#4a3228",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
        marginLeft: 14,
        marginRight: 14,
        backgroundColor: "#fff",
        borderRadius: 5,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    input: {
        flex: 1,
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 10,
        marginRight: 10,
        borderRadius: 5,
        color: "#333",
    },
});

export default TodoListInput