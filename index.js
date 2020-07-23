class Polygon{
    constructor(array) {
        this.array = array;
    }

    get countSides() {
        return this.array.length;
    }

    get perimeter() {
        const sum = (total, num) => {
            return total + Math.round(num);
        }
        return this.array.reduce(sum, 0);
    }
}

class Triangle extends Polygon{

    get isValid() {
        let side1 = this.array[0]
        let side2 = this.array[1]
        let side3 = this.array[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
}

class Square extends Polygon{

    get isValid() {
        let side1 = this.array[0];
        let side2 = this.array[1];
        let side3 = this.array[2];
        let side4 = this.array[3];
        return ((side1 === side2) && (side1 === side3) && (side1 === side4));
    }

    get area() {
        return this.array[0] * this.array[1];
    }
}