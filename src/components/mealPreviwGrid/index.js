import React, { useEffect, useState } from 'react';
import { FetchMealByFirstLetter } from '../../services/mealtService';
import MealPreviw from '../mealPreview/index.js';
import { SearchMealByName } from '../../services/mealtService.js';
import SearchBox from '../../components/searchBox/searchBox.js'
import './index.css';

const MealPreviwGrid = () => {
  const [mealsStock, setMealsStock] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    async function fetchMeals() {
        const meals = await FetchMealByFirstLetter('b');
        setMealsStock(meals);
    }
    fetchMeals();
  }, []);

  const handleChange = async (name) => {
    const mealbyname = await SearchMealByName(name);
    setSearchResults(mealbyname);
  };

  return (
    <div className='meal-grid'>
      <SearchBox onSearch={handleChange} />
      {searchResults.length > 0 ? (
        searchResults.map((meal) => (
          <MealPreviw key={meal.id} meal={meal} />
        ))
      ) : (
        mealsStock.map((meal) => (
          <MealPreviw key={meal.id} meal={meal} />
        ))
      )}
    </div>
  );
};

export default MealPreviwGrid;
