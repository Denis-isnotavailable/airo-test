import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { RecipesInfoStyled, NavLinkStyled, ImageThumbStyled, DescriptionThumbStyled, FoodStyled, IngridientsStyled, ParamsStyled } from './RecipeInfo.styled';
import { useRecipes } from '../../zustand/zustand';


function RecipeInfo() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});
    const { recipes } = useRecipes();

    useEffect(() => {  
        document.documentElement.scrollTo(0, 0);
        const res = recipes.find(recipe => +id === recipe.id);  
        
        if (res) {
            setRecipe(res);
            localStorage.setItem("currentRecipe", JSON.stringify(res));
        } else {
            setRecipe(JSON.parse(localStorage.getItem("currentRecipe")));
        }   
        
    }, [recipes, id]);

    const handleClearStorage = () => {
        localStorage.removeItem("currentRecipe");
    }

    const { image_url, name, tagline, contributed_by, description, abv, ibu, target_fg, target_og, ebc, srm, ph, attenuation_level } = recipe;

    return (
        <>{
            recipe && 
            <RecipesInfoStyled>
                <NavLinkStyled to={"/"} onClick={handleClearStorage}><AiOutlineArrowLeft /> Go back</NavLinkStyled>

                <DescriptionThumbStyled>
                    <h2>{name}</h2>       
                    <h3>{tagline}</h3>
                    <h4>Contributed by: {contributed_by}</h4>

                    <p>{description}</p>
                    
                    <ParamsStyled>
                        <h4>Main Characteristics:</h4>
                        <ul>
                            <li>abv: <strong>{abv}</strong></li>
                            <li>ibu: <strong>{ibu}</strong></li>
                            <li>target fg: <strong>{target_fg}</strong></li>
                            <li>target og: <strong>{target_og}</strong></li>
                            <li>ebc: <strong>{ebc}</strong></li>
                            <li>srm: <strong>{srm}</strong></li>
                            <li>ph: <strong>{ph}</strong></li>
                            <li>attenuation level: <strong>{attenuation_level}</strong></li>
                        </ul>                        
                    </ParamsStyled>
                        
                    <FoodStyled>
                        <h4>Food Pairing:</h4>
                        <ul>{recipe?.food_pairing?.map((el, i) => <li key={i}>{el}</li>)}</ul>
                    </FoodStyled>
                     

                    <h4>Ingredients:</h4>
                    <IngridientsStyled>
                        <div>
                            <h5>Malt:</h5>
                            <ul>{recipe?.ingredients?.malt?.map((el, i) => <li key={i}>{el.name}: {el.amount.value} {el.amount.unit}</li>)}</ul>
                        </div>    
                        <div>
                            <h5>Hops:</h5>
                            <ul>{recipe?.ingredients?.hops?.map((el, i) => <li key={i}>{el.name}: {el.amount.value} { el.amount.unit}</li>)}</ul>
                        </div>
                        <div>
                            <h5>Yeast:</h5>
                            <p>{recipe?.ingredients?.yeast}</p>
                        </div>
                    </IngridientsStyled>

                        

                </DescriptionThumbStyled>


                <ImageThumbStyled>
                    <img src={image_url} alt="beer" width={200} height={500} />
                </ImageThumbStyled>


            </RecipesInfoStyled>
        }</>
        
    );
};

export default RecipeInfo;