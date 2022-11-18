import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Text } from './src/components/Text';


export default function App() {
    const [isFontsLoades] = useFonts({
        'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
        'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
        'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf')
    });

    if(!isFontsLoades) { return null; }


    return (
        <View style={styles.container}>
            <Text weight='700' color='blue'>Olá mundo!</Text>
            <Text weight='600'>Olá mundo!</Text>
            <Text>Olá mundo!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7df07e1',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
