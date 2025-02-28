import { create } from "zustand";
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { FavoriteSliceType, createFavoriteSlice } from "./favoriteSlice";

export const useAppStore = create<RecipesSliceType & FavoriteSliceType>()(devtools((...a) => ({
  ...createRecipesSlice(...a),
  ...createFavoriteSlice(...a),
})))
