/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#000000';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#4F4F4F',
    tabIconSelected: tintColorLight,
    buttonBackground: 'transparent',
    tabBackground: '#E9E9E9',
  },
  dark: {
    text: '#ECEDEE',
    background: '#181818',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#C4C4C4',
    tabIconSelected: tintColorDark,
    tabBackground: '#262626',
    buttonBackground: '#DAA926',
  },
};
