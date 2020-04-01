import { StyleSheet, Dimensions } from "react-native";

const screen_width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'blue'
    },

    image: {
        flex: 0.45,
        width: '100%',
        justifyContent: "center"
    },

    card: {
        flex: 0.55,
        width: screen_width,
        height: '100%',
        marginTop: -30,
        paddingHorizontal: 25,
        paddingVertical: 20,
        justifyContent: 'flex-start',
        alignSelf: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: 'white'
    },

    title: {
        marginLeft: 20,
        fontFamily: 'Poppins-Light',
        fontSize: 20,
        color: 'white',
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 5
    },

    subtitle: {
        marginLeft: 20,
        fontFamily: 'Poppins-Medium',
        fontSize: 32,
        color: 'white',
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 10
    },

    heading: {
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        color: 'black',
        textAlign: 'left',
    },

    underline: {
        height: 1,
        width: '28%',
        backgroundColor: '#1C6884'
    },

    formContainer: {
        height: '100%',
        marginTop: 10,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    inputBox: {
        width: '100%',
        height: 50,
        marginTop: 10,
        paddingLeft: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#BEC2CE',
        backgroundColor: 'white',
        textAlign: "left"
    },

    inputText: {
        width: '100%',
        fontFamily: 'Poppins-Light',
        color: 'black',
        textAlign: "left",
        fontSize: 15
    },

    button: {
        width: '100%',
        height: 50,
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center",
        borderColor: 'transparent',
        borderRadius: 5,
        backgroundColor: '#1C6884',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        textAlign: "center"
    },

    buttonText: {
        fontFamily: 'Poppins-Light',
        textAlign: "center",
        color: 'white',
        fontSize: 20,
        textAlignVertical: 'center'
    },
});

export default styles;
