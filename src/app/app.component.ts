import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categoryList = [
    { id: 1, name: "Development" },
    { id: 2, name: "Art" },
    { id: 3, name: "Languages" }
  ]

}
