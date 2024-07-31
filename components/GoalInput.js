import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = ({ onAddGoal }) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Add a new goal"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button title="Add" onPress={addGoalHandler} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        flex: 1,
        marginRight: 10,
    },
});

export default GoalInput;
