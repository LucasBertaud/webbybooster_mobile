import {registerSheet, SheetDefinition} from 'react-native-actions-sheet';
import OrganizationDrawer from './OrganizationDrawer';
import Organization from '@/entities/organization';
import ContactDrawer from './ContactDrawer';
import Contact from '@/entities/contact';
import TaskTracking from '@/entities/task_tracking';
import TaskTrackingDrawer from './TaskTrackingDrawer';

registerSheet('organization-drawer', OrganizationDrawer);
registerSheet('contact-drawer', ContactDrawer);
registerSheet('task-tracking-drawer', TaskTrackingDrawer);

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
    'task-tracking-drawer': SheetDefinition<{
      payload: {
        taskTracking: TaskTracking;
      }
  }>;
  }
}
 
export {};