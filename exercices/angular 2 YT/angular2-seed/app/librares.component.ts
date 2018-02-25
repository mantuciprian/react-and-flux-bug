import { Component } from 'angular2/core'
import { LibraresService } from './librares.service'
@Component({
    selector: 'librares',
    template: `
<h2>Librares</h2>
<ul>
<li *ngFor='#library of librares'>{{library}}
</li>
</ul>

`,
    providers: [LibraresService]

})
export class LibraresComponent {
    librares;
    constructor(libraresService: LibraresService) {
        this.librares = libraresService.getLibrares()

    }
}