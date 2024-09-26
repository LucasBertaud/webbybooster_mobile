export default class Mission {
    private id: number;
    private title: string;
    private state: number;
    private date: string;
    private school: string;

    constructor(id: number, title: string, state: number, date: string, school: string) {
        this.id = id;
        this.title = title;
        this.state = state;
        this.date = date;
        this.school = school;
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

    getSchool(): string {
        return this.school;
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

    setSchool(school: string): void {
        this.school = school;
    }
}