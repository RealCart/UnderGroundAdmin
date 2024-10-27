import {DefaultTheme} from "@react-navigation/native";

const DefaultCustomTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        card: '#E9E9E9',
        text: '#4F4F4F',
        border: '#8C8888',
    },
};

export default DefaultCustomTheme;