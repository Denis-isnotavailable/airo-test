import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const RecipesItemStyled = styled.li`    
    margin-bottom: 20px;    
    border: 1px solid #010110;
    border-radius: 10px;
    overflow: hidden;
    background-color: ${p => p.$isMarked ? "#f6b8b8" : "#f3f1f1"};

    cursor: pointer;

    transition: background-color 250ms linear;

    :hover {
        background-color: ${p => p.$isMarked ? "#f6b8b8" : "#e3e1e1"};
    }
    
`;

export const NavLinkStyled = styled(NavLink)`    
    display: flex;
    padding: 10px;
    text-decoration: none;
    color: #000000;
`;

export const ImageThumbStyled = styled.div`
    width: 120px;
    height: 300px;
    margin-right: 30px;
    border-radius: 5px;

    background-color: inherit;
    
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const DescriptionThumbStyled = styled.div`
    text-align: center;
    width: calc(100% - 150px);

    p {
        min-height: 20px;
        max-height: 59px;
        margin-bottom: 8px;
        overflow: hidden;
    }
`;

export const TitleThumbStyled = styled.div`
   h2, h3, h4 {
    margin-bottom: 10px;
   }
`;