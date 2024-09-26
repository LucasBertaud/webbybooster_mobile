import TasksTrackingsBlock from "@/components/blocks/TasksTrackingsBlock";
import TitlePage from "@/components/titles/TitlePage";
import { ScrollView } from "react-native";
import TimerBlock from "@/components/blocks/TimerBlock";
import ShortcutsBlock from "@/components/blocks/ShortcutsBlock";

export default function TasksPage() {

    return (
        <ScrollView>
            <TitlePage title="Tâches"/>
            <TimerBlock/>
            <ShortcutsBlock/>
            <TasksTrackingsBlock />
            <TitlePage title="Idées et pensées"/>
        </ScrollView>
    );
}