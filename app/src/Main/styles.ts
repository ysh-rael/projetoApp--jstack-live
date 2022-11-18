import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Conteiner = styled.SafeAreaView`
    margin-top: ${ isAndroid ? `${StatusBar.currentHeight}px` : '0'};
    flex: 1;
    background: #fafafa;
`;


export const CategoriesConteiner = styled.View`
    height: 73px;
    margin-top: 34px;
`;

export const MenuConteiner = styled.View`
    flex: 1;
`;

export const FooterConteiner = styled.View`

`;

export const Footer = styled.SafeAreaView`
    min-height: 110px;
    background: #fff;
`;