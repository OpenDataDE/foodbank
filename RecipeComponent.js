export class RecipeComponent {
  private uri: String
  private label: String
  private image: String
  private calories: float
  private totalNutrients: NutrientInfo[]
  private ingredients: Ingredient[]

  constructor(_uri, _label, _image, _calories, _totalNutrients, _ingredients) {
    this.uri = _uri
    this.label = _label
    this.image = _image
    this.calories = _calories
    this.totalNutrients = _totalNutrients
    this.ingredients = _ingredients
  }
}
