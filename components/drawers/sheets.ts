import {registerSheet, SheetDefinition} from 'react-native-actions-sheet';
import OrganizationDrawer from './OrganizationDrawer';
import Organization from '@/entities/organization';
import ContactDrawer from './ContactDrawer';
import Contact from '@/entities/contact';

registerSheet('organization-drawer', OrganizationDrawer);
registerSheet('contact-drawer', ContactDrawer);

declare module 'react-native-actions-sheet' {
  interface Sheets {
    'organization-drawer': SheetDefinition<{
        payload: {
          organization: Organization;
        }
    }>;
    'contact-drawer': SheetDefinition<{
        payload: {
          contact: Contact;
        }
    }>;
  }
}
 
export {};