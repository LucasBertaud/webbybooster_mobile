import TitlePage from "@/components/titles/TitlePage";
import ContactCard from "@/components/cards/ContactCard";
import React from "react";

export default function ContactPage() {
    return (
        <>
            <TitlePage title="Contacts"/>
            <ContactCard imageSrc="https://www.ludis-inc.com/cdn/shop/articles/belle-femme.jpg?v=1644856829"
                         title="Marie Caron"/>
        </>
    );
}