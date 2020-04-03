import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 300,
    },

    imageContainer: {
        flex: .5, 
        width: '100%', 
        height: Dimensions.get('window').height/2
    },

    detailContainer: {
        flex: 1,
        //marginTop: -30,
        marginBottom: 10,
        paddingHorizontal: 20,
        flexDirection: "column",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: 'white',
    },

    headerSection: {
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start"
    },

    addressContainer: {
        flex: 0.8,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },

    address: {
        marginLeft: 10,
        fontSize: 14,
        fontFamily: 'Poppins-Bold',
        color: '#BEC2CE',
    },

    favIcon: {
        flex: 0.2,
        alignSelf: "center"
    },

    title: {
        marginTop: 10,
        fontSize: 25,
        fontFamily: 'Poppins-SemiBold',
        color: 'black', 
    },

    ratingSection: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },

    reviewText: {
        marginLeft: 10,
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#BEC2CE',
        textAlignVertical: "center",
    },

    midSection: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: "space-between", 
    },

    midSectionItemContainer: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "center"
    },

    description: {
        marginTop: 20,
        fontSize: 16,
        fontFamily: 'Poppins-Light',
        color: 'black'
    },

    heading: {
        marginTop: 20,
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        color: 'black'
    },

    button: {
        width: '100%',
        height: 50,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        borderColor: 'transparent',
        borderRadius: 10,
        backgroundColor: '#1C6884',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
        textAlign: "center"
    },

    buttonText: {
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
        textAlign: "center",
        color: 'white',
        textAlignVertical: 'center'
    },

    galleryImage: {
        width: Dimensions.get('window').width/3 - 20,
        height: 100,
        borderRadius: 8
    },

    facilityItemContainer: {
        width: Dimensions.get('window').width/3, 
        marginRight: 10, 
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    facilityItemText: {
        marginLeft: 10,
        fontSize: 16,
        fontFamily: 'Poppins-Light',
        color: 'black'
    }
});

export default styles;
