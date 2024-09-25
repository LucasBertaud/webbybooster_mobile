import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity } from "react-native";
import TitlePage from "@/components/Titles/TitlePage";
import Shortcuts from "@/components/Shortcuts";
import Timer from "@/components/Timer";
import { SheetManager } from 'react-native-actions-sheet';
import SessionDrawer from "@/components/drawers/SessionDrawer";
import sessions from "@/mock/session_mock";
import Session from "@/entities/session";

const renderItem = ({ item }: { item: Session }) => (
    <View style={styles.row}>
        <Text style={styles.cell}>{item.getSessionName()}
            <TouchableOpacity
                style={styles.button}
                onPress={() => SheetManager.show("session-drawer", { payload: { session: item } })}
            >
                <Text style={styles.buttonText}>Détails</Text>
            </TouchableOpacity>
        </Text>
        <Text style={styles.cell}>{item.getDate()}</Text>
        <Text style={styles.cell}>{item.getTotalHours()}</Text>
        <Text style={styles.cell}>{item.getNumberOfStudents()}</Text>
        <Text style={styles.cell}>{item.getTotalGross()}</Text>
        <Text style={styles.cell}>{item.getTotalNet()}</Text>
    </View>
);

export default function AssessmentPage() {
    return (
        <>
            <TitlePage title="Bilan pédagogique et financier" />
            <Timer />
            <Shortcuts />
            <View style={styles.container}>
                <ScrollView horizontal>
                    <View>
                        <View style={styles.header}>
                            <Text style={styles.headerCell}>Nom Session</Text>
                            <Text style={styles.headerCell}>Date</Text>
                            <Text style={styles.headerCell}>Total Heures</Text>
                            <Text style={styles.headerCell}>Nombre d'Étudiants</Text>
                            <Text style={styles.headerCell}>Total Brut</Text>
                            <Text style={styles.headerCell}>Total Net</Text>
                        </View>
                        <FlatList
                            data={sessions}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.getId()}
                            contentContainerStyle={styles.listContent}
                        />
                    </View>
                </ScrollView>
                <SessionDrawer />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    header: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#000",
        paddingBottom: 5,
        marginBottom: 10,
    },
    headerCell: {
        width: 150,
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    row: {
        flexDirection: "row",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        justifyContent: "center",
        alignItems: "center",
    },
    cell: {
        width: 150,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#4a3228",
        padding: 5,
        borderRadius: 5,
        marginLeft: 10,
    },
    buttonText: {
        color: "#ba856f",
        textAlign: "center",
    },
    listContent: {
        paddingBottom: 20,
    },
});