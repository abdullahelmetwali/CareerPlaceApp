import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

const JobContent = () => {
    const { jobID } = useLocalSearchParams();
    return (
        <Text style={{ color: 'black', margin: 50 }}>
            {jobID}kkkkkkkkkkkkkk
        </Text>
    )
}
export default JobContent;