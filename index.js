import Vertex from "./graphs/Vertex.js";
import dfs from "./graphs/dfs.js";
import bfs from './graphs/bfs.js';
import prim from "./graphs/prim.js";
import Dijkstra from "./graphs/dijkstra.js";
const main = () => {
  const v1 = new Vertex("v1");
  const v2 = new Vertex("v2");
  const v3 = new Vertex("v3");
  const v4 = new Vertex("v4");
  const v5 = new Vertex("v5");
  const v6 = new Vertex("v6");

  v1.connect(v2, 1);
  v1.connect(v3, 3);
  v1.connect(v5, 2);

  v2.connect(v4, 2);
  v2.connect(v3, 3);

  v3.connect(v2, 3);
  v3.connect(v5, 1);

  v4.connect(v2, 2);
  v4.connect(v5, 3);

  v5.connect(v3, 1);
  v5.connect(v4, 3);
  v5.connect(v6, 10);

  //console.log(v1);
  //console.log(dfs(v1, v5));
  //console.log(bfs(v2, v5));
  const graph = []
  graph.push(v1);
  graph.push(v2);
  graph.push(v3);
  graph.push(v4);
  graph.push(v5);
  graph.push(v6);
  Dijkstra(v1, graph);
  // prim(graph);
};
main();
