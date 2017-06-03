export class NutrientInfo {
  private uri: String
  private label: String
  private quantity: float
  private unit: String

  constructor(_uri, _label, _quantity, _unit){
    this.uri = _uri
    this.label = _label
    this.quantity = _quantity
    this.unit = _unit
  }
}
