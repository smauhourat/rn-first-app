import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredText) => {
    //console.log(enteredGoal);
    //setCourseGoals([...courseGoals, enteredGoal]);
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      {key: Math.random().toString(), value: enteredText}
    ]);
    console.log(courseGoals);
  }

  return (
    <View style={ styles.screen}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <FlatList 
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem title={itemData.item.value}/>
        )}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
