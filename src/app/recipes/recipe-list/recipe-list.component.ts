import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes : Recipe[] = [new Recipe('Burger', 'McDonalds', 'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2020/07/mcdonalds-1.jpg?resize=640%2C360&ssl=1'),
                        new Recipe('Pizza', 'Dominos', 'https://b.zmtcdn.com/data/pictures/5/65155/7398da37ab73c4c7cb16ac860e577369.jpg?fit=around%7C450%3A450&crop=450%3A450%3B0%2C63')]

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Recipe){
    debugger;
    this.recipeWasSelected.emit(recipe);
    console.log("Recipe in recipe-list : "+recipe)

  }

}
