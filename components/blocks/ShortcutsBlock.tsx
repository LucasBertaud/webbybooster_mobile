import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Linking } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import TitlePage from "@/components/titles/TitlePage";
import TodoListInput from "../inputs/TodoListInput";
import Add from "../buttons/Add";

const ShortcutsBlock = () => {
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
        <>
            <TitlePage title="Raccourcis" />
            <View style={styles.container}>
                {shortcuts.map((shortcut, index) => (
                    <TouchableOpacity key={index} onPress={() => openLink(shortcut)}>
                        <Text style={styles.shortcutText}>{shortcut}</Text>
                    </TouchableOpacity>
                ))}
                {showInput && (
                    <TodoListInput
                        value={newLink}
                        setValue={setNewLink}
                        action={addShortcut}
                        placeholder="Entrer un lien"
                    />
                )}
                <Add action={() => setShowInput(true)} />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        margin: 10,
    },
    shortcutText: {
        marginTop: 10,
        marginLeft: 14,
        fontSize: 18,
        color: "#ba856f",
        textDecorationLine: "underline",
    },
});

export default ShortcutsBlock;