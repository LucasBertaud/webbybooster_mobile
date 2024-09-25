import React from 'react'
import Organization from '@/entities/organization';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ActionSheet, { ActionSheetProps, SheetManager } from 'react-native-actions-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Contact from '@/entities/contact';
import { Drawers } from '@/constants/Drawers';
import { OrganizationsMock } from '@/mock/organizations_mock';
import Ahref from '../button/Ahref';


function ContactDrawer(props: ActionSheetProps<"organization-drawer">) {
    const insets = useSafeAreaInsets();
    const payload: any = props.payload;
    if(!payload) return null;
    const contact: Contact = payload.contact;
    if(!contact) return null;

    const organization: Organization | undefined = OrganizationsMock.find((organization: any) => organization.id === contact.getOrganizationId());

    if(!organization) return null;

    const linkedin = () => {
        const link: string | undefined = contact.getLinkedin();
        if(link != undefined) {
            return (<Ahref style={Drawers.row_content} href={link}>linkedin</Ahref>);
        } else {
            return (<Text>Vide</Text>);
        }
    }

  return (
    <ActionSheet
      indicatorStyle={{
        width: 150,
      }}
      gestureEnabled
      safeAreaInsets={insets}
      drawUnderStatusBar
      containerStyle={{
        
      }}>
        <View style={Drawers.container}>
            <Text style={Drawers.h1}>{contact.getName()}</Text>
            <View style={Drawers.row}>
                <Text style={Drawers.row_key}>Centre de formation</Text>
                <Text style={Drawers.row_content}>{organization.getName()}</Text>
            </View>
            <View style={Drawers.row}>
                <Text style={Drawers.row_key}>Intermédiaire</Text>
                <Text style={Drawers.row_content}>{contact.getIntermediate() ?? "Vide"}</Text>
            </View>
            <View style={Drawers.row}>
                <Text style={Drawers.row_key}>Rôle</Text>
                <Text style={Drawers.row_content}>{contact.getRole() ?? "Vide"}</Text>
            </View>
            <View style={Drawers.row}>
                <Text style={Drawers.row_key}>Photo</Text>
                {contact.getPhoto() != undefined ? <Image style={Drawers.image} source={{uri: contact.getPhoto()}} /> : <Text>Vide</Text>}
            </View>
            <View style={Drawers.row}>
                <Text style={Drawers.row_key}>Téléphone</Text>
                <Text style={Drawers.row_content}>{contact.getPhone() ?? "Vide"}</Text>
            </View>
            <View style={Drawers.row}>
                <Text style={Drawers.row_key}>Email</Text>
                <Text style={Drawers.row_content}>{contact.getEmail() ?? "Vide"}</Text>
            </View>
            <View style={Drawers.row}>
                <Text style={Drawers.row_key}>Linkedin</Text>
                {linkedin()}
            </View>
            <View style={Drawers.row}>
                <Text style={Drawers.row_key}>Commentaires</Text>
                <View style={Drawers.row_content}>
                    {contact.getCommentaries() != undefined ? contact.getCommentaries()?.map((comment: string, index: number) => (
                        <Text style={{ marginBottom: 4, flexWrap: 'wrap' }} key={index}>{index+1}. {comment}</Text>
                    )) : (
                        <Text>Vide</Text>
                    )}
                </View>
            </View>
        </View>
      </ActionSheet>
  )
}

export default ContactDrawer