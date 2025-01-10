import AddTask from "@/components/tasks/AddTask";
import Calendar from "@/components/tasks/Calendar";
import AcornText from "@/components/UI/AcornText";
import { Colors } from "@/constants/Colors";
import { Plus } from "lucide-react-native";
import { useState } from "react";
import { Modal } from "react-native";
import { Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, useColorScheme, View } from "react-native";
import { CalendarList } from 'react-native-calendars';


const Tasks = () => {
    const mode = useColorScheme();
    const whatMode = Colors[mode || 'dark'];
    const [seeModal, setSeeModal] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState('');

    return (
        <SafeAreaView style={{ ...styles.container, backgroundColor: whatMode.background }}>
            <ScrollView>
                {/* <View style={styles.headerBox}>
                    <AcornText children="Collections & Tasks" style={{ color: whatMode.text, fontSize: 20 }} />
                    <Pressable
                        onPress={() => setSeeModal(prev => !prev)}
                        style={{ backgroundColor: '#333333', padding: 3, borderRadius: 100, }} accessibilityLabel="Add tasks" accessibilityHint="Add tasks">
                        <Plus color={whatMode.muted} size={23} />
                    </Pressable>
                </View>
                {seeModal && <AddTask setSeeModal={setSeeModal} />} */}
                <Calendar />
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 20 : 15,
        paddingBottom: 72,
        paddingHorizontal: 10,
        position: 'relative'
    },
    headerBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    addTaskBox: {
        position: 'absolute',
        right: 0,
        top: 50,
        width: 100,
        borderColor: 'white', borderWidth: 1, padding: 8, borderRadius: 9
    }
})
export default Tasks;