import React from 'react'
import { OneRecipePageStyled } from './OneRecipePage.styled'
import RecipeInfo from '../../components/RecipeInfo/RecipeInfo';

function OneRecipePage() {
  return (
    <OneRecipePageStyled>
      <RecipeInfo />
    </OneRecipePageStyled>
  );
};

export default OneRecipePage