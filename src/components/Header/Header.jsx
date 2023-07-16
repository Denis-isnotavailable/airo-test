import React from 'react'
import { HeaderStyled } from './Header.styled'
import { useRecipes } from '../../zustand/zustand';

const Header = () => {
  const { listToDeleteRecipes } = useRecipes();

  return (
    <HeaderStyled>
      <h1>Beer Collection</h1>
      {listToDeleteRecipes.length > 0 && <p>Chosen sort index: {listToDeleteRecipes.join(", ")}</p>}
    </HeaderStyled>
  )
}

export default Header