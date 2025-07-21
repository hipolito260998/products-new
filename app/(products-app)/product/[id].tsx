import {useEffect} from 'react';
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from 'expo-router';
import {KeyboardAvoidingView, Platform, ScrollView, Text} from "react-native";
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
                    <ThemedTextInput placeholder='Titulo' styleView={{marginVertical:5}}/>
                    <ThemedTextInput placeholder='Slug' styleView={{marginVertical: 5}}/>
                    <ThemedTextInput
                        placeholder='Descripcion'
                        multiline={true}
                        styleView={{marginVertical: 5}}
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
                    <ThemedTextInput  styleView={{flex:1,marginVertical:5}} placeholder='Precio' />
                    <ThemedTextInput  styleView={{flex:1,marginVertical:5}} placeholder='Inventario' />
                </ThemedView>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};
export default ProductScreen;