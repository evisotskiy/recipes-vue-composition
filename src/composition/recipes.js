import { ref } from '@vue/composition-api';

export function useRecipes() {
  const recipes = ref([]);
  const current = ref(null);

  const addRecipe = (recipe) => {
    recipes.value.push(recipe);
  };
  const selectRecipe = (id) => {
    current.value = recipes.value.find((_recipe) => _recipe.id === id);
  };
  const removeRecipe = (id) => {
    recipes.value = recipes.value.filter((_recipe) => _recipe.id !== id);
    current.value = null;
  };

  return { recipes, current, addRecipe, selectRecipe, removeRecipe };
}
