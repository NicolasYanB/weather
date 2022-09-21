import { Text, Image, View, StyleSheet} from "react-native";
import getImage from "./images";

const ClimaHora = (props) => {
    return (
        <View style={[styles.main, props.style]}>
            <Text style={[styles.text, {color: props.color}]}>{props.time}</Text>
            <Image style={styles.image} source={props.image}/>
            <Text style={[styles.text, styles.temp, {color: props.color}]}>{props.temp}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        borderWidth: 1,
        width: 60,
        borderColor: 'gray',
        marginLeft: 20,
        marginTop: 10,
        borderRadius: 15,
        paddingTop: 2,
        paddingBottom: 2
    },
    image: {
        marginLeft: 3
    },
    text: {
        textAlign: 'center',
        color: 'gray',
        
    },
    temp: {
        fontWeight: 'bold'
    }
});

export default ClimaHora