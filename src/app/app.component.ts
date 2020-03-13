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
  age = "";
  younger = new Person(); 
  older = new Person();


  register() {
    this.person.setName(this.text);
    this.person.setAge(parseInt(this.age));
    this.people.push(this.person);
    this.text = "";
    this.age = "";
    this.updateStatistic();
    this.person = new Person();
  }

  delete(pessoa) {
    this.people.splice(this.people.indexOf(pessoa), 1);
    // this.updateStatistic();
  }

  updateStatistic() {
    if(this.younger.getName()) {
      
    } else { //if not exist set the first
      this.younger = this.person;
      this.older = this.person;
    }
    // for(let x in this.people) {
    //   for(let y in this.people) {
    //     let a1 = this.people[x].age;
    //     let a2 = this.people[y].age;
    //     if(a1<a2) {
    //       this.older = this.people[y];
    //       this.younger = this.people[x];
    //       console.log(typeof(a1));
    //     }
    //   }
    // }
  }

}

export class Person {
  private name: string;
  private age: number;

  setName(name: string) {
    this.name = name;
  }

  setAge(age: number) {
    this.age = age;
  }

  getName(): string {
    return this.name;
  }

  getAge(): string {
    return this.age.toString();
  }

}

