import React, { useState } from 'react';
import { TextInput, View, Button, StyleSheet } from 'react-native';

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredGoal) => {
        setEnteredGoal(enteredGoal);
      }
    
    return (
        <View style={ styles.inputContainer }>
            <TextInput 
                placeholder="Course Goal"
                style={ styles.input } 
                onChangeText={ goalInputHandler }
                value={ enteredGoal }
            />
            <Button title="ADD" onPress={ () => props.onAddGoal(enteredGoal) }/>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
        },
    input: {
        width: '80%', 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10
        }        
});

export default GoalInput;