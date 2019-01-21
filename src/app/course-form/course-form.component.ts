import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {

  @Input('categoryList') categoryList;

  onCreate(course){
    console.log(course);
  }

}
