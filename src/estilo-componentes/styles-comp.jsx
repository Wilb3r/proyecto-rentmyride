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
    @media (max-width: 1400px)  {
        @media (min-width: 1200px){
            margin-left: -30px;
        }
    }
    
`;

export const StyledLink = styled(Link)`
    text-decoration: none;

`;

