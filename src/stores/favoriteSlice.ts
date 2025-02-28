import { StateCreator } from "zustand";
import { Recipe } from "../types";

export type FavoriteSliceType = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
}

export const createFavoriteSlice : StateCreator<FavoriteSliceType> = () => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        console.log('recipe', recipe);
    }
});

