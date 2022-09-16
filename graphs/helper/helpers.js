export const poll = (line) => {
    try {
        const firstChild = line[0];
        const newLine = line.filter(item => item.getLabel() !== firstChild.getLabel());
        return { firstChild, newLine };
    } catch (error) {
        throw error;
    }
}
export const remove = (list, itemToRemove) => {
    return list.filter(item => item.getLabel() !== itemToRemove.getLabel())
}
export const unitTest = () => {
    const line = [];
    const v1 = new Vertex("v1");
    const v2 = new Vertex("v2");
    const v3 = new Vertex("v3");
    const v4 = new Vertex("v4");
    line.push(v1);
    line.push(v2);
    line.push(v3);
    line.push(v4);
    const { firstChild, newLine } = poll(line);
    console.log(firstChild, newLine);
}