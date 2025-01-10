import { Job } from "@/interfaces/Types";
import { Image, StyleSheet, Text, View } from "react-native";

const JobBox = ({ job }: { job: Job }) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                    <Image source={{ uri: job.img }} resizeMode="contain" style={{ width: 50, height: 50 }} />
                </View>
                <Text>
                    {job.title}
                </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default JobBox;