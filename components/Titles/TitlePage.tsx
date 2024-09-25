import {StyleSheet, Text} from "react-native";
import React from "react";

export default function TitlePage({title}: { title: string }) {
    const upperTitle = title.toUpperCase();

    return (
        <Text style={styles.title}>{upperTitle}</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ba856f",
        backgroundColor: "#4a3228",
        padding: 12,
        marginTop: 15,
        marginRight: 12,
        marginLeft: 12,
        textAlign: "center",
        fontFamily: "Lyon-Text, Georgia, ui-serif, serif",
    },
});
