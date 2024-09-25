import Organization from '@/entities/organization';
import React from 'react';
import {Text, View} from 'react-native';
import ActionSheet, { ActionSheetProps } from 'react-native-actions-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function OrganizationDrawer(props: ActionSheetProps<"organization-drawer">) {
  const insets = useSafeAreaInsets();
  const payload: any = props.payload;
  if(!payload) return null;
  const organization: Organization = payload.organization;
  if(!organization) return null;

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
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>
        <Text>{organization.getName()}</Text>
      </View>
    </ActionSheet>
  );
}

export default OrganizationDrawer;
