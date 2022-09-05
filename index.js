import Vertex from "./graphs/Vertex.js";
import bfs from "./graphs/bfs.js";

const main = () => {
  const v1 = new Vertex("v1");
  const v2 = new Vertex("v2");
  const v3 = new Vertex("v3");
  const v4 = new Vertex("v4");
  const v5 = new Vertex("v5");

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
  console.log(v1);
  console.log(bfs(v1, v5));
};
main();
