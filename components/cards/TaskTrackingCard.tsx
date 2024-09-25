import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from './Card'
import ImportanceTag from '../tags/ImportanceTag';

const styles = StyleSheet.create({
    footer: {marginLeft: 16, marginVertical: 8},
    date: {fontSize: 12, color: 'grey'},
});

function TaskTracking({date, title, importanceLevel}: {date: string, title: string, importanceLevel: number}) {
  return (
    <Card>
        <Card.Header title={title}></Card.Header>
        <Card.Body>
            <View>
                <ImportanceTag importanceLevel={importanceLevel}></ImportanceTag>
            </View>
        </Card.Body>
        <Card.Footer style={styles.footer}>
            <Text style={styles.date}>{date}</Text>
        </Card.Footer>
    </Card>
  )
}

export default TaskTracking