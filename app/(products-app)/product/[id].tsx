import { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation } from 'expo-router';
import {Text, View} from "react-native";


const ProductScreen = () => {

  const navigation = useNavigation();


  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Ionicons name="camera-outline" size={25} />,
    });
  }, []);



  return (
    <View>
        <Text>Product Screen</Text>
    </View>
  );
};
export default ProductScreen;