import React, { useEffect } from 'react'
import { RecipesListStyled, ButtonStyled, ButtonsListStyled } from './RecipesList.styled'
import { useRecipes } from '../../zustand/zustand';
import RecipesItem from '../RecipesItem/RecipesItem';

function RecipesList() {
  const { recipes, page, fetch, nextPage, listToDeleteRecipes, clearListToDeleteRecipes, deleteRecipe, scrollCount, setScrollCount } = useRecipes();
  
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
    if (window.innerHeight + document.documentElement.scrollTop + 1 < document.documentElement.offsetHeight || scrollCount === 15) {
      return;
    }
    scrollCount < 15 && setScrollCount(5);
    document.documentElement.scrollTo(0, 0);
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
      <ButtonStyled type='button' onClick={handleDeleteRecipes} disabled={listToDeleteRecipes.length === 0}>Delete</ButtonStyled>

      <ul>{recipes.slice(scrollCount - 5, scrollCount).map(recipe => <RecipesItem key={recipe?.id} recipe={recipe} />)}</ul>
      
      {scrollCount === 15 && <ButtonsListStyled>
        <li><button onClick={() => setScrollCount(-15)} type='button'>1</button></li>
        <li><button onClick={() => setScrollCount(-10)} type='button'>2</button></li>
      </ButtonsListStyled>}
      
    </RecipesListStyled>
  )
}

export default RecipesList;