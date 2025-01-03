import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "./settings/index";
import Notifications from "./notifications/index";

const ProfileStack = createNativeStackNavigator();

const ProfileLayout: React.FC = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="settings" component={Settings} />
            <ProfileStack.Screen name="notifications" component={Notifications} />
        </ProfileStack.Navigator>
    )
}
export default ProfileLayout;