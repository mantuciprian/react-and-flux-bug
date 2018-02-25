import {Component} from 'angular2/core'
import {CoursesService} from './course.service'
@Component({
    selector: 'courses',
    template: `
<h2>Courses</h2>
<ul>
<li *ngFor="#course of courses">
{{course}}
</li>
</ul>
`,
   providers: [CoursesService] 
})
export class CoursesComponent {
   
    courses;

    constructor(courseService: CoursesService) {
        this.courses = courseService.getCourses();
    }
   
}