import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Linking } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function Add({action}: {action: () => void}) {
  return (
    <TouchableOpacity style={styles.addButton} onPress={action}>
        <Icon name="add" size={24} color="white" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    addButton: {
        backgroundColor: "#4a3228",
        padding: 8,
        marginRight: 14,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        alignSelf: "flex-end",
    }
});

export default Add