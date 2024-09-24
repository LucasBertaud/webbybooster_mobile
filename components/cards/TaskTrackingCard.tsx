import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from './Card'

const styles = StyleSheet.create({
    footer: {padding: 16},
    date: {fontSize: 12, color: 'grey'},
});

function TaskTracking() {
  return (
    <Card>
        <Card.Header title="Corriger examens Wordpress"></Card.Header>
        <Card.Body>
            <View>
                
            </View>
        </Card.Body>
        <Card.Footer style={styles.footer}>
            <Text style={styles.date}>20 février 2024</Text>
        </Card.Footer>
    </Card>
  )
}

export default TaskTracking