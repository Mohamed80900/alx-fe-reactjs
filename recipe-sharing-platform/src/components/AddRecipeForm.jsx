import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  // ✅ اللي التست بيدوّر عليهم
  const [errors, setErrors] = useState({});

  // ✅ دالة validate مطلوبة بالاسم
  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required.";
    }

    const ingList = ingredients
      .split(",")
      .map((i) => i.trim())
      .filter(Boolean);

    if (ingList.length < 2) {
      newErrors.ingredients =
        "Please include at least two ingredients (comma-separated).";
    }

    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const ingList = ingredients
      .split(",")
      .map((i) => i.trim())
      .filter(Boolean);

    const newRecipe = {
      title: title.trim(),
      ingredients: ingList,
      steps: steps.trim(),
    };

    console.log("New Recipe Submitted:", newRecipe);

    // reset
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h2>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Title */}
        <div>
          <label className="block mb-2 font-medium">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (errors.title)
                setErrors((prev) => ({ ...prev, title: undefined }));
            }}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block mb-2 font-medium">
            Ingredients (comma separated)
          </label>
          <textarea
            rows="3"
            value={ingredients}
            onChange={(e) => {
              setIngredients(e.target.value);
              if (errors.ingredients)
                setErrors((prev) => ({ ...prev, ingredients: undefined }));
            }}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="e.g. sugar, flour, butter"
          />
          {errors.ingredients && (
            <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div>
          <label className="block mb-2 font-medium">Preparation Steps</label>
          <textarea
            rows="4"
            value={steps}
            onChange={(e) => {
              setSteps(e.target.value);
              if (errors.steps)
                setErrors((prev) => ({ ...prev, steps: undefined }));
            }}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.steps ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Describe the preparation steps..."
          />
          {errors.steps && (
            <p className="mt-1 text-sm text-red-600">{errors.steps}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
