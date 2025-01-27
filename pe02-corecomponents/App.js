import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

export default function App() {
    // State to store the user's favorite course
    const [favoriteCourse, setFavoriteCourse] = useState('');

    // Course Data (Core, Depth of Study, Capstone)
    const coreCourses = [
        "CS 504 - Software Engineering",
        "CS 506 - Programing for Computing",
        "CS 519 - Cloud Computing Overview",
        "CS 533 - Computer Architecture",
        "CS 547 - Secure Systems and Programs",
        "CS 622 - Discrete Math and Algorithms for Computing",
        "DS 510 - Artificial Intelligence for Data Science",
        "DS 620 - Machine Learning & Deep Learning",
    ];

    const depthCourses = [
        "CS 624 - Full-Stack Development - Mobile App",
        "CS 628 - Full-Stack Development - Web App"
    ];

    const capstoneCourse = "CS 700 - Capstone Project";

    return (
        <ScrollView style={styles.container}>
            <Image source={require('/workspaces/cs451-pe_HuuDat/pe02-corecomponents/assets/images/icon.png')} style={styles.icon} />
            <Text style={styles.title}>Core Components MSCS Courses</Text>

            <Text style={styles.sectionTitle}>Core Courses:</Text>
            {coreCourses.map((course, index) => (
                <Text key={index} style={styles.courseText}>{course}</Text>
            ))}

            <Text style={styles.sectionTitle}>Depth of Study Courses:</Text>
            {depthCourses.map((course, index) => (
                <Text key={index} style={styles.courseText}>{course}</Text>
            ))}

            <Text style={styles.sectionTitle}>Capstone Course:</Text>
            <Text style={styles.courseText}>{capstoneCourse}</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter your favorite course"
                onChangeText={setFavoriteCourse}
                value={favoriteCourse}
            />
            <Text style={styles.favoriteText}>Your favorite course is: {favoriteCourse}</Text>
        </ScrollView>
    );
}

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    icon: {
        width: 100,
        height: 100,
        marginBottom: 20,
        alignSelf: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15,
    },
    courseText: {
        fontSize: 16,
        marginTop: 5,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 20,
        paddingLeft: 10,
    },
    favoriteText: {
        fontSize: 16,
        marginTop: 15,
        fontStyle: 'italic',
    },
});