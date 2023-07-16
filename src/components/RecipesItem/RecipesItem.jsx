import React from 'react'
import { RecipesItemStyled, ImageThumbStyled, DescriptionThumbStyled, TitleThumbStyled, NavLinkStyled } from './RecipesItem.styled'
import { useRecipes } from '../../zustand/zustand';

function RecipesItem({ recipe }) {
    const { togglelistToDeleteRecipes, listToDeleteRecipes } = useRecipes();
    
    const handleMouseRightButtonClick = (e) => {
        e.preventDefault();

        if (e.type === 'contextmenu') {   
            togglelistToDeleteRecipes(recipe.id);
        }
    };

    const { id, image_url, name, tagline, contributed_by, description, abv, food_pairing } = recipe;

    return (
        <RecipesItemStyled onContextMenu={handleMouseRightButtonClick} $isMarked={listToDeleteRecipes.includes(id)}>
            <NavLinkStyled to={`/${id}`}>
                <ImageThumbStyled>
                    <img src={image_url} alt="beer" width={150} height={300} />
                </ImageThumbStyled>

                <DescriptionThumbStyled>
                    <TitleThumbStyled>
                        <h2>Name: {name}</h2>       
                        <h3>{tagline}</h3>
                        <h4>Contributed by: {contributed_by}</h4>
                    </TitleThumbStyled>
                    
                    <p>{description}</p>
                    <p>Alcohol by Volume: <strong>{abv}</strong></p>
                    <p><strong>Food Pairing:</strong></p>
                    <ul>{food_pairing.map((el, i) => <li key={i}>{el}</li>)}</ul>                   

                </DescriptionThumbStyled>
            </NavLinkStyled>

        </RecipesItemStyled>
    )
};

export default RecipesItem