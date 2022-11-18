import styled from 'styled-components/native';

export const Product = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const ProductDetails = styled.View`
    margin-left: 16px;
    flex: 1;
`;

export const ProductImage = styled.Image`
border-radius: 14px;
width: 120px;
height: 96px;
`;

export const Separator = styled.View`
width: 100%;
height: 1px;
background: rgba(284,204,204, .3);
margin: 24px 0;
`;

export const AddCardButton = styled.TouchableOpacity`
position: absolute;
    bottom: 0;
    right: 0;
`;