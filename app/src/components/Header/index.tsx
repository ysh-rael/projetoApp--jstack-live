import { Text } from '../Text';
import { Conteiner } from './styles';

export function Header() {
    return (
        <Conteiner>
            <Text size={14} opacity={.9}> Bem vind(a) ao </Text>
            <Text size={24} weight='700'>
                WAITER <Text size={24}> APP </Text>
            </Text>
        </Conteiner>
    );
}