import {useEffect} from 'react';
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from 'expo-router';
import {KeyboardAvoidingView, Platform, ScrollView, Text, View} from "react-native";
import {ThemedView} from "@/presentation/theme/components/ThemedView";
import ThemedTextInput from "@/presentation/theme/components/ThemedTextInput";

const ProductScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <Ionicons name="camera-outline" size={25}/>,
        });
    }, []);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView>
                <ThemedView style={{marginHorizontal: 10, marginTop: 20}}>
                    <ThemedTextInput style={{marginVertical:5}} placeholder='Titulo' />
                    <ThemedTextInput style={{marginVertical:5}} placeholder='Slug' />
                    <ThemedTextInput
                        placeholder='Descripcion'
                        multiline={true}
                        style={{marginVertical:5}}
                        numberOfLines={5}
                    />
                </ThemedView>
                <ThemedView
                    style={{
                        marginHorizontal: 10,
                        marginVertical: 5,
                        flexDirection: 'row',
                        gap: 10
                    }}
                >
                    <View style={{flex:1}}>
                        <ThemedTextInput style={{flex:1}}  placeholder='Precio' />
                    </View>
                    <View style={{flex:1}}>
                        <ThemedTextInput style={{flex:1}}   placeholder='Inventario' />
                    </View>
                </ThemedView>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};
export default ProductScreen;