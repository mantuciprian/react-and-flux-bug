import {Component} from 'angular2/core'
import {CoursesComponent} from './courses.component'
import { AuthorComponent } from './author.component'
import { CarsComponent } from './cars.component'
import { ComputersComponent } from './computers.component'
import { LibraresComponent} from './librares.component'
@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
<courses></courses>
<authors></authors>
<cars></cars>
<computers></computers>
<librares></librares>
`,

    directives: [CoursesComponent, AuthorComponent, CarsComponent, ComputersComponent, LibraresComponent] 
    
})
export class AppComponent {
    
}