import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { RecipeComponent } from '../customer/customer.component'; // change path
import { RecipeService } from '../services/customer.service'; // change path

@Component({
	selector: 'my-recipes',
	templateUrl: './recipes.component.html',
	providers: [RecipeService]
})

export class RecipesComponent implements OnInit {
	recipes:any;
	constructor(private _recipeService:RecipeService) {}

	ngOnInit(){
		this._recipeService.getRecipes_RxObservable()
			.subscribe(
				(recipes) => this.recipes = recipes,
				(err) => {console.log(err);
				}
			)
	}
}
