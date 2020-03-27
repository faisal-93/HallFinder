import { StyleSheet, Dimensions } from 'react-native';

const screen_width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    backgroundImage: {
        width: '100%',
        height: '100%'
    },

    titleContainer: {
        flex: 0.5,
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 10,
        paddingBottom: 20
    },

    title: {
        fontFamily:'FrenchScriptMT',
        fontSize: 96,
        textAlign: "center",
        color: '#1C6884',
        textShadowColor: 'black',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
    },

    subtitle: {
        fontFamily: 'Poppins-Light',
        fontSize: 48,
        textAlign: "center",
        color: '#1C6884',
        textShadowColor: 'black',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
    },

    formContainer: {
        flex: 0.5,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 10
    },

    inputBox: {
        width: screen_width - 80,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderColor: 'transparent',
        borderRadius: 5,
        backgroundColor: 'white',
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

    inputText: {
        width: '100%',
        fontFamily: 'Poppins-Light',
        color: 'black',
        textAlign: 'center',
        fontSize: 15
    },

    button: {
        width: screen_width - 80,
        height: 50,
        marginTop: 20,
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

    text: {
        fontFamily: 'Poppins-Light',
        textAlign: "center",
        color: 'white',
        fontSize: 20,
        textAlignVertical: 'center'
    },
});

export default styles;
