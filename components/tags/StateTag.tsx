import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

enum StateEnum {
    NOT_STARTED = 1,
    IN_PROGRESS = 2,
    FINISHED = 3,
}

function StateTag({ state }: { state: StateEnum }) {
    const getStateText = () => {
        switch (state) {
            case StateEnum.NOT_STARTED:
                return 'Pas commencé';
            case StateEnum.IN_PROGRESS:
                return 'En cours';
            case StateEnum.FINISHED:
                return 'Terminé';
            default:
                return 'Non défini';
        }
    };

    const getStateStyle = () => {
        switch (state) {
            case StateEnum.NOT_STARTED:
                return styles.notStarted;
            case StateEnum.IN_PROGRESS:
                return styles.inProgress;
            case StateEnum.FINISHED:
                return styles.finished;
            default:
                return styles.default;
        }
    };

    return (
        <View style={[styles.tagContainer, getStateStyle()]}>
            <Text style={styles.text}>{getStateText()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    tagContainer: {
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderRadius: 100,
      alignSelf: 'flex-start',
      marginHorizontal: 16,
    },
    text: {
      fontSize: 13,  
      color: 'white',
      fontWeight: 'bold',
    },
    notStarted: {
      backgroundColor: 'gray',
    },
    inProgress: {
      backgroundColor: 'rgba(29, 91, 173, 0.79)',
    },
    finished: {
      backgroundColor: 'rgba(67, 142, 99, 0.8)',
    },
    default: {
      backgroundColor: 'gray',
    },
  });

export default StateTag