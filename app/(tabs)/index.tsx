import React from "react";
import Timer from "@/components/Timer";
import {Animated} from "react-native";
import {SheetProvider} from "react-native-actions-sheet";
import "@/components/drawers/sheets";
import Shortcuts from "@/components/Shortcuts";
import WhoAmI from "@/components/WhoAmI";
import TitlePage from "@/components/Titles/TitlePage";
import TaskTrackingCard from "@/components/cards/TaskTrackingCard";
import ContactCard from "@/components/cards/ContactCard";
import ScrollView = Animated.ScrollView;

const image = {uri: "https://blog.openclassrooms.com/wp-content/uploads/2018/05/OC.png"};

const YourApp = () => {
    return (
        <SheetProvider>
            <ScrollView>
                <TitlePage title="Accueil"/>
                <TaskTrackingCard id={1}></TaskTrackingCard>
                <ContactCard id={1}/>
                <Timer/>
                <Shortcuts/>
                <WhoAmI/>
            </ScrollView>
        </SheetProvider>
    );
};
export default YourApp;