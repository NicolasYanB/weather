import { Text, StyleSheet, View, Image } from "react-native";

const BottomTitle = () => {
    return (
        <View style={styles.bottom}>
            <Text style={styles.today}>Today </Text>
            <Text style={styles.next}>Next 7 Days </Text>
            <Image style={styles.forward} source={require('../images/forward.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    bottom: {
        flexDirection: 'row',
        margin: 20,
        marginBottom: 0,
        marginTop: 10
    },
    today: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    next: {
        fontSize: 20,
        color: 'gray',
        marginLeft: 'auto',
        fontWeight: 'bold',
    },
    forward: {
        marginTop: 5
    }
});

export default BottomTitle