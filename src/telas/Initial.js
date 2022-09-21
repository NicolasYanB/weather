import React from 'react'
import {View, StyleSheet} from 'react-native'
import Top from '../componentes/top'
import Local from '../componentes/local'
import MainBlue from '../componentes/main_blue'
import getImage from '../componentes/images'
import WeatherInfo from '../componentes/weather_info'
import Footer from '../componentes/footer'

function Initial() {
    let info = {
        weather: 'Heavy Rain',
        weekDay: 'Sunday',
        monthDay: '02',
        month: 'Oct',
        temp: '24',
        image: getImage('weather01.png')
    }
    return (
        <View>
            <Top></Top>
            <Local city='Bandung' country='Indonesia' style={styles.local}></Local>
            <MainBlue info={info}></MainBlue>
            <WeatherInfo style={styles.weather_info}></WeatherInfo>
            <Footer></Footer>
        </View>
    );
}

const styles = StyleSheet.create({
    local: {
        marginLeft: 20,
        marginTop: 30
    },
    weather_info: {
        marginLeft: 19.5
    }
});

export default Initial