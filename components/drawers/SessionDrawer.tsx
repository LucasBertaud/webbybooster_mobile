import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ActionSheet, { ActionSheetProps, SheetManager } from 'react-native-actions-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Drawers } from '@/constants/Drawers';
import Contact from '@/entities/contact';
import { ContactsMock } from '@/mock/contact_mock';

type Session = {
  id: string;
  sessionName: string;
  mission: string;
  date: string;
  center: string;
  course: string;
  subject: string;
  training: string;
  referentId: number; // Updated to use referentId
  classroom: string;
  rateType: string;
  totalNet: number;
  urssaf: number;
  numberOfStudents: number;
  intermediate: string;
  schedule: string;
  totalHours: number;
  ratePerHour: number;
  totalGross: number;
};

function SessionDrawer(props: ActionSheetProps<"session-drawer">) {
  const insets = useSafeAreaInsets();
  const payload: any = props.payload;
  if (!payload) return null;
  const session: Session = payload.session;
  if (!session) return null;

  const referents: Contact[] = ContactsMock.filter((contact: any) => contact.getId() === session.referentId);

  return (
    <ActionSheet
      indicatorStyle={{
        width: 150,
      }}
      gestureEnabled
      safeAreaInsets={insets}
      drawUnderStatusBar
      containerStyle={{
        height: '90%',
      }}>
      <View style={Drawers.container}>
        <Text style={Drawers.h1}>{session.sessionName}</Text>
        <View style={Drawers.row}>
          <Text style={Drawers.row_key}>Mission</Text>
          <Text style={Drawers.row_content}>{session.mission ?? "Vide"}</Text>
        </View>
        <View style={Drawers.row}>
          <Text style={Drawers.row_key}>Date</Text>
          <Text style={Drawers.row_content}>{session.date ?? "Vide"}</Text>
        </View>
        <View style={Drawers.row}>
          <Text style={Drawers.row_key}>Centre</Text>
          <Text style={Drawers.row_content}>{session.center ?? "Vide"}</Text>
        </View>
        <View style={Drawers.row}>
          <Text style={Drawers.row_key}>Cours</Text>
          <Text style={Drawers.row_content}>{session.course ?? "Vide"}</Text>
        </View>
        <View style={Drawers.row}>
          <Text style={Drawers.row_key}>Matière</Text>
          <Text style={Drawers.row_content}>{session.subject ?? "Vide"}</Text>
        </View>
        <View style={Drawers.row}>
          <Text style={Drawers.row_key}>Formation</Text>
          <Text style={Drawers.row_content}>{session.training ?? "Vide"}</Text>
        </View>
        <View style={Drawers.row}>
          <Text style={Drawers.row_key}>Référent</Text>
          <View style={[Drawers.row]}>
            {referents.length > 0 ? referents.map((contact: Contact) => (
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
          <Text style={Drawers.row_key}>Salle de cours</Text>
          <Text style={Drawers.row_content}>{session.classroom ?? "Vide"}</Text>
        </View>
        <View style={Drawers.row}>
          <Text style={Drawers.row_key}>Type de tarif</Text>
          <Text style={Drawers.row_content}>{session.rateType ?? "Vide"}</Text>
        </View>
        <View style={Drawers.row}>
          <Text style={Drawers.row_key}>Total Net</Text>
          <Text style={Drawers.row_content}>{session.totalNet ?? "Vide"}</Text>
        </View>
        <View style={Drawers.row}>
          <Text style={Drawers.row_key}>URSSAF</Text>
          <Text style={Drawers.row_content}>{session.urssaf ?? "Vide"}</Text>
        </View>
        <View style={Drawers.row}>
          <Text style={Drawers.row_key}>Nombre d'étudiants</Text>
          <Text style={Drawers.row_content}>{session.numberOfStudents ?? "Vide"}</Text>
        </View>
        <View style={Drawers.row}>
          <Text style={Drawers.row_key}>Intermédiaire</Text>
          <Text style={Drawers.row_content}>{session.intermediate ?? "Vide"}</Text>
        </View>
        <View style={Drawers.row}>
          <Text style={Drawers.row_key}>Horaires</Text>
          <Text style={Drawers.row_content}>{session.schedule ?? "Vide"}</Text>
        </View>
        <View style={Drawers.row}>
          <Text style={Drawers.row_key}>Total Heures</Text>
          <Text style={Drawers.row_content}>{session.totalHours ?? "Vide"}</Text>
        </View>
        <View style={Drawers.row}>
          <Text style={Drawers.row_key}>Tarif/Heure</Text>
          <Text style={Drawers.row_content}>{session.ratePerHour ?? "Vide"}</Text>
        </View>
        <View style={Drawers.row}>
          <Text style={Drawers.row_key}>Total Brut</Text>
          <Text style={Drawers.row_content}>{session.totalGross ?? "Vide"}</Text>
        </View>
      </View>
    </ActionSheet>
  );
}

export default SessionDrawer;