import React from "react";
import { View } from "react-native";
import { Button, CText } from "../components";
export default () => {
    return (
        <View
            style={{
                flex: 1,
                height: 100,
                marginTop: 28,
                borderColor: "green",
            }}>
            <CText>Hello world</CText>
            <View style={{ height: 100 }}>
                <Button mode={"outline"} styleText={"Text"}>
                    +
                </Button>
            </View>
        </View>
    );
};
