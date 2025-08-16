import { Link } from "react-router-dom";

{
  /* داخل الـ map اللي بيرسم الكروت */
}
<Link to={`/recipe/${recipe.id}`}>
  <div className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition">
    <img
      src={recipe.image}
      alt={recipe.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold">{recipe.title}</h2>
      <p className="text-gray-600">{recipe.description}</p>
    </div>
  </div>
</Link>;
