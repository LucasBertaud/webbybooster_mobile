import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Linking } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import TitlePage from "@/components/Titles/TitlePage";

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

    const openLink = (link: string) => {
        Linking.openURL(link).catch((err) => console.error("Failed to open link:", err));
    };

    return (
        <View style={styles.container}>
            <TitlePage title="Raccourcis" />
            {shortcuts.map((shortcut, index) => (
                <TouchableOpacity key={index} onPress={() => openLink(shortcut)}>
                    <Text style={styles.shortcutText}>{shortcut}</Text>
                </TouchableOpacity>
            ))}
            {showInput && (
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your link"
                        placeholderTextColor="#ccc"
                        value={newLink}
                        onChangeText={setNewLink}
                    />
                    <TouchableOpacity style={styles.checkButton} onPress={addShortcut}>
                        <Icon name="checkmark" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            )}
            <TouchableOpacity style={styles.addButton} onPress={() => setShowInput(true)}>
                <Icon name="add" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        margin: 10,
    },
    addButton: {
        backgroundColor: "#4a3228",
        padding: 20,
        width: 40,
        height: 40,
        marginRight: 14,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        alignSelf: "flex-end",
    },
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
    shortcutText: {
        marginTop: 10,
        marginLeft: 14,
        fontSize: 18,
        color: "#ba856f",
        textDecorationLine: "underline",
    },
});

export default Shortcuts;