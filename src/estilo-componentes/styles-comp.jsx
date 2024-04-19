import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
   display: flex;
    background-color: #e6e2e2;
    color: black;
    flex-direction: row;
    align-items: center; // se centra verticalmente
    padding: 5px;
    
    font-size: 25px;
    font-style: italic;
    margin-bottom: 20px;
`;

export const HeaderText = styled.h2`
    margin-left: 1px; //ajuste margen a la izquierda
    
`;

export const StyledLink = styled(Link)`
    text-decoration: none;

`;

