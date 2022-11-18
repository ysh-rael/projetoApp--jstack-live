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



export function Main() {
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
                </Footer>
            </FooterConteiner>
        </>
    );
}