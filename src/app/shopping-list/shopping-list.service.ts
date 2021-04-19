import { EventEmitter } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredients:Ingredient[] = [new Ingredient('Apples', '10'), new Ingredient('Tomatoes', '20')]

    ingredientAdded = new EventEmitter<Ingredient[]>();

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientAdded.emit(this.ingredients.slice())

    }

    addIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientAdded.emit(this.ingredients.slice())
    }
}