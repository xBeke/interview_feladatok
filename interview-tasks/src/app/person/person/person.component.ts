import { Component } from '@angular/core';
import { Person } from '../models/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  persons: Array<Person> = [
    new Person('Kovács', 'András', 2009),
    new Person('Nagy', 'Bertalan', 2002),
    new Person('Kiss', 'Cili', 2014),
    new Person('Tóth', 'Dénes', 1980),
    new Person('Szabó', 'Ernő', 1955),
  ];
}
