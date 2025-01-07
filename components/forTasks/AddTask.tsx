import React, { Dispatch, SetStateAction } from "react";
import { Modal } from "react-native";
import { Pressable, Text, TouchableWithoutFeedback } from "react-native";

const AddTask: React.FC<{ setSeeModal: Dispatch<SetStateAction<boolean>> }> = ({ setSeeModal }) => {
    return (
        <TouchableWithoutFeedback onPress={() => setSeeModal(prev => !prev)}>
            <Modal style={{ height: '90%' }}>
                <Pressable onPress={() => setSeeModal(prev => !prev)}>
                    <Text>
                        Add task
                    </Text>
                </Pressable>
            </Modal>
        </TouchableWithoutFeedback>
    )
}
export default AddTask;