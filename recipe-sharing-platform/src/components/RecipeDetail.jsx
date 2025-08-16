import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams(); // بنجيب الـ id من الرابط
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // هنا ممكن يكون عندك API أو بيانات ثابتة
    // مؤقتاً هنستخدم بيانات وهمية
    const fetchRecipe = async () => {
      // simulate fetch
      const data = {
        id,
        title: `Recipe ${id}`,
        description: "This is a detailed description of the recipe.",
        image: "https://via.placeholder.com/600x400",
      };
      setRecipe(data);
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg shadow-md"
      />
      <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
      <p className="text-gray-700 mt-2">{recipe.description}</p>
    </div>
  );
}

export default RecipeDetail;
