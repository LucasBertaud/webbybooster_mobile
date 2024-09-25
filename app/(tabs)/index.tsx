import TaskTracking from "@/components/cards/TaskTrackingCard";
import React from "react";
import Timer from "@/components/Timer";
import {Animated} from "react-native";
import ContactCard from "@/components/cards/ContactCard";
import {SheetProvider} from "react-native-actions-sheet";
import "@/components/drawers/sheets";
import OrganizationCard from "@/components/cards/OrganizationCard";
import Shortcuts from "@/components/Shortcuts";
import WhoAmI from "@/components/WhoAmI";
import TitlePage from "@/components/Titles/TitlePage";
import ScrollView = Animated.ScrollView;

const image = {uri: "https://blog.openclassrooms.com/wp-content/uploads/2018/05/OC.png"};

const YourApp = () => {
    return (
        <SheetProvider>
            <ScrollView>
                <TitlePage title="Accueil"/>
                <OrganizationCard id={1}></OrganizationCard>
                <OrganizationCard id={2}></OrganizationCard>
                <TaskTracking date="20 février 2024"
                              title="Corriger examens Wordpress"
                              importanceLevel={2}></TaskTracking>
                <ContactCard imageSrc="https://www.ludis-inc.com/cdn/shop/articles/belle-femme.jpg?v=1644856829"
                             title="Marie Caron"/>
                <Timer/>
                <WhoAmI/>
                <Shortcuts/>
            </ScrollView>
        </SheetProvider>
    );
};
export default YourApp;