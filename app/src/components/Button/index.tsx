import { Alert } from 'react-native';
import { Text } from '../Text';
import { Conteiner } from './styles';

interface ButtonProps {
    label:string;
    onPress: () => void;
    disable?: boolean;
}

export function Button({ label, onPress, disable }: ButtonProps) {
    return (
        <Conteiner onPress={onPress} disabled={disable}>
            <Text weight='600' color='#fff'> { label } </Text>
        </Conteiner>
    );
}