import ShortcutsBlock from "@/components/blocks/ShortcutsBlock";
import TimerBlock from "@/components/blocks/TimerBlock";
import TitlePage from "@/components/titles/TitlePage";
import React from "react";

export default function ContactPage() {
    return (
        <>
            <TitlePage title="Contacts"/>
            <TimerBlock/>
            <ShortcutsBlock/>
        </>
    );
}