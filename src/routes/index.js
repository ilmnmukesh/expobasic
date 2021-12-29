import React from "react";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Test } from "../screen";
import { NavigatorProps, TestOptions } from "./options";

const Stack = createStackNavigator();

TouchableOpacity.defaultProps = {
    ...(TouchableOpacity.defaultProps || {}),
    delayPressIn: 0,
};

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator {...NavigatorProps}>
                <Stack.Screen
                    name='default'
                    component={Test}
                    options={{ ...TestOptions }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
