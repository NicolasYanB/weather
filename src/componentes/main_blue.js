import {View, StyleSheet, Text, Image} from 'react-native'
import BlueContainer from './blue_container'

const MainBlue = (props) => {
    return (
        <BlueContainer style={[styles.mainBlue, props.style]}>
            <Image source={props.info.image}/>
            <Text style={[styles.textContent, styles.status]}>{props.info.weather}</Text>
            <Text style={[styles.textContent, styles.date]}>{props.info.weekDay}, {props.info.monthDay} {props.info.month}</Text>
            <Text style={[styles.textContent, styles.temp]}>{props.info.temp}º</Text>
        </BlueContainer>
    );
}

const styles = StyleSheet.create({
    mainBlue: {
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 35,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    textContent: {
        color: 'white'
    },
    status: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    date: {
        color: '#D1D8E8'
    },
    temp: {
        marginTop: 20,
        marginBottom: 30,
        fontSize: 90,
        fontWeight: 'bold'
    }
});

export default MainBlue