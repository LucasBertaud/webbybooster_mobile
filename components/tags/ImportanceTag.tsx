import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

enum ImportanceLevel {
    HIGH = 1,
    MEDIUM = 2,
    LOW = 3,
}
  
function ImportanceTag({ importanceLevel }: { importanceLevel: ImportanceLevel }) {

    const getImportanceText = () => {
        switch (importanceLevel) {
        case ImportanceLevel.HIGH:
            return 'Importance haute';
        case ImportanceLevel.MEDIUM:
            return 'Importance moyenne';
        case ImportanceLevel.LOW:
            return 'Importance basse';
        default:
            return 'Non défini';
        }
    };
  
    const getImportanceStyle = () => {
      switch (importanceLevel) {
        case ImportanceLevel.HIGH:
          return styles.high;
        case ImportanceLevel.MEDIUM:
          return styles.medium;
        case ImportanceLevel.LOW:
          return styles.low;
        default:
          return styles.default;
      }
    };
  
    return (
      <View style={[styles.tagContainer, getImportanceStyle()]}>
        <Text style={styles.text}>{importanceLevel}. {getImportanceText()}</Text>
      </View>
    );
}
  
  const styles = StyleSheet.create({
    tagContainer: {
      padding: 8,
      borderRadius: 5,
      alignSelf: 'flex-start',
      marginHorizontal: 16,
      marginVertical: 5,
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
    },
    high: {
      backgroundColor: 'rgb(110, 54, 48)',
    },
    medium: {
      backgroundColor: 'orange',
    },
    low: {
      backgroundColor: 'green',
    },
    default: {
      backgroundColor: 'gray',
    },
  });

export default ImportanceTag