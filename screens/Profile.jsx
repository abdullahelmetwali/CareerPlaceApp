import { ScrollView, Text } from "react-native"
import { Bolt } from "lucide-react-native"
const Profile = () => {
    return (
        <>
            <ScrollView >
                <Text>Profile</Text>
                <Bolt size={64} color={`#000`} />
            </ScrollView>
        </>
    )
}
export default Profile;