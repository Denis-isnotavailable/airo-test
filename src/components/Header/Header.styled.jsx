import styled from 'styled-components';

export const HeaderStyled = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    padding: 18px 50px;

    background-color: #cccaca;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    h1 {
        font-size: 30px;
    }
`;