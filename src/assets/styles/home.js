import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 25,
        paddingLeft: 15,
        paddingRight: 15
    },

    searchBar: {
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 12,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        borderColor: 'transparent',
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    searchInputText: {
        width: '100%',
        flexShrink: 1,
        fontFamily: 'Poppins-ExtraLight',
        color: 'black',
        fontSize: 17,
        alignSelf: "center",
        textAlignVertical: "center"
    },

    searchResultText: {
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 5,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 24
    },

    filterContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },

    filterButton: {
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center"
    },

    filterButtonText: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderColor: '#9A9A9A',
        borderWidth: 1,
        borderRadius: 30,
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: '#515C6F',
        textAlign: "center",
        textAlignVertical: "center"
    },

    listItemContainer: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 20
    },

    listItemImage: {
        width: '100%',
        height: 184, 
        alignItems: "flex-end"
    },

    listItemTextContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 7
    },

    listItemCategory: {
        fontSize: 12,
        fontFamily: 'Poppins-Light',
        color: '#9A9A9A',
        textAlignVertical: "center"
    },

    listItemRating: {
        marginLeft: 5,
        marginRight: 3,
        fontSize: 12,
        fontFamily: 'Poppins-Light',
        color: 'black',
        textAlignVertical: "center",
        alignSelf: "center"
    },

    listItemReview: {
        fontSize: 12,
        fontFamily: 'Poppins-Light',
        color: 'black',
        textAlignVertical: "center",
        alignSelf: "center"
    },

    listItemName: {
        fontSize: 24,
        fontFamily: 'Poppins-Regular',
        color: '#1E2432'
    },

    listItemAddress: {
        fontSize: 12,
        fontFamily: 'Poppins-Light',
        color: 'black'
    },

    listItemDivider: {
        width: '100%',
        height: StyleSheet.hairlineWidth,
        marginTop: 20,
        backgroundColor: '#D9D9D9'
    },
});

export default styles;
