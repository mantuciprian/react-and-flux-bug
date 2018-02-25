var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var Car = (function () {
    function Car(make, hp) {
        this.make = make;
        this.hp = hp;
        Car.numOfCars++;
    }
    Car.prototype.getMake = function () {
        return this.make;
    };
    Car.prototype.getHp = function () {
        return this.hp;
    };
    Car.prototype.getNr = function () {
        return Car.numOfCars;
    };
    Object.defineProperty(Car.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (speed) {
            return this._speed = speed;
        },
        enumerable: true,
        configurable: true
    });
    Car.numOfCars = 0;
    return Car;
}());
var car = new Car('BMW', 400);
car.speed = 100;
car.year = 2012;
document.write('This car is a ' + car.getMake() + ' and it has  ' + car.getHp() + '. There are ' + car.getNr() + 'car/s' + car.speed + ' ' + car.year);
var Mercedes = (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes(make, hp) {
        _super.call(this, make, hp);
        Mercedes.luxuryCar++;
    }
    Mercedes.prototype.getNrLux = function () {
        return Mercedes.luxuryCar;
    };
    Mercedes.luxuryCar = 0;
    return Mercedes;
}(Car));
var car2 = new Mercedes('Mercedes', 412);
document.write('<br>' + 'This car is a ' + car2.getMake() + ' and it has  ' + car2.getHp());
document.write('<br>' + 'Number fo luxyuri cars : ' + car2.getNrLux());
var car3 = new Mercedes('Bentley', 512);
var car4 = new Mercedes('Ben', 512);
