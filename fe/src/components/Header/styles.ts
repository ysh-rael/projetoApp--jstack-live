
import styled from 'styled-components';

export const Container = styled.header`
    background: #D73035;
    display: flex;
    justify-content: space-between;
    height: 198px;
    align-items: center;
    width: 100%;
    max-width: 1216px;
`;

export const Content = styled.div`
    background: #D73035;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    .page-details {
        h1 {
            color: #fff;
            font-size: 32px;
        }
        h2 {
            color: #fff;
            font-weight: 400;
            font-size: 16px;
            opacity: 0.9;
            margin-top: 6px;
        }
    }
`;