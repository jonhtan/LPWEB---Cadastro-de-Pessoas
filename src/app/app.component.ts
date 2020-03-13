import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cadastro Pessoas Estatisticas';

  person = new Person();

  people = [];

  text = "";
  age = "";
  younger = new Person(); 
  older = new Person();


  register() {
    this.person.setName(this.text);
    this.person.setAge(this.age);
    this.people.push(this.person);
    this.text = "";
    this.age = "";
    this.updateStatistic();
    this.person = new Person();
  }

  delete(pessoa) {
    let actual_p = this.people[this.people.indexOf(pessoa)];
    
    this.people.splice(this.people.indexOf(pessoa), 1);
    this.updateYounger();
    this.updateOlder();
  }

  updateStatistic() {
    if(this.younger.getName()) {
      if(this.person.getAge()>this.older.getAge()) {
        this.older = this.person;
      } else if (this.person.getAge()<this.younger.getAge()) {
        this.younger = this.person;
      }
    } else { //if not exist set the first
      this.younger = this.person;
      this.older = this.person;
    }
  }

  updateYounger() {
    this.younger = new Person();
    this.younger.setAge("99999999");
    for(let x=0; x<this.people.length;x++) {
      if(this.younger.getAge()>this.people[x].getAge()) {
        this.younger = this.people[x];
      }
    }
  }

  updateOlder() {
    this.older = new Person();
    this.older.setAge("0");
    for(let x=0; x<this.people.length;x++) {
      if(this.older.getAge()<this.people[x].getAge()) {
        this.older = this.people[x];
      }
    }
  }

}

export class Person {
  private name: string;
  private age: number;

  constructor() {}

  setName(name: string) {
    this.name = name;
  }

  setAge(age: string) {
    this.age = parseInt(age);
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

}

