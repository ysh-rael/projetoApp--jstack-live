import styled from 'styled-components/native';
import { Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';


export const Category = styled.TouchableOpacity`
    align-items: center;
    margin-left: 24px;
`;

export const Icon = styled.View`
    width: 44px;
    height: 44px;
    background: #fff;
    border-radius: 22px;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 1px rgba(10,0,0, ${ isAndroid ? 1 : 0.1 });
    elevation: 2;
`;