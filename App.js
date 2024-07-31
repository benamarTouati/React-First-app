import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Modal, Button, Text } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const sampleGoals = [
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d'altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
];

export default function App() {
    const [goals, setGoals] = useState(sampleGoals);
    const [goalToDelete, setGoalToDelete] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const addGoalHandler = (enteredGoal) => {
        if (enteredGoal.trim().length > 0) {
            setGoals(currentGoals => [...currentGoals, enteredGoal]);
        }
    };

    const confirmDeleteHandler = (goalIndex) => {
        setGoalToDelete(goalIndex);
        setModalVisible(true);
    };

    const deleteGoalHandler = () => {
        setGoals(currentGoals => {
            return currentGoals.filter((goal, index) => index !== goalToDelete);
        });
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <GoalInput onAddGoal={addGoalHandler} />
            <FlatList
                data={goals}
                renderItem={({ item, index }) => (
                    <GoalItem
                        goal={item}
                        onDelete={() => confirmDeleteHandler(index)}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text>Are you sure you want to delete this goal?</Text>
                        <Button title="Cancel" onPress={() => setModalVisible(false)} />
                        <Button title="Delete" onPress={deleteGoalHandler} />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
});
