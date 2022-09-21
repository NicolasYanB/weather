import BottomContainers from "./bottom_containers";
import BottomTitle from "./bottom_title";
import { View } from "react-native";

const Footer = () => {
    return (
        <View>
            <BottomTitle></BottomTitle>
            <BottomContainers></BottomContainers>
        </View>
    );
}

export default Footer