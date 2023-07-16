import React from 'react'
import { HeaderStyled } from './Header.styled'
import { useRecipes } from '../../zustand/zustand';
import Beer from '../../image/beer.png'

const Header = () => {
  const { listToDeleteRecipes } = useRecipes();

  return (
    <HeaderStyled>
      <div>
        <img src={Beer} alt="beer" width={80} height={60} />
        <h1>Beer Collection</h1>
      </div>
      
      {listToDeleteRecipes.length > 0 && <p>Chosen sort index: {listToDeleteRecipes.join(", ")}</p>}
    </HeaderStyled>
  )
}

export default Header