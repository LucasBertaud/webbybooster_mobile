import {registerSheet, SheetDefinition} from 'react-native-actions-sheet';
import OrganizationDrawer from './OrganizationDrawer';
import Organization from '@/entities/organization';
import ContactDrawer from './ContactDrawer';
import Contact from '@/entities/contact';
import SessionDrawer from './SessionDrawer';

registerSheet('organization-drawer', OrganizationDrawer);
registerSheet('contact-drawer', ContactDrawer);
registerSheet('session-drawer', SessionDrawer); 

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
    'session-drawer': SheetDefinition<{ 
    }>;
  }
}

export {};