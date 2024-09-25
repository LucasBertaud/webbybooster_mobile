export default class Organization {
    private id: number;
    private name: string;
    private logo?: string;
    private phone?: string;
    private address?: string;
    private intermediate?: number;
    private contacts?: number[];
    private documents?: string[];
    private prices?: number[];
    private formations?: number[];
    private interventions?: number[];

    constructor(id: number, name: string, logo?: string, phone?: string, address?: string, intermediate?: number, contacts?: number[], documents?: string[], prices?: number[], formations?: number[], interventions?: number[]) {
        this.id = id;
        this.name = name;
        this.logo = logo;
        this.phone = phone;
        this.address = address;
        this.intermediate = intermediate;
        this.contacts = contacts;
        this.documents = documents;
        this.prices = prices;
        this.formations = formations;
        this.interventions = interventions;
    }
    
    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getLogo(): string | undefined {
        return this.logo;
    }

    public getPhone(): string | undefined {
        return this.phone;
    }

    public getAddress(): string | undefined {
        return this.address;
    }

    public getIntermediate(): number | undefined {
        return this.intermediate;
    }

    public getContacts(): number[] | undefined {
        return this.contacts;
    }

    public getDocuments(): string[] | undefined {
        return this.documents;
    }

    public getPrices(): number[] | undefined {
        return this.prices;
    }

    public getFormations(): number[] | undefined {
        return this.formations;
    }

    public getInterventions(): number[] | undefined {
        return this.interventions;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setLogo(logo: string): void {
        this.logo = logo;
    }

    public setPhone(phone: string): void {
        this.phone = phone;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public setIntermediate(intermediate: number): void {
        this.intermediate = intermediate;
    }

    public setContacts(contacts: number[]): void {
        this.contacts = contacts;
    }

    public setDocuments(documents?: string[]): void {
        this.documents = documents;
    }

    public setPrices(prices?: number[]): void {
        this.prices = prices;
    }

    public setFormations(formations?: number[]): void {
        this.formations = formations;
    }

    public setInterventions(interventions?: number[]): void {
        this.interventions = interventions;
    }
}