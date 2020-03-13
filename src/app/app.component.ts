import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cadastro Pessoas Simplificado';

  person = new Person();

  people = [];

  text = "";
  agetxt = "";

  register() {
    this.person.name = this.text;
    this.person.age = this.agetxt;
    this.people.push(this.person);
    this.text = this.agetxt = "";
    this.person = new Person();
  }

  delete(pessoa) {
    this.people.splice(this.people.indexOf(pessoa), 1);
  }

}

export class Person {
  name;
  age;
}

