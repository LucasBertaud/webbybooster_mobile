import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity } from "react-native";
import TitlePage from "@/components/titles/TitlePage";
import { SheetManager } from 'react-native-actions-sheet';
import SessionDrawer from "@/components/drawers/SessionDrawer";
import sessions from "@/mock/session_mock";
import Session from "@/entities/session";
import TimerBlock from "@/components/blocks/TimerBlock";
import ShortcutsBlock from "@/components/blocks/ShortcutsBlock";

const renderItem = ({ item }: { item: Session }) => (
    <View style={styles.row}>
        <Text style={styles.cell}>
            {item.getSessionName()}
        </Text>
        <View style={styles.cell}>
            <TouchableOpacity
                    style={styles.button}
                    onPress={() => SheetManager.show("session-drawer", { payload: { session: item } })}
            >
                    <Text style={styles.buttonText}>Détails</Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.cell}>{item.getDate()}</Text>
        <Text style={styles.cell}>{item.getTotalHours()}</Text>
        <Text style={styles.cell}>{item.getNumberOfStudents()}</Text>
        <Text style={styles.cell}>{item.getTotalGross()}</Text>
        <Text style={styles.cell}>{item.getTotalNet()}</Text>
    </View>
);

export default function AssessmentPage() {
    return (
        <ScrollView>
            <TitlePage title="Bilan pédagogique et financier" />
            <TimerBlock />
            <ShortcutsBlock />
            <View style={styles.container}>
                <ScrollView horizontal>
                    <View>
                        <View style={styles.header}>
                            <Text style={styles.headerCell}>Nom</Text>
                            <Text style={styles.headerCell}>Session</Text>
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
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        flexDirection: "row",
        borderBottomWidth: 2,
        borderBottomColor: "#4a3228",
        paddingBottom: 10,
        marginBottom: 20,
    },
    headerCell: {
        width: 150,
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        color: "#4a3228",
    },
    row: {
        flexDirection: "row",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        backgroundColor: "#fff",
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        alignItems: "center",
    },
    cell: {
        width: 150,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        color: "#333",
        gap: 6,
    },
    button: {
        backgroundColor: "#4a3228",
        padding: 5,
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
    },
    listContent: {
        paddingBottom: 20,
    },
});