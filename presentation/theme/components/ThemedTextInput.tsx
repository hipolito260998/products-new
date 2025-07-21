import {Ionicons} from '@expo/vector-icons';
import React, {useRef, useState} from "react";
import {StyleProp, StyleSheet, TextInput, TextInputProps, View, ViewStyle} from "react-native";
import {useThemeColor} from "../hooks/useThemeColor";

interface Props extends TextInputProps {
    icon?: keyof typeof Ionicons.glyphMap
    styleView?: StyleProp<ViewStyle>
}


const ThemedTextInput = ({icon, style,styleView, ...rest}: Props) => {
    const primaryColor = useThemeColor({}, "primary");
    const textColor = useThemeColor({}, "text");

    const [isActive, setIsActive] = useState(false);
    const inputRef = useRef<TextInput>(null);

    return (
        <View
            style={[{
                ...styles.border,
                borderColor: isActive ? primaryColor : "#cccccc",
            },styleView]}
            onTouchStart={() => inputRef.current?.focus()}
        >
            {icon && (
                <Ionicons
                    name={icon}
                    size={20}
                    color={isActive ? primaryColor : textColor}
                    style={{marginRight: 10}}
                />
            )}
            <TextInput
                ref={inputRef}
                placeholderTextColor="#5c5c5c"
                {...rest}
                onFocus={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
                style={[{
                    color: textColor,
                    marginRight: 10,
                    flex: 1,
                },style]}
            />

        </View>
    );
};

export default ThemedTextInput;

const styles = StyleSheet.create({
    border: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 6,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
    },
});