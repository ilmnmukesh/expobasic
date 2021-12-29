import { useColorScheme } from "react-native";
import { _DarkTheme, _DefaultTheme } from "../../constant";

export default () => {
    const isDark = useColorScheme();
    const theme = isDark !== "dark" ? { ..._DefaultTheme } : { ..._DarkTheme };
    return theme;
};
