class Label {
    constructor() {
        this.weight = Infinity;
        this.parent = null;
    }
    getWeight() {
        return this.weight;
    }
    getParent() {
        return this.parent;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    setParent(parent) {
        this.parent = parent;
    }
}
export default Label;