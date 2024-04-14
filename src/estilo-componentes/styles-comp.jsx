import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
   display: flex;
    background-color: #FFC94A;
    color: black;
    flex-direction: row;
    align-items: center; // se centra verticalmente
    padding: 5px;
    justify-content: flex-start; // se aline a la izquierda
    font-size: 25px;
    font-style: italic;
`;

export const HeaderText = styled.h2`
    margin-left: 10px; //ajuste margen a la izquierda
    
`;

export const StyledLink = styled(Link)`
    text-decoration: none;

`;