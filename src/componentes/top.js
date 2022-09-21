import react from "react";
import {View, Image, StyleSheet} from 'react-native'

const Top = () => {
    return (
        <View style={styles.topView}>
            <Image source={require('../images/menu.png')}/>
            <Image source={require('../images/options.png')} style={styles.options}/>
        </View>
    );
}

const styles = StyleSheet.create({
    topView: {
        flexDirection: 'row',
        marginTop: 35,
        marginLeft: 10
    },
    options: {
        marginLeft: 300
    }
});

export default Top;