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
  younger = new Person(); 
  older = new Person();


  register() {
    this.person.name = this.text;
    this.person.age = this.agetxt;
    this.people.push(this.person);
    this.text = this.agetxt = "";
    this.person = new Person();
    this.updateStatistic();
  }

  delete(pessoa) {
    this.people.splice(this.people.indexOf(pessoa), 1);
    this.updateStatistic();
  }

  updateStatistic() {
    for(let x in this.people) {
      for(let y in this.people) {
        if(this.people[x].age<this.people[y].age) {
          this.older = this.people[y];
          this.younger = this.people[x];
          console.log(this.people[x].age,this.people[y]);
        }
      }
    }
  }

}

export class Person {
  name;
  age;
}

