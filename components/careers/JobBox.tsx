import { Job } from "@/interfaces/Types";
import { Image, Modal, Pressable, StyleSheet, Text, TouchableWithoutFeedback, useColorScheme, View } from "react-native";
import AcornText from "../UI/AcornText";
import { Colors } from "@/constants/Colors";
import { ArrowDownRight, Heart } from "lucide-react-native";
import JobModal from "./JobModal";
import { useState } from "react";
import { ScrollView } from "react-native";
import { Link, useRouter } from "expo-router";

const JobBox = ({ job }: { job: Job }) => {
    const router = useRouter();
    const mode = useColorScheme();
    const whatMode = Colors[mode || 'dark'];
    const [seeModal, setSeenModal] = useState(false);
    return (
        <>
            <View style={{ ...styles.box, backgroundColor: '#010101' }}>
                <View style={{ ...styles.flex, alignItems: 'flex-start' }}>
                    <View style={styles.flex}>
                        <View style={styles.companyBox}>
                            <Image source={{ uri: job.img }} resizeMode="contain" style={{ width: 23, height: 23, borderRadius: 0 }} />
                        </View>
                        <View>
                            <AcornText children={job.title.length > 18 ? `${job.title.slice(0, 18)}...` : job.title} style={{ color: whatMode.text, fontSize: 18 }} />
                            <AcornText children={job.company} style={{ color: whatMode.muted, fontSize: 15 }} />
                        </View>
                    </View>
                    <View>
                        <AcornText children={job.location} style={{ color: whatMode.text, fontSize: 14, marginTop: 5 }} />
                    </View>
                </View>
                <View style={{ marginVertical: 10, paddingHorizontal: 4 }}>
                    <AcornText children={`${job.description.slice(0, 111)}...`} style={{ color: whatMode.text, fontSize: 15 }} />
                </View>
                <View style={styles.flex}>
                    <View style={styles.flex}>
                        <AcornText children={job.type} style={{ ...styles.jobDataBox, color: whatMode.text }} />
                        <AcornText children={job.experience} style={{ ...styles.jobDataBox, color: whatMode.text }} />
                    </View>
                    <View style={styles.flex}>
                        <Pressable style={styles.favBox}>
                            <Heart size={22} fill={job.favourite ? '#C63F47' : 'white'} />
                        </Pressable>
                        <View style={{ ...styles.favBox }} >
                            <Link
                                href={{
                                    pathname: '/job/[jobID]',
                                    params: { jobID: job.id }
                                }}
                            >
                                <ArrowDownRight size={22} color={'#fff'} />
                            </Link>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    box: {
        marginTop: 15,
        borderRadius: 14,
        paddingHorizontal: 7,
        paddingVertical: 10,
        borderColor: 'rgba(255, 255, 255, 0.4)',
        borderWidth: 1
    },
    companyBox: {
        backgroundColor: '#fff',
        width: 36,
        height: 36,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,
        paddingHorizontal: 2
    },
    jobDataBox: {
        paddingVertical: 3,
        paddingHorizontal: 13,
        borderColor: 'rgba(255, 255, 255, 0.4)',
        borderWidth: 1,
        borderRadius: 20,
        fontSize: 15
    },
    favBox: {
        backgroundColor: '#1a1a1a',
        borderRadius: 100,
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
});

export default JobBox;