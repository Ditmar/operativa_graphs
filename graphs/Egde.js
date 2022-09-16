class Egde {
  constructor(source, destination, weight) {
    this.source = source;
    this.destination = destination;
    this.weight = weight;
  }
  getWeight() {
    return this.weight;
  }
  getDestination() {
    return this.destination;
  }
}
export default Egde;
