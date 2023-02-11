import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SearchBar from "../Recipes/SearchBar";
import RecipeCard from "../Recipes/RecipeCard";
import Profile from './Profile';
const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const Details = () => {

    const [logindata, setLoginData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);

    const userLogin = () => {
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
            setLoginData(user);

        }
    }

    useEffect(() => {
        userLogin();
    }, [])



    // search for the recipe
    const searchRecipes = async () => {
        setIsLoading(true);
        axios.get(searchApi).then((apiData) => {
            const { data } = apiData;
            setRecipes(data.meals);
        });
        setIsLoading(false);
    };

    const serachHandeler = async () => {
        const url = query ? searchApi + query : searchApi
        setQuery("")
        setIsLoading(true);
        axios.get(url).then((apiData) => {
            const { data } = apiData;
            setRecipes(data.meals);
        });
        setIsLoading(false);
    }
    useEffect(() => {
        searchRecipes()
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        serachHandeler();
    }

    return (
        <>
        
            {
                logindata.length === 0 ? "errror" :
                    <>

                        <div className="main-container">
                          <h4>Hi {logindata[0].name}!</h4>
                            <SearchBar
                                isLoading={isLoading}
                                query={query}
                                setQuery={setQuery}
                                handleSubmit={handleSubmit}
                            />
                            <Profile
                                recipe={recipes}
                                loginData={logindata}
                                name = {logindata[0].name}
                            />

                            <div className="recipes">

                                {recipes ? recipes.map((recipe, i) => (
                                    <RecipeCard
                                        key={i}
                                        i={i}
                                        recipe={recipe}
                                    />
                                )) : "No Results."}
                            </div>
                        </div>
                     
                    </>
            }
        </>
    )
}

export default Details




















