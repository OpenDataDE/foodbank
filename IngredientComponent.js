export class IngedientComponent{
  private uri: String
  private quantity: float
  private measure: measure
  private weight: float
  constructor(_uri, _quantity, _measure, _weight) {
    this.uri = _uri
    this.quantity = _quantity
    this.measure = _measure
    this.weight = _weight
  }
}
