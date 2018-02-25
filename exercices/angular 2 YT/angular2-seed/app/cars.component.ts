import { Component } from 'angular2/core' 
import { CarsService} from './cars.service'
@Component({
    selector: 'cars',
    template: `
<h2>Cars</h2>
<ul>
<li *ngFor='#car of cars'>{{car}}
</li>
</ul>
`,
    providers: [CarsService]
})


export class CarsComponent {
    cars;
    constructor(carService: CarsService) {
        this.cars = carService.getCars();
    }

}