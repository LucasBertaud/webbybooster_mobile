import TitlePage from "@/components/titles/TitlePage";
import OrganizationCard from "@/components/cards/OrganizationCard";
import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { SheetProvider } from "react-native-actions-sheet";
import TimerBlock from "@/components/blocks/TimerBlock";
import ShortcutsBlock from "@/components/blocks/ShortcutsBlock";
import { OrganizationsMock } from "@/mock/organizations_mock";

export default function OrganizationPage() {
    return (
        <>
            <SheetProvider>
                <ScrollView style={{ marginBottom: 12 }}>
                    <TitlePage title="Organisme de formations" />
                    <TimerBlock />
                    <ShortcutsBlock />
                    <TitlePage title="Organismes" />
                    <View style={styles.container}>
                        {OrganizationsMock.map((organization, index) => (
                            <OrganizationCard key={index} id={organization.getId()} />
                        ))}
                    </View>
            </ScrollView>
        </SheetProvider >
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 14,
        marginTop: 20,
    },
});