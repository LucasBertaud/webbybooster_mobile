import Contact from "@/entities/contact";

export const ContactsMock : Array<Contact> = [
    new Contact(1, "Marie Caron", 1, undefined, "Ingénieure pédagogique", "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "06 12 34 56 78", "marie@example.com", "https://www.linkedin.com/in/marie-caron-9970b514a/", ["Marie est une personne très sympathique et très professionnelle.", "Marie est très courageuse !", "marie"]),
    new Contact(3, "John Doe", 1),
    new Contact(2, "Julien Dupont", 2),
];