import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GoalItem = ({ goal, onDelete }) => {
    return (
        <View style={styles.goalItemContainer}>
            <Text style={styles.goalItem}>{goal}</Text>
            <TouchableOpacity onPress={onDelete}>
                <Text style={styles.removeButton}>❌</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    goalItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    goalItem: {
        flex: 1,
    },
    removeButton: {
        color: 'red',
        marginLeft: 10,
    },
});

export default GoalItem;
