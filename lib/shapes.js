
// base class
class Shape {
    constructor(color){
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }
}

// create circle class inherit from shape
class Circle extends Shape {
    render(){
        return ;
    }
}

// create triangle class inherit from shape
class Triangle extends Shape {
    render(){
        return `<polygon points="150,20 250,180 50,180" fill="${this.color}" />`;
    }
}

// create square class inherit form shape
class Square extends Shape {
    render(){
        return ;
    }
}

module.exports = { Circle, Triangle, Square };