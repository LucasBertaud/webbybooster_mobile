import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ActionSheet, { ActionSheetProps, SheetManager } from 'react-native-actions-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TaskTracking from '@/entities/task_tracking';
import { TaskTrackingMock } from '@/mock/task_tracking_mock';
import { Drawers } from '@/constants/Drawers';
import ImportanceTag from '../tags/ImportanceTag';
import StateTag from '../tags/StateTag';

function TaskTrackingDrawer(props: ActionSheetProps<"organization-drawer">) {
    const insets = useSafeAreaInsets();
    const payload: any = props.payload;
    if(!payload) return null;
    const taskTracking: TaskTracking = payload.taskTracking;
    if(!taskTracking) return null;

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
            <Text style={Drawers.h1}>{taskTracking.getTitle()}</Text>
            <View style={Drawers.row}>
                <Text style={Drawers.row_key}>État</Text>
                <Text style={Drawers.row_content}>
                    <StateTag state={taskTracking.getState()}></StateTag>
                </Text>
            </View>
            <View style={Drawers.row}>
                <Text style={Drawers.row_key}>Date d'échéance</Text>
                <Text style={Drawers.row_content}>{taskTracking.getDate()}</Text>
            </View>
            <View style={Drawers.row}>
                <Text style={Drawers.row_key}>Importance</Text>
                <Text style={Drawers.row_content}>
                    <ImportanceTag importanceLevel={taskTracking.getImportant()}></ImportanceTag>
                </Text>
            </View>
            <View style={Drawers.row}>
                <Text style={Drawers.row_key}>Mission</Text>
                {taskTracking.getMission() != undefined ? 
                    <Text>{taskTracking.getMission()}</Text> 
                    : 
                    <Text>Vide</Text>
                }
            </View>
        </View>
      </ActionSheet>
    )
}

export default TaskTrackingDrawer