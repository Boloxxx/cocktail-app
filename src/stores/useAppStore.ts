import { create } from "zustand";
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { FavoriteSliceType, createFavoriteSlice } from "./favoriteSlice";
import { NotificationSliceType, createNotificationSlice } from "./notificationSlice";

export const useAppStore = create<RecipesSliceType & FavoriteSliceType & NotificationSliceType>()(devtools((...a) => ({
  ...createRecipesSlice(...a),
  ...createFavoriteSlice(...a),
  ...createNotificationSlice(...a),
})))
