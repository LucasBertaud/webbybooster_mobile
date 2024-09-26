import TitlePage from "@/components/Titles/TitlePage";
import OrganizationCard from "@/components/cards/OrganizationCard";
import React from "react";
import Timer from "@/components/Timer";
import Shortcuts from "@/components/Shortcuts";
import {ScrollView} from "react-native";
import {SheetProvider} from "react-native-actions-sheet";

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
                    <Timer/>
                    <Shortcuts/>
                </ScrollView>
            </SheetProvider>
        </>
    );
}