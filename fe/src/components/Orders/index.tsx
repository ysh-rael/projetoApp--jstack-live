import { Order } from '../../types/Order';
import { OrderBoard } from '../OrdersBoard';
import { Conteiner } from './styles';

export function Orders() {
    return (
        <Conteiner>

            <OrderBoard
                icon='🕑'
                title='Fila de espera'
            />
            <OrderBoard
                icon='👨‍🍳'
                title='Em preparação'
            />
            <OrderBoard
                icon='👨✅'
                title='Fila de espera'
            />

        </Conteiner>
    );
}