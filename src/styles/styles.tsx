import { StyleSheet, Platform } from 'react-native';
import {scale} from "react-native-size-matters";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    },
    containerWithPadding: {
        flex: 1,
        position: "relative",
        padding: scale(10),
    },
    centerContainer: {
        flex: 1,
        marginTop: "40%",
        position: "relative",
    },
    centeredContainer: {
        alignItems: "center",
        padding: scale(10),
    },
    centeredText: {
        textAlign: "center",
    },
    title: {
        fontSize: 20,
        marginBottom: Platform.OS === "ios" ? 20 : 10,
        padding: Platform.OS === "ios" ? 30 : 20,
        paddingTop: Platform.OS === "ios" ? 50 : 35,
    },
    textGray: {
        marginBottom: Platform.OS === "ios" ? 20 : 10,
        paddingVertical: 5,
        fontWeight: "500",
        color: "gray",
    },
    searchInputContainer: {
        position: "relative",
        width: "100%",
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        marginBottom: 10,
    },
    absoluteLogoContainer: {
        position: "absolute",
        left: 0,
        height: "100%",
        zIndex: 5,
        justifyContent: "center",
        alignItems: "center",
        width: 40,
    },
    input: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        paddingLeft: 40,
        paddingVertical: Platform.OS === "ios" ? 10 : 5,
    },
    label: {
        alignSelf: 'flex-start',
        marginBottom: Platform.OS === "ios" ? 8 : 6,
        color: "gray",
        fontSize: 14,
    },
    forgotPassword: {
        color: 'black',
        marginBottom: Platform.OS === "ios" ? 40 : 30,
        alignSelf: "flex-end",
        marginTop: Platform.OS === "ios" ? 5 : 3,
        marginRight: 15,
        fontWeight: "500",
    },
    defaultButton: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
    },
    smallButton: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: scale(8),
        paddingHorizontal: scale(30),
    },
    defaultButtonGradient: {
        borderRadius: 10,
        width: "100%",
        paddingVertical: scale(10),
        justifyContent: 'center',
        alignItems: 'center',
    },
    grayButton: {
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 35,
    },
    defaultButtonText: {
        fontWeight: "600",
        fontSize: 16,
    },
    orText: {
        marginTop: 10,
        marginBottom: Platform.OS === "ios" ? 20 : 10,
        color: "gray",
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: Platform.OS === "ios" ? 20 : 15,
        gap: 40,
    },
    registrationText: {
        flexDirection: 'row',
        justifyContent: 'center',
        fontWeight: "600",
        alignItems: "center",
    },
    registrationLink: {
        color: 'black',
        textDecorationLine: "underline",
    },
    codeInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: Platform.OS === "ios" ? 20 : 15,
    },
    codeInput: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        textAlign: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    timerText: {
        marginBottom: Platform.OS === "ios" ? 60 : 40,
        color: "gray",
        alignSelf: "flex-end",
        textDecorationLine: "underline",
    },
    getCodeAgain: {
        color: 'gray',
        marginBottom: Platform.OS === "ios" ? 60 : 40,
        alignSelf: "flex-end",
        textDecorationLine: "underline",
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },

    activeBackground: {
        position: 'absolute',
        width: 60,
        marginLeft: 25,
        marginRight: 25,
        height: 2,
    },
    tabBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    component: {
        height: 60,
        width: 60,
        marginTop: -5,
    },
    componentCircle: {
        flex: 1,
    },
    circleImage: {
        height: 80,
        width: 80,
        borderRadius: 40,
    },
    iconContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        height: 36,
        width: 36,
    },
    tabBar: {
        paddingBottom: Platform.OS === "ios" ? scale(18) : scale(10),
        paddingTop: scale(5),
    },
    darken: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    hidden: {
        display: "none"
    },
    modalText: {
        fontSize: scale(25),
        color: "#fff",
        textAlign: "center",
    },
    button: {
        backgroundColor: "#00DD3E",
        borderRadius: 10,
    },
    modalView: {
        padding: scale(15),
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    gradientBackground: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        alignItems: 'center',
        borderRadius: 10, // matches buttonContainer's radius
    },
    errorText: {
        color: "red",
        fontSize: scale(12),
        marginTop: scale(5),
    },
    radioGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: scale(10),
    },

    row: {
        flexDirection: "row",
        alignItems: 'center',
    },

    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 3,
    },
    activeDot: {
        backgroundColor: '#FFFFFF',
    },
    inactiveDot: {
        backgroundColor: '#888888',
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    guestImage: {
        width: scale(50),
        height: scale(50),
        borderRadius: 10,
        resizeMode: "cover",
    },
});