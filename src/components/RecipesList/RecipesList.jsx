import React, { useEffect, useState } from 'react'
import { RecipesListStyled } from './RecipesList.styled'
import { useRecipes } from '../../zustand/zustand';
import RecipesItem from '../RecipesItem/RecipesItem';

function RecipesList() {
  const [scrollCount, setScrollCount] = useState(5);
  const { recipes, page, fetch, nextPage, listToDeleteRecipes, clearListToDeleteRecipes, deleteRecipe } = useRecipes();
  
  useEffect(() => {  
    fetch(page);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    
    if (recipes.length > 0 && recipes.length < 25) {
      fetch(page + 1);
      nextPage();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipes]);  


  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 < document.documentElement.offsetHeight) {
      return;
    }
    scrollCount < 15 && setScrollCount(prev => prev += 5);
  };

   useEffect(() => {
     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);     
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollCount]);

  const handleDeleteRecipes = () => {
    listToDeleteRecipes.forEach(recId => {
      deleteRecipe(recId);
    });

    clearListToDeleteRecipes();
  }

  return (
    <RecipesListStyled>     
      <button type='button' onClick={handleDeleteRecipes} disabled={listToDeleteRecipes.length === 0}>Delete</button>

      <ul>{recipes.slice(0, scrollCount).map(recipe => <RecipesItem key={recipe?.id} recipe={recipe} />)}</ul>      
      
    </RecipesListStyled>
  )
}

export default RecipesList