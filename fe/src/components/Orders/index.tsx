import { Order } from '../../types/Order';
import { OrderBoard } from '../OrdersBoard';
import { Conteiner } from './styles';

const orders: Order[] = [
    {
        '_id': '63768705a12ea32b95799c1b',
        'table': '5',
        'status': 'WAITING',
        'products': [
            {
                'product': {
                    'name': 'Pizza quatro queijo',
                    'imagePath': '1668711233721-quatro-queijos.png',
                    'price': 45
                },
                'quantity': 2,
                '_id': '63768705a12ea32b95799c1c'
            },
            {
                'product': {
                    'name': 'Coca-Cola',
                    'imagePath': '1668711335985-coca-cola.png',
                    'price': 8.5,
                },
                'quantity': 4,
                '_id': '63768705a12ea32b95799c1d'
            }
        ],
    }
];


export function Orders() {
    return (
        <Conteiner>

            <OrderBoard
                icon='🕑'
                title='Fila de espera'
                orders = {orders}
            />
            <OrderBoard
                icon='👨‍🍳'
                title='Em preparação'
                orders = {orders}

            />
            <OrderBoard
                icon='👨✅'
                title='Fila de espera'
                orders = {orders}

            />

        </Conteiner>
    );
}