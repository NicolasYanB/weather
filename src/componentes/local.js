import react from "react";
import {View, Text, StyleSheet} from 'react-native'

const Local = (props) => {
    return (
        <View style={props.style}>
            <Text style={styles.city}>
                {props.city}, <Text style={styles.country}>{props.country}</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    city: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#494949'
    },
    country: {
        fontWeight: 'normal',
        color: '#494949',
        fontSize: 20
    }
});


export default Local