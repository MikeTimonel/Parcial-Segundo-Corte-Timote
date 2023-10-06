import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FetchMealById } from '../services/mealtService';
import "../App.css"

function Mealsdetails() {
  const [mealDetail, setMealDetail] = useState(null);
  const {idMeal} = useParams();

  useEffect(() => {
    async function fetchMeals() {
      const mealDetailed = await FetchMealById(idMeal);
      setMealDetail(mealDetailed);
    }
    fetchMeals();
  },);
  return (
    <div>
      {mealDetail ? (
        <div className="Page">
          <h1>{mealDetail.strMeal}</h1>
          <div className="meal-detail-container">
          <img src={mealDetail.strMealThumb} alt={mealDetail.idMeal}></img>
          <body>
          <code> {mealDetail.strInstructions}</code></body>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Link to={"/"}>
        <button className="back">Volver</button>
      </Link>
    </div>
  );
}

export default Mealsdetails;
