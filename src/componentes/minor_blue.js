import  {Text, Image, StyleSheet, View} from 'react-native'
import BlueContainer from "./blue_container";

const MinorBlue = (props) => {
    return (
        <BlueContainer style={[styles.container, props.style]}>
            <Image source={props.icon} style={styles.image}/>
            <View>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.info}>{props.info}</Text>
            </View>
        </BlueContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    image: {
        marginRight: 20,
        position: 'relative',
        top: 10
    },
    title: {
        marginBottom: 5,
        color: 'white'
    },
    info: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default MinorBlue