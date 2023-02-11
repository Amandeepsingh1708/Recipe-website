import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import "./recipeDetail.css"
import {Link} from 'react-router-dom'


const RecipeDetails = () => {
    const [currentDetail, setMovie] = useState([])
    const { idMeal } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0, 0)
    }, [])

    console.log(idMeal)
    const getData = () => {
        axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + idMeal).then((apiData) => {
            const { data } = apiData;
            setMovie(data.meals);
        });
    }
    return (

        <div className="detail-container">

            <div className="detail">
               <Link to='/details'> <img src="https://cdn.onlinewebfonts.com/svg/img_71033.png" className="arrow"></img></Link>
                <div className="movie__name">{currentDetail[0] ?"Meal : " + currentDetail[0].strMeal : ""}</div>
                <div className="movie__rating">
                    {currentDetail[0] ?"Category : " +  currentDetail[0].strCategory : ""} 
                </div>
                <div>{currentDetail[0] ?"Instructions : " +  currentDetail[0].strInstructions : ""}</div>
            </div>
            <div className="poster-detail">
                <img className="detail-page-img" src={currentDetail[0] ? currentDetail[0].strMealThumb : ""} />
            </div>


        </div>

    )
}


export default RecipeDetails