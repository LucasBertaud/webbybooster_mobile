import TitlePage from "@/components/titles/TitlePage";
import OrganizationCard from "@/components/cards/OrganizationCard";
import React from "react";
import {ScrollView} from "react-native";
import {SheetProvider} from "react-native-actions-sheet";
import TimerBlock from "@/components/blocks/TimerBlock";
import ShortcutsBlock from "@/components/blocks/ShortcutsBlock";

export default function OrganizationPage() {
    return (
        <>
            <SheetProvider>
                <ScrollView style={{marginBottom: 12}}>
                    <TitlePage title="Organisme de formations"/>
                    <OrganizationCard id={1}></OrganizationCard>
                    <OrganizationCard id={2}></OrganizationCard>
                    <OrganizationCard id={3}></OrganizationCard>
                    <OrganizationCard id={4}></OrganizationCard>
                    <OrganizationCard id={5}></OrganizationCard>
                    <OrganizationCard id={6}></OrganizationCard>
                    <TimerBlock/>
                    <ShortcutsBlock/>
                </ScrollView>
            </SheetProvider>
        </>
    );
}