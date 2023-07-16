import styled from 'styled-components';

export const HeaderStyled = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;

    background-color: #cccaca;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    div {
        display: flex;
        align-items: center;
    }

    h1 {
        margin-left: 20px;
        font-size: 30px;
    }
`;