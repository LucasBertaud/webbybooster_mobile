export default class Session {
    private id: string;
    private sessionName: string;
    private mission: string;
    private date: string;
    private center: string;
    private course: string;
    private subject: string;
    private training: string;
    private referentId: number;
    private classroom: string;
    private rateType: string;
    private totalNet: number;
    private urssaf: number;
    private numberOfStudents: number;
    private intermediate: string;
    private schedule: string;
    private totalHours: number;
    private ratePerHour: number;
    private totalGross: number;

    constructor(
        id: string,
        sessionName: string,
        mission: string,
        date: string,
        center: string,
        course: string,
        subject: string,
        training: string,
        referentId: number,
        classroom: string,
        rateType: string,
        totalNet: number,
        urssaf: number,
        numberOfStudents: number,
        intermediate: string,
        schedule: string,
        totalHours: number,
        ratePerHour: number,
        totalGross: number
    ) {
        this.id = id;
        this.sessionName = sessionName;
        this.mission = mission;
        this.date = date;
        this.center = center;
        this.course = course;
        this.subject = subject;
        this.training = training;
        this.referentId = referentId;
        this.classroom = classroom;
        this.rateType = rateType;
        this.totalNet = totalNet;
        this.urssaf = urssaf;
        this.numberOfStudents = numberOfStudents;
        this.intermediate = intermediate;
        this.schedule = schedule;
        this.totalHours = totalHours;
        this.ratePerHour = ratePerHour;
        this.totalGross = totalGross;
    }

    public getId(): string {
        return this.id;
    }

    public getSessionName(): string {
        return this.sessionName;
    }

    public getMission(): string {
        return this.mission;
    }

    public getDate(): string {
        return this.date;
    }

    public getCenter(): string {
        return this.center;
    }

    public getCourse(): string {
        return this.course;
    }

    public getSubject(): string {
        return this.subject;
    }

    public getTraining(): string {
        return this.training;
    }

    public getReferentId(): number {
        return this.referentId;
    }

    public getClassroom(): string {
        return this.classroom;
    }

    public getRateType(): string {
        return this.rateType;
    }

    public getTotalNet(): number {
        return this.totalNet;
    }

    public getUrssaf(): number {
        return this.urssaf;
    }

    public getNumberOfStudents(): number {
        return this.numberOfStudents;
    }

    public getIntermediate(): string {
        return this.intermediate;
    }

    public getSchedule(): string {
        return this.schedule;
    }

    public getTotalHours(): number {
        return this.totalHours;
    }

    public getRatePerHour(): number {
        return this.ratePerHour;
    }

    public getTotalGross(): number {
        return this.totalGross;
    }
}