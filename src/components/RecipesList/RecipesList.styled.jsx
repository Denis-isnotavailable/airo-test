import styled from 'styled-components';

export const RecipesListStyled = styled.div`
   position: relative;

   button {
    position: fixed;
    top: calc(100vh - 100px);
    left: calc(100% - 180px);

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