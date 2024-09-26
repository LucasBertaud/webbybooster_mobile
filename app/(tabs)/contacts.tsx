import ContactsBlock from "@/components/blocks/ContactsBlock";
import ShortcutsBlock from "@/components/blocks/ShortcutsBlock";
import TimerBlock from "@/components/blocks/TimerBlock";
import TitlePage from "@/components/titles/TitlePage";
import React from "react";
import { ScrollView } from "react-native";

export default function ContactPage() {
    return (
        <ScrollView>
            <TitlePage title="Contacts"/>
            <TimerBlock/>
            <ShortcutsBlock/>
            <ContactsBlock/>
        </ScrollView>
    );
}