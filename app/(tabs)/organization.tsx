import TitlePage from "@/components/titles/TitlePage";
import OrganizationCard from "@/components/cards/OrganizationCard";
import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { SheetProvider } from "react-native-actions-sheet";
import TimerBlock from "@/components/blocks/TimerBlock";
import ShortcutsBlock from "@/components/blocks/ShortcutsBlock";

export default function OrganizationPage() {
    return (
        <>
            <SheetProvider>
                <ScrollView style={{ marginBottom: 12 }}>
                    <TitlePage title="Organisme de formations" />
                    <TimerBlock />
                    <ShortcutsBlock />
                    <View style={styles.container}>
                    <OrganizationCard id={1}></OrganizationCard>
                    <OrganizationCard id={2}></OrganizationCard>
                    <OrganizationCard id={3}></OrganizationCard>
                    <OrganizationCard id={4}></OrganizationCard>
                    <OrganizationCard id={5}></OrganizationCard>
                    <OrganizationCard id={6}></OrganizationCard>
                </View>
            </ScrollView>
        </SheetProvider >
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 14,
        marginRight: 14,
    },
});