import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/src/hooks/useThemeColor';
import {scale} from "react-native-size-matters";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'default2' | 'defaultRegular' | 'sectionHeaderRegular' | 'sectionHeader' | 'smallText' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'label' | 'buttonText';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'default2' ? styles.default2 : undefined,
        type === 'defaultRegular' ? styles.defaultRegular : undefined,
        type === 'sectionHeader' ? styles.sectionHeader : undefined,
        type === 'smallText' ? styles.smallText : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'buttonText' ? styles.buttonText : undefined,
        type === 'sectionHeaderRegular' ? styles.sectionHeaderRegular : undefined,
        type === 'link' ? styles.link : undefined,
        type === 'label' ? styles.label : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 15,
    fontWeight: "300",
    fontFamily: 'Inter'
  },
  default2: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "300",
    fontFamily: 'Inter'
  },
  defaultRegular: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400",
    fontFamily: 'Inter'
  },
  smallText: {
    fontSize: 13,
    fontWeight: "400",
    fontFamily: 'Inter'
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    fontFamily: 'Inter'
  },
  sectionHeader: {
    fontSize: 19,
    lineHeight: 24,
    fontWeight: '600',
    fontFamily: 'Inter'
  },
  sectionHeaderRegular: {
    fontSize: 19,
    lineHeight: 24,
    fontWeight: '400',
    fontFamily: 'Inter'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
    fontFamily: 'Inter'
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Inter'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: "white",
    fontFamily: 'Inter'
  },
  link: {
    fontSize: 16,
    fontFamily: 'Inter',
    textDecorationLine: 'underline',
  },
  label: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Inter',
    color: '#787878',
  }
});
