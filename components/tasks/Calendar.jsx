import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
// import dayjs from 'dayjs';

const Calendar = () => {
    // const [currentWeekStart, setCurrentWeekStart] = useState(dayjs().startOf('week')); // Current week starts on Monday

    // // Function to get all days in the current week
    // const getWeekDays = (weekStart) => {
    //     const days = [];
    //     for (let i = 0; i < 7; i++) {
    //         days.push(weekStart.add(i, 'day')); // Add each day to the array
    //     }
    //     return days;
    // };

    // // Handle next and previous week navigation
    // const handleNextWeek = () => {
    //     setCurrentWeekStart((prev) => prev.add(1, 'week'));
    // };

    // const handlePreviousWeek = () => {
    //     setCurrentWeekStart((prev) => prev.subtract(1, 'week'));
    // };

    // const weekDays = getWeekDays(currentWeekStart);

    return (
        <View style={styles.container}>
            {/* Calendar Header */}
            <View style={styles.header}>

                <Text style={styles.title}>CALENDAR</Text>
                <TouchableOpacity >
                    <Text style={styles.arrow}>{'>'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#000', // Black background
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    arrow: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    dayContainer: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 5,
    },
    today: {
        backgroundColor: '#fff', // Highlight today with a white background
    },
    dayText: {
        fontSize: 16,
        color: '#fff',
    },
    dateText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Calendar;
