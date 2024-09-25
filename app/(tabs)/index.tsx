import TaskTracking from "@/components/cards/TaskTrackingCard";
import React from "react";
import Timer from "@/components/Timer";
import {Animated} from "react-native";
import ScrollView = Animated.ScrollView;
import ContactCard from "@/components/cards/ContactCard";
import { SheetProvider } from "react-native-actions-sheet";
import "@/components/drawers/sheets";
import OrganizationCard from "@/components/cards/OrganizationCard";

const YourApp = () => {
    return (
        <SheetProvider>
            <ScrollView>
                <OrganizationCard id={1}></OrganizationCard>
                <OrganizationCard id={2}></OrganizationCard>
                <TaskTracking date="20 février 2024" title="Corriger examens Wordpress" importanceLevel={2}></TaskTracking>
                <ContactCard imageSrc="https://www.ludis-inc.com/cdn/shop/articles/belle-femme.jpg?v=1644856829" title="Marie Caron" />
                <Timer/>
            </ScrollView>
        </SheetProvider>
    );
};
export default YourApp;