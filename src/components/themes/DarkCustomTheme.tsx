import {DarkTheme, DefaultTheme} from "@react-navigation/native";

const DarkCustomTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        card: '#262626',
        text: '#C4C4C4',
        border: '#8C8888',
    },
};

export default DarkCustomTheme;