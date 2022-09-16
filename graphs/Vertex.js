import Egde from "./Egde.js";
import Label from "./Label.js";
class Vertex {
  constructor(label) {
    this.name = label;
    this.neighbours = [];
    this.listEdges = [];
    this.visited = false;
    this.hashMap = {};
    this.label = new Label();
  }

  getNeighbours() {
    return this.neighbours;
  }
  getListEdges() {
    return this.listEdges;
  }
  getName() {
    return this.name;
  }
  getLabel() {
    return this.label;
  }
  setVisited(visited) {
    this.visited = visited;
  }
  getVisited() {
    return this.visited;
  }

  getPathVertex(destination) {
    let aux = this.hashMap[`${this.getName()}_${destination.getName()}`];
    if (aux) {
      return { resultVertex: aux.getDestination(), weight: aux.getWeight() };
    }
    throw 'error';
  }
  connect(vertex, weight = 1) {
    this.neighbours.push(vertex);
    const egde = new Egde(this, vertex, weight);
    this.listEdges.push(egde);
    this.hashMap[`${this.getName()}_${vertex.getName()}`] = egde;
  }
}
export default Vertex;
