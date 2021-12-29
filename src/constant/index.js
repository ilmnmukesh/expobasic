import { DefaultTheme, DarkTheme } from "react-native-paper";
import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const scale = SCREEN_WIDTH / 320;

function normalize(size) {
    const newSize = size * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

export const _DefaultTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
    },
};

export const _DarkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
    },
};

export const fontSize = {
    mini: normalize(12),
    small: normalize(16),
    medium: normalize(18),
    large: normalize(21),
    xlarge: normalize(26),
    custom: (n) => normalize(n),
};

export { SCREEN_HEIGHT, SCREEN_WIDTH };
