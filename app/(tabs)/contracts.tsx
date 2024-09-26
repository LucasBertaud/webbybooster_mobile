import TitlePage from "@/components/titles/TitlePage";
import MissionCard from "@/components/cards/MissionCard";

export default function ContractsPage() {
    return (
        <>
            <TitlePage title="Missions & Contrats"/>
            <MissionCard id={1}/>
            <MissionCard id={2}/>
            <MissionCard id={3}/>
        </>
    );
}