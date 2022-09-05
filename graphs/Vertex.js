import Egde from "./Egde.js";
class Vertex {
  constructor(label) {
    this.label = label;
    this.neighbours = [];
    this.listEdges = [];
    this.visited = false;
  }
  getNeighbours() {
    return this.neighbours;
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
  connect(vertex, weight = 1) {
    this.neighbours.push(vertex);
    const egde = new Egde(this, vertex, weight);
    this.listEdges.push(egde);
  }
}
export default Vertex;
