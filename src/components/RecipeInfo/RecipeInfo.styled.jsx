import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const RecipesInfoStyled = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 40px 10px;
    background-color: #f3f1f1;

    border: 2px solid #000000;
    border-radius: 10px;
`;

export const NavLinkStyled = styled(NavLink)`
    position: absolute;
    top: -2px;
    left: -1px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80px;
    padding: 10px;
    border: 2px solid #000000;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;
    text-decoration: none;
    color: #000000;
    background-color: #fff;
`;

export const ImageThumbStyled = styled.div`
    width: 200px;
    height: 500px;
    margin-left: 30px;
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
    width: calc(100% - 200px);

    h2, h3, h4 {
        margin-bottom: 10px;
    }

    h2 {
        /* margin-top: 24px; */
        font-size: 40px;
    }

    h3 {
        font-size: 25px;
    }

    h4 {
        font-size: 20px;
    }

    p, ul {
        margin-bottom: 10px;        
    }
`;

export const FoodStyled = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    ul {
        margin-left: 50px;
        text-align: left;
    }
`;

export const ParamsStyled = styled.div`    
    margin-bottom: 30px;

    ul {
        display: flex;
        justify-content: space-around;
    }
`;

export const IngridientsStyled = styled.div`
    display: flex;
    justify-content: space-around;
`;