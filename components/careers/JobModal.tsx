import { Job } from "@/interfaces/Types";
import { View } from "lucide-react-native";
import { Dispatch, SetStateAction } from "react";
import { Image, Pressable, ScrollView, Text } from "react-native";

const JobModal = ({ job, setSeenModal }: { job: Job, setSeenModal: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <ScrollView contentContainerStyle={{ padding: 15, flexGrow: 1, backgroundColor: 'black' }}>
            <View style={{ flexDirection: 'row', backgroundColor: 'black' }}>
                <Image source={{ uri: job.img }} style={{ width: 70, height: 70 }} />
                <View>
                    <Text style={{ color: '#fff', fontSize: 25 }}>
                        {
                            [...Array(100)].map((_, index) => (
                                <Text key={index} style={{ color: 'white' }}>
                                    {index}
                                </Text>
                            ))
                        }
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}
export default JobModal;