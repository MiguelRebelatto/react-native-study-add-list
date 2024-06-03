import { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View, Image } from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredGoalText) {
        setEnteredGoalText(enteredGoalText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />

                <TextInput
                    style={styles.textInput}
                    placeholder="Enter your goal..."
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler}></Button>

                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel}></Button>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: 100,
        marginHorizontal: 8
    },
    image: {
        height: 100,
        width: 100,
        margin: 20
    }
})