import Vertex from "./Vertex.js";
import { poll } from "./helper/helpers.js";
const bfs = (source, target) => {
    let line = [];
    source.setVisited(true);
    line.push(source);
    while (line.length > 0) {
        const { firstChild: currentVertex, newLine } = poll(line);
        line = newLine;
        if (currentVertex.getLabel() === target.getLabel()) return true;
        for (let i = 0; i < currentVertex.getNeighbours().length; i++) {
            const neighbour = currentVertex.getNeighbours()[i];
            neighbour.setVisited(true);
            line.push(neighbour);
        }
    }
    return false;
}


export default bfs;