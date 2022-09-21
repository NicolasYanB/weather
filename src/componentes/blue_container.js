import { View, StyleSheet } from "react-native"

const BlueContainer = (props) => {
    return (
        <View style={[styles.container, props.style]}>{props.children}</View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#477FFF'
    }
})

export default BlueContainer