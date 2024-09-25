import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const Shortcuts = () => {
    const [shortcuts, setShortcuts] = useState<string[]>([]);
    const [showInput, setShowInput] = useState(false);
    const [newLink, setNewLink] = useState("");

    const addShortcut = () => {
        if (newLink.trim()) {
            setShortcuts([...shortcuts, newLink]);
            setNewLink("");
            setShowInput(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>R A C C O U R C I S</Text>
            {showInput && (
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your link"
                        value={newLink}
                        onChangeText={setNewLink}
                    />
                    <TouchableOpacity onPress={addShortcut}>
                        <Icon name="checkmark" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            )}
            {shortcuts.map((shortcut, index) => (
                <View key={index}>
                    <Text style={styles.shortcutText}>{shortcut}</Text>
                </View>
            ))}
            <TouchableOpacity style={styles.addButton} onPress={() => setShowInput(true)}>
                <Icon name="add" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ba856f',
        backgroundColor: '#4a3228',
        padding: 10,
        textAlign: 'center',
        borderRadius: 5,
        fontFamily: 'Lyon-Text, Georgia, ui-serif, serif',
    },
    addButton: {
        backgroundColor: '#4a3228',
        padding: 10,
        width: 40,
        height: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        alignSelf: 'flex-end',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    input: {
        flex: 1,
        borderColor: '#ba856f',
        borderWidth: 1,
        padding: 10,
        marginRight: 10,
        borderRadius: 5,
        color: 'white',
    },
    shortcutText: {
        marginTop: 10,
        fontSize: 18,
        color: '#ba856f',
    },
});

export default Shortcuts;