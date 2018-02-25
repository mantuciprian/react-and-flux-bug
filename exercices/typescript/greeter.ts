/*class Animal {
    public favFood: string;
    static numOfAnimals: number = 0;
    constructor(private name: string,
        private owner: string) {
        Animal.numOfAnimals++;
    }
    ownerInfo() {
        document.write(this.name + ' is owned by ' + this.owner)

    }
    static howManyAnimals(): number {
        return Animal.numOfAnimals;
    }
    private _weight: number;
    get weight(): number {
        return this._weight
    }
    set weight(weight: number) {
        this._weight = weight;
    }
   private _age: number;
   get age(): number {
        return this._age;
    }
    set age(age: number) {
        this._age = age;
    }
}
var spike = new Animal('Spike', 'Tom');
spike.ownerInfo();
spike.weight = 20;
spike.favFood = ' pizza ';
spike.age = 10;
document.write(' and he eats ' + spike.favFood + ' ' + spike.age)

*/
////
class Car {
    public year: number;
    static numOfCars: number = 0;
   
  
    constructor(private make: string, private hp: number) {   Car.numOfCars++ }
    getMake():string {
        return this.make;
    }
    getHp() :number {
        return this.hp;
    }
   getNr(): number {
        return Car.numOfCars;
    }
    private _speed: number;
    get speed(): number {
        return this._speed;
    }
   
    set speed(speed: number) {
        return this._speed = speed;
    }
  
}
let car = new Car('BMW', 400);
car.speed = 100;
car.year = 2012;
document.write('This car is a ' + car.getMake() + ' and it has  ' + car.getHp() + '. There are ' + car.getNr() + 'car/s' + car.speed + ' ' + car.year);
class Mercedes extends Car {
    static luxuryCar: number = 0;
    constructor(make: string, hp: number) {
        super(make, hp);
        Mercedes.luxuryCar++;
    }
     getNrLux() {
        return Mercedes.luxuryCar;
    }
}
let car2 = new Mercedes('Mercedes', 412);
document.write('<br>' + 'This car is a ' + car2.getMake() + ' and it has  ' + car2.getHp())
document.write('<br>' + 'Number fo luxyuri cars : ' + car2.getNrLux() )
let car3 = new Mercedes('Bentley', 512);
let car4 = new Mercedes('Ben', 512);