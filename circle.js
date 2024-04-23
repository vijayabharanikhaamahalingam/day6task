class Circle {
    radius = 1.0;
    color = "red";
    constructor(radius, color) {
        this.radius = radius
        this.color = color
    }
    // this method return the currrent radius
    getRadius() {
        return this.radius;
    }
    // this method set the given radius
    setRadius(radius) {
        this.radius = radius;
    }
    // this method return the currrent color
    getColor() {
        return this.color;
    }
     // this method set the given color
    setColor(color) {
        this.color = color;
    }
    // this method return the class property
    toString() {
        return "Circle[radius="+this.radius+",color="+this.color+"]";
    }
    // this method calculate  the area
    getArea(){
        return 3.14*this.radius*this.radius;
    }
    // this method calculate the circumference 
    getCircumference(){
        return 2*3.14*this.radius;
    }
}
const circle=new Circle();
circle.setRadius(2.0)
console.log(circle.getRadius());
circle.setColor("blue")
console.log(circle.getColor());
console.log(circle.toString());
console.log(circle.getArea());
console.log(circle.getCircumference())

const circle1=new Circle(3.0,"yellow");
console.log(circle1.getRadius());
console.log(circle1.getColor());
console.log(circle1.toString());
console.log(circle1.getArea());
console.log(circle1.getCircumference())