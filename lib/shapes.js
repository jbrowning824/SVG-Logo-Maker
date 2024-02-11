
// base class
class Shape {
    constructor(color, x, y){
        this.color = color;
        this.textPosition = {x: x, y: y};
    }

    setColor(color) {
        this.color = color;
    }

    //moved this to the base class for better testing and reuseablility
    createSVG(textColor, logoText, svgRender){
        const svgContent = 
            `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${svgRender}
            <text x="${this.textPosition.x}" 
                y="${this.textPosition.y}" font-family="Arial" 
                font-size="40" 
                fill="${textColor}" 
                text-anchor="middle">
            ${logoText}
            </text>
            </svg>
        `;

        return svgContent.trim('\n');
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