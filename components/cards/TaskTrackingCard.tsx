import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from './Card'
import ImportanceTag from '../tags/ImportanceTag';
import { TaskTrackingMock } from '@/mock/task_tracking_mock';
import TaskTracking from '@/entities/task_tracking';
import { SheetManager } from 'react-native-actions-sheet';

const styles = StyleSheet.create({
    footer: {marginLeft: 16, marginVertical: 8},
    date: {fontSize: 12, color: 'grey'},
});

function TaskTrackingCard({id}: {id: number}) {
  const taskTracking: TaskTracking | undefined = TaskTrackingMock.find((taskTracking: any) => taskTracking.id === id);

  if (!taskTracking) return null;

  return (
    <Card action={() => SheetManager.show("task-tracking-drawer", 
      { payload: {
        taskTracking: taskTracking
      }
    })}>
        <Card.Header title={taskTracking.getTitle()}></Card.Header>
        <Card.Body>
            <View>
                <ImportanceTag importanceLevel={taskTracking.getImportant()}></ImportanceTag>
            </View>
        </Card.Body>
        <Card.Footer style={styles.footer}>
            <Text style={styles.date}>{taskTracking.getDate()}</Text>
        </Card.Footer>
    </Card>
  )
}

export default TaskTrackingCard