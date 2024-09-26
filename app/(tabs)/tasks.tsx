import TasksTrackingsBlock from "@/components/blocks/TasksTrackingsBlock";
import TitlePage from "@/components/titles/TitlePage";
import { ScrollView } from "react-native";
import TimerBlock from "@/components/blocks/TimerBlock";
import ShortcutsBlock from "@/components/blocks/ShortcutsBlock";
import TodoListInput from "@/components/inputs/TodoListInput";
import IdeasAndThoughtsBlock from "@/components/blocks/IdeasAndThoughtsBlock";

export default function TasksPage() {

    return (
        <ScrollView>
            <TitlePage title="Tâches"/>
            <TimerBlock/>
            <ShortcutsBlock/>
            <TasksTrackingsBlock />
            <IdeasAndThoughtsBlock />
        </ScrollView>
    );
}