import {
    TransitionSpecs,
    CardStyleInterpolators,
} from "@react-navigation/stack";

const openConfig = {
    ...TransitionSpecs.ScaleFromCenterAndroidSpec,
    config: {
        ...TransitionSpecs.ScaleFromCenterAndroidSpec.config,
        duration: 500,
    },
};

const customTransition = {
    gestureEnabled: true,
    gestureDirection: "horizontal",
    transitionSpec: {
        open: openConfig,
        close: TransitionSpecs.ScaleFromCenterAndroidSpec,
    },
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

export const NavigatorProps = {
    initialRouteName: "Test",
    screenOptions: {
        headerShown: false,
        headerBackTitle: "Voltar",
        headerTransparent: true,
    },
};
export const TestOptions = {
    ...customTransition,
    headerTitle: "Main",
};
