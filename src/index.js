import React from "react";

import { Provider as ProviderPaper } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Main from "./routes";
import { Hooks } from "./utils";

export default () => {
    const isLoadingComplete = Hooks.useCache();
    const theme = Hooks.customTheme();

    if (!isLoadingComplete) {
        return <></>;
    } else {
        return (
            <SafeAreaProvider>
                <StatusBar
                    barStyle={theme.dark ? "light-content" : "dark-content"}
                />
                <ProviderPaper theme={theme}>
                    <Main />
                </ProviderPaper>
            </SafeAreaProvider>
        );
    }
};

// import { View, Text } from "react-native";
// export default () => {
//     const theme = Hooks.customTheme();
//     console.log(theme);
//     return (
//         <ProviderPaper>
//             <SafeAreaProvider>
//                 <StatusBar
//                     barStyle={theme.dark ? "light-content" : "dark-content"}
//                 />
//                 <View
//                     style={{
//                         flex: 1,
//                         height: 100,
//                         marginTop: 28,
//                         borderColor: "green",
//                     }}>
//                     <Text>Hello world</Text>
//                 </View>
//             </SafeAreaProvider>
//         </ProviderPaper>
//     );
// };
