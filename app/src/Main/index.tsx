import {
    Conteiner,
    CategoriesConteiner,
    MenuConteiner,
    FooterConteiner,
    Footer
} from './styles';

import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { Menu } from '../components/Menu';
import { Button } from '../components/Button';
import { TableModal } from '../components/TableModal';
import { useState } from 'react';



export function Main() {

    const [isTableModalVisible, setIsModalVisible] = useState(false);
    const [selectedTable, setSelectedTable] = useState('');

    function handleSaveTable(table:string) {
        setSelectedTable(table);
    }

    return (
        <>
            <Conteiner>
                <Header />

                <CategoriesConteiner>
                    <Categories />
                </CategoriesConteiner>
                <MenuConteiner>
                    <Menu />
                </MenuConteiner>
            </Conteiner>
            <FooterConteiner>
                <Footer>
                    {/* eu inverti: footer é footerConteiner e vice e versa. */}
                    {!selectedTable && (
                        <Button label='Novo pedido' onPress={() => setIsModalVisible(true)} />
                    )}
                </Footer>
            </FooterConteiner>

            <TableModal
                visible={isTableModalVisible}
                onClose={() => setIsModalVisible(false)}
                onSave={handleSaveTable}
            />
        </>
    );
}