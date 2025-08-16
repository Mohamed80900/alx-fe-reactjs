import { Link } from "react-router-dom";

<Link to={`/recipe/${recipe.id}`} className="block">
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
    <img
      src={recipe.image}
      alt={recipe.title}
      className="w-full h-40 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold">{recipe.title}</h2>
    </div>
  </div>
</Link>;
