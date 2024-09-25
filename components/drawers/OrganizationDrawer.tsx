import Organization from '@/entities/organization';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import ActionSheet, { ActionSheetProps, SheetManager } from 'react-native-actions-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ContactsMock } from '@/mock/contact_mock';
import Contact from '@/entities/contact';
import { Drawers } from '@/constants/Drawers';

function OrganizationDrawer(props: ActionSheetProps<"organization-drawer">) {
  const insets = useSafeAreaInsets();
  const payload: any = props.payload;
  if(!payload) return null;
  const organization: Organization = payload.organization;
  if(!organization) return null;

  const contacts : Contact[] = ContactsMock.filter((contact: any) => contact.organizationId === organization.getId());

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
          <Text style={Drawers.h1}>{organization.getName()}</Text>
          <View style={Drawers.row}>
            <Text style={Drawers.row_key}>Logo</Text>
            <Image style={Drawers.image} source={{uri: organization.getLogo()}} />
          </View>
          <View style={Drawers.row}>
            <Text style={Drawers.row_key}>Téléphone</Text>
            <Text style={Drawers.row_content}>{organization.getPhone() ?? "Vide"}</Text>
          </View>
          <View style={Drawers.row}>
            <Text style={Drawers.row_key}>Adresse</Text>
            <Text style={Drawers.row_content}>{organization.getAddress() ?? "Vide"}</Text>
          </View>
          <View style={Drawers.row}>
            <Text style={Drawers.row_key}>Intermédiaire</Text>
            <Text style={Drawers.row_content}>{organization.getIntermediate() ?? "Vide"}</Text>
          </View>
          <View style={Drawers.row}>
            <Text style={Drawers.row_key}>Contacts</Text>
            <View style={[Drawers.row]}>
              {contacts.length > 0 ? contacts.map((contact: Contact) => (
                <TouchableOpacity activeOpacity={0.7} key={contact.getId()} onPress={() => {SheetManager.show("contact-drawer", {
                  payload: {
                    contact: contact
                  }
                })}}>
                  <Text style={Drawers.contact}>{contact.getName()}</Text>
                </TouchableOpacity>
              )) : <Text>Vide</Text>}
            </View>
          </View>
          <View style={Drawers.row}>
            <Text style={Drawers.row_key}>Documents</Text>
            <Text>{organization.getDocuments() ?? "Vide"}</Text>
          </View>
          <View style={Drawers.row}>
            <Text style={Drawers.row_key}>Tarifs</Text>
            <Text>{organization.getPrices() ?? "Vide"}</Text>
          </View>
          <View style={Drawers.hr}/>
          <View style={Drawers.row}>
            <Text style={Drawers.row_key}>Formations</Text>
            <Text>{organization.getFormations() ?? "Vide"}</Text>
          </View>
          <View style={Drawers.hr}/>
          <View style={Drawers.row}>
            <Text style={Drawers.row_key}>Interventions</Text>
            <Text>{organization.getInterventions() ?? "Vide"}</Text>
          </View>
        </View>
    </ActionSheet>
  );
}

export default OrganizationDrawer;
