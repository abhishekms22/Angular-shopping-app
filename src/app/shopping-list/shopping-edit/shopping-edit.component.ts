import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput", { static: false }) nameInput:ElementRef;
  @ViewChild("amountInput", { static: false }) amountInput:ElementRef;
  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
  }

  onClickAdd(){
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const ingredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(ingredient);
  }

}
