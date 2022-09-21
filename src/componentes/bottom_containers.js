import ClimaHora from "./clima_hora";
import { View, StyleSheet } from "react-native";
import getImage from "./images";

const BottomContainers = () => {
    return (
        <View style={styles.view}>
            <ClimaHora style={styles.first} time="12:00" temp='Now' image={getImage('weather02.png')} color='white'></ClimaHora>
            <ClimaHora time="14:00" image={getImage('weather03.png')} temp='22º' color='gray'></ClimaHora>
            <ClimaHora time="16:00" image={getImage('weather04.png')} temp='26º' color='gray'></ClimaHora>
            <ClimaHora time="18:00" image={getImage('weather04.png')} temp='25º' color='gray'></ClimaHora>
            <ClimaHora time="20:00" image={getImage('weather05.png')} temp='31º' color='gray'></ClimaHora>
        </View>
    );
}

const styles = StyleSheet.create({
    first: {
        backgroundColor: '#477FFF'
    },
    view: {
        flexDirection: 'row'
    }
})

export default BottomContainers