import AcornText from "@/components/UI/AcornText";
import { SettingItemProps } from "@/interfaces/Types";
import { ChevronRight } from "lucide-react-native";
import { Pressable, StyleSheet } from "react-native";

const SettingBtn: React.FC<SettingItemProps> = ({ setSeenModal, color, title, modal }) => {
    return (
        <Pressable style={styles.box}
            onPress={() => setSeenModal({ modal: 'Payment', visible: true })}
        >
            <AcornText children={title} style={{ fontSize: 20, color: color }} />
            <ChevronRight color={color} size={22} />
        </Pressable>
    )
};

const styles = StyleSheet.create({
    box: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'row',
        padding: 7,
        paddingHorizontal: 18
    },
});

export default SettingBtn;