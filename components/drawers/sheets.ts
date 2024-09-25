import {registerSheet, SheetDefinition} from 'react-native-actions-sheet';
import DrawUnderStatusBar from './DrawerUnderStatusBar';
import Organization from '@/entities/organization';

registerSheet('drawer-under-status-bar', DrawUnderStatusBar);

declare module 'react-native-actions-sheet' {
  interface Sheets {
    'drawer-under-status-bar': SheetDefinition<{
        payload: {
          organization: Organization;
        }
    }>;
  }
}
 
export {};