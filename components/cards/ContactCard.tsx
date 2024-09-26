import React from 'react'
import {Image, StyleSheet, Text} from "react-native";
import Card from "./Card";
import Contact from '@/entities/contact';
import { ContactsMock } from '@/mock/contacts_mock';
import { SheetManager } from 'react-native-actions-sheet';

function ContactCard({id}: {id: number}) {
    const contact : Contact | undefined = ContactsMock.find((contact: any) => contact.id === id);

    if (!contact) return null;

    const image = {uri: contact.getPhoto() ?? "https://thumb.ac-illust.com/b1/b170870007dfa419295d949814474ab2_t.jpeg"};
  return (
    <Card action={() => SheetManager.show("contact-drawer", 
        { payload: {
          contact: contact
        }
      })}>
        <Card.Body>
            <Image style={styles.logo} source={image}></Image>
        </Card.Body>
        <Card.Footer>
            <Text style={styles.footer}>{contact.getName()}</Text>
        </Card.Footer>
    </Card>
  )
}

const styles = StyleSheet.create({
    footer: {
      borderTopWidth: 0.5,
      borderTopColor: 'lightgrey',
      fontSize: 16,
      fontWeight: 'medium',
      paddingLeft: 16,
      paddingVertical: 8,
      alignContent: "center",
    },
    logo: {
      height: 150,
      width: "100%",
      resizeMode: "cover",
    }
  });

export default ContactCard