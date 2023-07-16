import React from 'react'
import { RecipesPageStyled } from './RecipesPage.styled'
import RecipesList from '../../components/RecipesList/RecipesList'

function RecipesPage() {
  return (
    <RecipesPageStyled>
      <RecipesList />
    </RecipesPageStyled>
  )
}

export default RecipesPage