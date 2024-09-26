import React from "react";
import {Animated} from "react-native";
import {SheetProvider} from "react-native-actions-sheet";
import "@/components/drawers/sheets";
import TitlePage from "@/components/titles/TitlePage";
import ScrollView = Animated.ScrollView;
import TasksTrackingsBlock from "@/components/blocks/TasksTrackingsBlock";
import ShortcutsBlock from "@/components/blocks/ShortcutsBlock";
import TimerBlock from "@/components/blocks/TimerBlock";
import WhoAmIBlock from "@/components/blocks/WhoAmIBlock";

const image = {uri: "https://blog.openclassrooms.com/wp-content/uploads/2018/05/OC.png"};

const YourApp = () => {
    return (
        <SheetProvider>
            <ScrollView>
                <TitlePage title="Accueil"/>
                <TimerBlock/>
                <ShortcutsBlock/>
                <WhoAmIBlock/>
                <TasksTrackingsBlock/>
            </ScrollView>
        </SheetProvider>
    );
};
export default YourApp;