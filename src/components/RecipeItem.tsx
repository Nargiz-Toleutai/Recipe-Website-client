import React, { useEffect, useState } from "react";

interface Recipe {
  id: number;
  name: string;
  serves: number;
  preptime: string;
  image?: String; // change
}

interface RecipeItemProps {
  id: number;
  name: string;
  serves: number;
  preptime: string;
  image?: String; // change
}

const RecipeItem = ({ name, serves, preptime }: RecipeItemProps) => {
  return (
    <li>
      <h3>{name}</h3>
      <span>Servings: {serves}</span>
      <span>Cooking Time: {preptime}</span>
    </li>
  );
};

const RecipeList = () => {
  const [data, setData] = useState<Recipe[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetch("http://localhost:3001/recipes");
        const recipesData = await result.json();
        setData(recipesData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    getData();
  }, []);

  return (
    <ul>
      {data.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          name={recipe.name}
          serves={recipe.serves}
          preptime={recipe.preptime}
          id={recipe.id}
        />
      ))}
    </ul>
  );
};

export default RecipeList;

/*
// src/App.js
import React, { useEffect, useState } from 'react';
import { fetchData } from './api';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Backend Data</h1>
        {data ? <p>{data.message}</p> : <p>Loading...</p>}
      </header>
    </div>
  );
}

export default App;

*/
