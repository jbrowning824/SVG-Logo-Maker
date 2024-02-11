const { Circle, Triangle, Square } = require('../lib/shapes.js');

describe('Shapes', () => {
    describe('Circle render method returns correct SVG string', () => {
        it('Should return a red circle, yellow text, logo text is JFB with text aligned in the middle', () => {
            const shape = new Circle('red', 150, 100);
            const svgLogo = shape.createSVG('yellow', 'JFB', shape.render());

            const testString = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="red" />
            <text x="150" 
                y="100" font-family="Arial" 
                font-size="40" 
                fill="yellow" 
                text-anchor="middle">
            JFB
            </text>
            </svg>`;

            expect(svgLogo)
                .toEqual(testString.trim('\n'));
        });
    });

    describe('Triangle render method returns correct SVG string', () => {
        it('Should return a red triangle, yellow text, logo text is JFB with text aligned in the middle', () => {
            const shape = new Triangle('red', 150, 135);
            const svgLogo = shape.createSVG('yellow', 'JFB', shape.render());

            const testString = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,20 250,180 50,180" fill="red" />
            <text x="150" 
                y="135" font-family="Arial" 
                font-size="40" 
                fill="yellow" 
                text-anchor="middle">
            JFB
            </text>
            </svg>`;

            expect(svgLogo)
                .toEqual(testString.trim('\n'));
        });
    });

    describe('Square render method returns correct SVG string', () => {
        it('Should return a red square, yellow text, logo text is JFB with text aligned in the middle', () => {
            const shape = new Square('red', 150, 135);
            const svgLogo = shape.createSVG('yellow', 'JFB', shape.render());

            const testString = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="70" y="50" width="160" height="160" fill="red" />
            <text x="150" 
                y="135" font-family="Arial" 
                font-size="40" 
                fill="yellow" 
                text-anchor="middle">
            JFB
            </text>
            </svg>`;

            expect(svgLogo)
                .toEqual(testString.trim('\n'));
        });
    });
});



