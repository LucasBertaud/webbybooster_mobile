export default class TaskTracking {
    private id: number;
    private title: string;
    private state: number;
    private date: string;
    private important: number;
    private mission?: number;

    constructor(id: number, title: string, state: number, date: string, important: number, mission?: number) {
        this.id = id;
        this.title = title;
        this.state = state;
        this.date = date;
        this.important = important;
        this.mission = mission;
    }

    getId(): number {
        return this.id;
    }
    
    getTitle(): string {
        return this.title;
    }

    getState(): number {
        return this.state;
    }

    getDate(): string {
        return this.date;
    }

    getImportant(): number {
        return this.important;
    }

    getMission(): number | undefined {
        return this.mission;
    }

    setId(id: number): void {
        this.id = id;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    setState(state: number): void {
        this.state = state;
    }

    setDate(date: string): void {
        this.date = date;
    }

    setImportant(important: number): void {
        this.important = important;
    }

    setMission(mission: number): void {
        this.mission = mission;
    }
}