import {registerSheet, SheetDefinition} from 'react-native-actions-sheet';
import OrganizationDrawer from './OrganizationDrawer';
import Organization from '@/entities/organization';

registerSheet('organization-drawer', OrganizationDrawer);

declare module 'react-native-actions-sheet' {
  interface Sheets {
    'organization-drawer': SheetDefinition<{
        payload: {
          organization: Organization;
        }
    }>;
  }
}
 
export {};