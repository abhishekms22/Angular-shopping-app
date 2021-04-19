import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    constructor(private slService:ShoppingListService){}
    private recipes:Recipe[] = [new Recipe('Burger', 'McDonalds', 'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2020/07/mcdonalds-1.jpg?resize=640%2C360&ssl=1',[new Ingredient("Burger Buns", "3"), new Ingredient("French Fries", "4")]),
    new Recipe('Pizza', 'Dominos', 'https://b.zmtcdn.com/data/pictures/5/65155/7398da37ab73c4c7cb16ac860e577369.jpg?fit=around%7C450%3A450&crop=450%3A450%3B0%2C63',[new Ingredient("Pizza Base", "2"), new Ingredient("Cheese", "4")])];

    recipeSelected = new EventEmitter<Recipe>();

    getAllRecipes(){
       return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}