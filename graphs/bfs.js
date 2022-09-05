const bfs = (source, target) => {
  let stack = new Array();
  stack.push(source);
  source.setVisited(true);
  let currentVertex = null;
  while (stack.length > 0) {
    currentVertex = stack.pop();
    if (currentVertex.getLabel() == target.getLabel()) return true;
    for (let i = 0; i < currentVertex.getNeighbours().length; i++) {
      const neighbour = currentVertex.getNeighbours()[i];
      if (!neighbour.getVisited()) {
        stack.push(neighbour);
        neighbour.setVisited(true);
      }
    }
  }
};
export default bfs;
