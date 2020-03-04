import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0;

`;

export const Cart = styled(Link)`

    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;

    div {
        text-align: right;
    }
`