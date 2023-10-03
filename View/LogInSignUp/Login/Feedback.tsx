import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Feedback = () => {
  const [selectedReaction, setSelectedReaction] = useState(null);

  const handleReactionPress = (reaction:any) => {
    setSelectedReaction(reaction);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Feedback</Text>

      <Text style={styles.emoji}>{selectedReaction || '😟'}</Text>

      <View style={styles.reactionButtons}>
        <TouchableOpacity
          style={[styles.reactionButton, selectedReaction === '😄' && styles.selected]}
          onPress={() => handleReactionPress('😄')}
        >
          <Text>😄</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.reactionButton, selectedReaction === '😐' && styles.selected]}
          onPress={() => handleReactionPress('😐')}
        >
          <Text>😐</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.reactionButton, selectedReaction === '😟' && styles.selected]}
          onPress={() => handleReactionPress('😟')}
        >
          <Text>😟</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Type your feedback here..."
        multiline
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor:'white'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'green',
    marginBottom: 20,
  },
  emoji: {
    fontSize: 40,
    marginBottom: 20,
  },
  reactionButtons: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  reactionButton: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  selected: {
    backgroundColor: 'green',
  },
  input: {
    height: 150,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Feedback;
