import styled from 'styled-components';

export const RecipesListStyled = styled.div`
   position: relative;

   button {
    padding: 20px 40px;
    border-radius: 10px;
    background-color: #ffffff;
    font-size: 20px;
    cursor: pointer;

    transition: background-color 250ms linear;    
   }

    button:hover {
        background-color: #d4d2d2;
    }
`;

export const ButtonStyled = styled.button`
    position: fixed;
    top: calc(100vh - 100px);
    left: calc(100% - 180px);
`;

export const ButtonsListStyled = styled.ul`
    display: flex;
    gap: 16px;
    justify-content: center;
`;