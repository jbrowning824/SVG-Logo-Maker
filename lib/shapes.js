
// base class
class Shape {
    constructor(color){
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }
}

// create circle inherit from shape
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

// create triangle inherit from shape
class Triangle extends Shape {
    render(){
        return `<polygon points="150,20 250,180 50,180" fill="${this.color}" />`;
    }
}

// create square inherit form shape
class Square extends Shape {
    render() {
        return `<rect x="70" y="50" width="160" height="160" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Triangle, Square };