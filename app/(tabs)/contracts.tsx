import TitlePage from "@/components/titles/TitlePage";
import MissionCard from "@/components/cards/MissionCard";
import AccordionItem from "@/components/accordions/AccordionItem";
import {ScrollView, View} from "react-native";
import ShortcutsBlock from "@/components/blocks/ShortcutsBlock";
import TimerBlock from "@/components/blocks/TimerBlock";
import React from "react";

export default function ContractsPage() {
    return (
        <>
            <ScrollView>
                <TitlePage title="Missions & Contrats"/>
                <TimerBlock />
                <ShortcutsBlock/>
                <View style={{marginTop: 32}}>
                    <AccordionItem title="Pas commencé"
                                   bgColor="rgb(40, 69, 108)">
                        <MissionCard id={1}/>
                    </AccordionItem>
                    <AccordionItem title="En cours"
                                   bgColor="rgb(131, 94, 51)">
                        <MissionCard id={2}/>
                    </AccordionItem>
                    <AccordionItem title="Documents à envoyer"
                                   bgColor="rgb(133, 76, 29)">
                        <MissionCard id={3}/>
                    </AccordionItem>
                    <AccordionItem title="Terminé"
                                   bgColor="rgb(43, 89, 63)">
                        <MissionCard id={4}/>
                    </AccordionItem>
                </View>
            </ScrollView>
        </>
    );
}