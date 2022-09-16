const Dijkstra = (source, graph) => {
    source.setVisited(true);
    source.getLabel().setWeight(0);
    while (!verifyPermanentLabel(graph)) {
        let neighbour = source.getNeighbours();
        for (let i = 0; i < neighbour.length; i++) {
            let destination = neighbour[i];
            const { weight } = source.getPathVertex(destination);
            let parentLabel = source.getLabel();
            let destinationLabel = destination.getLabel();
            if (parentLabel.getWeight() + weight < destinationLabel.getWeight()) {
                destinationLabel.setWeight(parentLabel.getWeight() + weight);
                destinationLabel.setParent(source);
            }
        }
        let minLabel = Infinity;
        let candidate = null;
        for (let i = 0; i < graph.length; i++) {
            let vertex = graph[i];
            if (!vertex.getVisited() && vertex.getLabel().getWeight() < minLabel) {
                minLabel = vertex.getLabel().getWeight();
                candidate = vertex;
            }
        }
        if (candidate) {
            source = candidate;
            source.setVisited(true);
        }

    }
    for (let i = 0; i < graph.length; i++) {
        let parent = graph[i].getLabel().getParent();
        console.log(`[${graph[i].getLabel().getWeight()}, ${parent ? parent.getName() : '-'}]`);
    }
    console.log(graph);
}
const verifyPermanentLabel = (graph) => {
    for (let i = 0; i < graph.length; i++) {
        if (graph[i].getVisited() == false) {
            return false;
        }
    }
    return true;
}
export default Dijkstra;