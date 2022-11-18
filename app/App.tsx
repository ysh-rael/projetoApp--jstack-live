import { useFonts } from 'expo-font';
import { Main } from './src/Main';
import { StatusBar } from 'expo-status-bar';


export default function App() {
    const [isFontsLoades] = useFonts({
        'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
        'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
        'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf')
    });

    if (!isFontsLoades) { return null; }


    return (
        <>
            <StatusBar style='dark'/>
            <Main />
        </>
    );
}
