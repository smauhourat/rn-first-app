import React, { useState } from 'react';
import { TextInput, View, Button, StyleSheet, Modal } from 'react-native';
//import Modal from 'react-native-modal';

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredGoal) => {
        setEnteredGoal(enteredGoal);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide" style={styles.modal}>
            <View style={ styles.inputContainer }>
                <TextInput 
                    placeholder="Course Goal"
                    style={ styles.input } 
                    onChangeText={ goalInputHandler }
                    value={ enteredGoal }
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" onPress={props.onCancel} color="red"/>
                    </View>
                    <View style={styles.button}>
                        <Button title={props.visible.toString()} onPress={ addGoalHandler }/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        borderWidth: 10,
        borderColor: 'yellow',
        width: '100%'
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        borderColor: 'green',
        borderWidth: 3
        },
    input: {
        width: '80%', 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10
        },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        width: '40%'
    }
});

export default GoalInput;