import styled from 'styled-components';

export const RecipesListStyled = styled.div`
   position: relative;

   button {    
    border-radius: 10px;
    background-color: #ffffff;
    font-size: 20px;
    cursor: pointer;

    transition: background-color 250ms linear;    
   }

    button:hover {
        background-color: #d4d2d2;
    }

    ul {
        margin-top: 16px;
    }
`;

export const ButtonStyled = styled.button`
    position: fixed;
    top: calc(100vh - 100px);
    left: calc(100% - 180px);
    padding: 20px 40px;
`;

export const ButtonUpStyled = styled.button`    
    display: block;
    margin: 0 auto;
    padding: 10px 40px;
`;

export const ButtonsListStyled = styled.ul`
    display: flex;
    gap: 16px;
    justify-content: center;
`;