import { useEffect } from "react";
import { useState } from "react";
import '../index.css';

function Getrecipe({query})
{
    const [mealImage, setMealImage] = useState('');
    const [mealName, setMealName] = useState('');
    const [mealInstructions, setMealInstructions] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    // console.log(query)

const url =  'https://www.themealdb.com/api/json/v1/1/search.php?'

useEffect(() => {
    async function fetch_recipe() {
      try {
        const res = await fetch(`${url}s=${query}`);
        const data = await res.json();
        setErrorMessage('');
        console.log(data)

        if (data.meals) {
          console.log(`got an response for,${query}`)
            setMealInstructions(data.meals[0].strInstructions);
            setMealName(data.meals[0].strMeal);
            setMealImage(data.meals[0].strMealThumb);

        } else {
          setErrorMessage(`No meals found for query: ${query}`);
        }
      } catch (error) {
        console.error(error);
        setErrorMessage('An error occurred while fetching the recipe.');
      }
    }
    if(query){

      fetch_recipe();
    }
  }, [query]);
      
      return (
        <>
         <div className="container max-w-md mx-auto">
        {errorMessage ? 
        (
          <p className="error">{errorMessage}</p>
        ) : 
        (
          <>
    {      mealImage && (  <div className="image">
                <img src={mealImage} alt={mealName} className="w-full h-48 object-cover rounded mb-2" />
            </div>)
    }
            <h4 className="name text-xl font-bold mb-2">{mealName}</h4>
            <p className="instruct text-sm">{mealInstructions}</p>
          </>
        )}
      </div>
        </>
      );
}
export default Getrecipe;


