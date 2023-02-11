import React from "react";
import './recipe.css'
import { Link } from 'react-router-dom'
import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import { addMovie } from "../slice/RecipeSlice";
const RecipeCard = ({ recipe, i }) => {

    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
        strIngredient,
        strInstructions

    } = recipe;

    const dispatch = useDispatch()

    return (
        <div className="card">
         
                <img
                    src={strMealThumb}
                    alt={strMeal}
                    className="card-image"
                />
                <div className="card-body" style={{textDecoration:'none'}}>
                    <span className="category">{strCategory}</span>
                    <h3 className="meal">{strMeal}</h3>
                    <Button onClick={() => dispatch(addMovie(recipe))}>Save</Button>

                    <Link to={`/recipeDetails/${idMeal}`} className='detail-menu'>Details</Link>
                </div>
        </div>
    )
};

export default RecipeCard;