import {View, StyleSheet} from 'react-native'
import MinorBlue from './minor_blue';
import getImage from '../componentes/images'

const WeatherInfo = (props) => {
    return (
        <View style={[styles.info_container, props.style]}>
            <MinorBlue style={[styles.inner_container, styles.wind]} title="WIND" info=" 19.2km/j" icon={getImage('wind.png')}></MinorBlue>
            <MinorBlue style={[styles.inner_container, styles.feels_like]} title="FEELS LIKE" info="25º" icon={getImage('feels_like.png')}></MinorBlue>
            <MinorBlue style={[styles.inner_container, styles.index_uv]} title="INDEX UV" info=" 2" icon={getImage('index_uv.png')}></MinorBlue>
            <MinorBlue style={[styles.inner_container, styles.pressure]} title="PRESSURE" info=" 1014 mbar" icon={getImage('pressure.png')}></MinorBlue>
        </View>
    );
}

const styles = StyleSheet.create({
    info_container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 400
    },
    inner_container: {
        padding: 20,
        paddingLeft: 24,
        margin: .3
    },
    index_uv: {
        paddingRight: 54,
        borderBottomLeftRadius: 20
    },
    feels_like: {
        paddingRight: 45
    },
    pressure: {
        paddingRight: 31,
        borderBottomRightRadius: 20
    },
    wind: {
        paddingRight: 54
    }
});

export default WeatherInfo