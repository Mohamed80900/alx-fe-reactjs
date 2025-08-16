import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
        <p className="text-gray-600 mb-4">{recipe.description}</p>
        <Link
          to={`/recipes/${recipe.id}`}
          className="text-blue-500 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard;
