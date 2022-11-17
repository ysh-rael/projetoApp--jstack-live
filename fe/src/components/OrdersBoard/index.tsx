import { useState } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Board, OrderConteiner } from './styles';

interface OrderBoardProps {
    icon: string;
    title: string;
    orders: Order[];
}


export function OrderBoard({ icon, title, orders }: OrderBoardProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

    function handleOpenModal(order: Order) {
        setIsModalVisible(true);
        setSelectedOrder(order);
    }

    function handleCloseModal() {
        setIsModalVisible(false);
        setSelectedOrder(null);
    }


    console.log(orders);

    return (
        <Board>
            <OrderModal
                visible={isModalVisible}
                order={selectedOrder}
                onClose={handleCloseModal}
            />

            <header>
                <span>{icon}</span>
                <span><strong>{title}</strong></span>
                <span>({orders.length})</span>
            </header>


            {orders.length > 0 && (
                <OrderConteiner>
                    {orders.map(order => (
                        <button type='button' key={order._id} onClick={() => handleOpenModal(order)}>
                            <strong>Mesa {order.table}</strong>
                            <span>{order.products.length} Itens</span>
                        </button>

                    ))}



                </OrderConteiner>
            )}
        </Board>
    );
}

/*

 */