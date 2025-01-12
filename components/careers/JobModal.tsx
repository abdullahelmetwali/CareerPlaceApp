import { Job } from "@/interfaces/Types";
import { View } from "lucide-react-native";
import { Dispatch, SetStateAction } from "react";
import { Image, Modal, Pressable, ScrollView, Text } from "react-native";

const JobModal = ({ job, setSeenModal }: { job: Job, setSeenModal: Dispatch<SetStateAction<boolean>> }) => {
    return (


        <View style={{ flexDirection: 'column', backgroundColor: 'black' }}>
            <Image source={{ uri: job.img }} style={{ width: 70, height: 70 }} />
            <View>
                {
                    [...Array(100)].map((_, index) => (
                        <Text key={index} style={{ color: 'white' }}>
                            {index}
                        </Text>
                    ))
                }
            </View>
        </View>
    )
}
export default JobModal;