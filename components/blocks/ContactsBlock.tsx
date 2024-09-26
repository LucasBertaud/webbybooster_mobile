import React from 'react'
import { ContactsMock } from '@/mock/contacts_mock'
import TitlePage from '../titles/TitlePage';
import ContactCard from '../cards/ContactCard';
import { StyleSheet, View } from 'react-native';

function ContactsBlock() {

    console.log(ContactsMock);
  return (
    <>
        <TitlePage title="Mes contacts"/>
        <View style={styles.container}>
            {ContactsMock.map(contact => (
                <ContactCard key={contact.getId()} id={contact.getId()}/>
            ))}
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
});

export default ContactsBlock