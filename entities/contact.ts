export default class Contact {
    private id: number;
    private name: string;
    private organizationId: number;
    private intermediate?: number;
    private role?: string;
    private photo?: string;
    private phone?: string;
    private email?: string;
    private linkedin?: string;
    private commentaries?: string[];

    constructor(id: number, name: string, organizationId: number, intermediate?: number, role?: string, photo?: string, phone?: string, email?: string, linkedin?: string, commentaries?: string[]) {
        this.id = id;
        this.name = name;
        this.organizationId = organizationId;
        this.intermediate = intermediate;
        this.role = role;
        this.photo = photo;
        this.phone = phone;
        this.email = email;
        this.linkedin = linkedin;
        this.commentaries = commentaries;
    }
    
    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getOrganizationId(): number {
        return this.organizationId;
    }

    public getIntermediate(): number | undefined {
        return this.intermediate;
    }

    public getRole(): string | undefined {
        return this.role;
    }

    public getPhoto(): string | undefined {
        return this.photo;
    }

    public getPhone(): string | undefined {
        return this.phone;
    }

    public getEmail(): string | undefined {
        return this.email;
    }

    public getLinkedin(): string | undefined {
        return this.linkedin;
    }

    public getCommentaries(): string[] | undefined {
        return this.commentaries;
    }

    public setIntermediate(intermediate: number) {
        this.intermediate = intermediate;
    }

    public setRole(role: string) {
        this.role = role;
    }

    public setPhoto(photo: string) {
        this.photo = photo;
    }

    public setPhone(phone: string) {
        this.phone = phone;
    }

    public setEmail(email: string) {
        this.email = email;
    }

    public setLinkedin(linkedin: string) {
        this.linkedin = linkedin;
    }

    public setCommentaries(commentaries: string[]) {
        this.commentaries = commentaries;
    }

    public addCommentary(commentary: string) {
        this.commentaries?.push(commentary);
    }

    public removeCommentary(index: number) {
        this.commentaries?.splice(index, 1);
    }

    public updateCommentary(index: number, commentary: string) {
        this.commentaries?.splice(index, 1, commentary);
    }
}