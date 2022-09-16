import { remove } from "./helper/helpers.js";
import Vertex from "./Vertex.js";

const prim = (graph) => {
    let connected = []
    let unConnected = graph;
    let hashMapTree = {};
    const currentVertex = unConnected[0];
    currentVertex.setVisited(true);
    connected.push(currentVertex);
    unConnected = remove(unConnected, currentVertex);
    while (unConnected.length > 0) {
        const { source, destination, weight } = getMinVertex(connected, unConnected);
        connected.push(destination);
        unConnected = remove(unConnected, destination);
        let vertex1 = hashMapTree[`${source.getLabel()}`];
        let vertex2 = hashMapTree[`${destination.getLabel()}`];
        if (!vertex1) {
            vertex1 = new Vertex(source.getLabel());
            hashMapTree[`${source.getLabel()}`] = vertex1;

        };
        if (!vertex2) {
            vertex2 = new Vertex(destination.getLabel());
            hashMapTree[`${destination.getLabel()}`] = vertex2;
        };
        vertex1.connect(vertex2, weight);
        vertex2.connect(vertex1, weight);

    }
    console.log(hashMapTree);
}
const getMinVertex = (connect, unConnected) => {
    let minWeight = 99999;
    let vertex = null;
    let source = null;
    for (let i = 0; i < connect.length; i++) {
        const currentVertex = connect[i];
        for (let j = 0; j < currentVertex.getNeighbours().length; j++) {
            const neighbour = currentVertex.getNeighbours()[j];
            if (!neighbour.getVisited()) {
                let { resultVertex, weight } = currentVertex.getMinPathVertex(currentVertex, neighbour);

                if (weight < minWeight) {
                    source = currentVertex;
                    minWeight = weight;
                    vertex = resultVertex;
                }
            }
        }
    }
    if (vertex != null) {
        vertex.setVisited(true);
    }

    return { source, destination: vertex, weight: minWeight };
}

export default prim;