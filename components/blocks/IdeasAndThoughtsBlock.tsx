import React, { useState } from 'react'
import TitlePage from '../titles/TitlePage'
import TodoListInput from '../inputs/TodoListInput'
import Add from '../buttons/Add';
import { StyleSheet, Text, View } from 'react-native';

function IdeasAndThoughtsBlock() {
  const [ideasAndThoughts, setIdeasAndThoughts] = useState<string[]>([]);
  const [newValue, setNewValue] = useState('');
  const [showInput, setShowInput] = useState(false);
  const addIdeasAndThoughts = () => {
    if (newValue.trim()) {
      setIdeasAndThoughts([...ideasAndThoughts, newValue]);
      setNewValue('');
      setShowInput(false);
    }
  };
  return (
    <>
        <TitlePage title='Idées et pensées'/>
        <View style={styles.container}>
          {ideasAndThoughts.map((idea, index) => (
            <Text style={styles.idea_text} key={index}>{idea}</Text>
          ))}
          {showInput && (
            <TodoListInput 
              placeholder="Entrer une idée" 
              value={newValue} setValue={setNewValue} 
              action={addIdeasAndThoughts}
            />
          )}
          <Add action={() => setShowInput(true)}/>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
      borderRadius: 10,
      margin: 10,
  },
  idea_text: {
      marginTop: 10,
      marginLeft: 14,
      fontSize: 16,
      color: "black",
  },
});

export default IdeasAndThoughtsBlock