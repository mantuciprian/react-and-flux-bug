import { Component } from 'angular2/core'
import { ComputersService } from './computers.service'
@Component({
    selector: 'computers',
    template: `
<h2>Computers</h2>
<ul>
<li *ngFor='#computer of computers'>{{computer}}
</li>
</ul>
`,
    providers: [ComputersService]

})

export class ComputersComponent {
    computers;
    constructor(computerService: ComputersService) {
        this.computers = computerService.getComputers()
    }

}