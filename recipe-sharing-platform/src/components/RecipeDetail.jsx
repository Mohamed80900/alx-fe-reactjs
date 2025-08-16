import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetail() {
  const { id } = useParams(); // جايب الـ id من الـ URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setRecipe(found);
      });
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-500 mt-10">Loading recipe...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6 shadow-md"
      />

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1">
          {recipe.ingredients.map((ing, index) => (
            <li key={index} className="text-gray-700">
              {ing}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="text-gray-700">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
