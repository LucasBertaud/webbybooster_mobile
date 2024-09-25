import React from "react";
import Timer from "@/components/Timer";
import {Animated} from "react-native";
import {SheetProvider} from "react-native-actions-sheet";
import "@/components/drawers/sheets";
import OrganizationCard from "@/components/cards/OrganizationCard";
import Shortcuts from "@/components/Shortcuts";
import WhoAmI from "@/components/WhoAmI";
import TitlePage from "@/components/Titles/TitlePage";
import ScrollView = Animated.ScrollView;
import TaskTrackingCard from "@/components/cards/TaskTrackingCard";
import ContactCard from "@/components/cards/ContactCard";

const image = {uri: "https://blog.openclassrooms.com/wp-content/uploads/2018/05/OC.png"};

const YourApp = () => {
    return (
        <SheetProvider>
            <ScrollView>
                <TitlePage title="Accueil"/>
                <OrganizationCard id={1}></OrganizationCard>
                <OrganizationCard id={2}></OrganizationCard>
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